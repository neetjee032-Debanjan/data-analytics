export function runGauss(container) {

  container.innerHTML = `
    <div style="color:white;padding:15px;font-family:Arial;">

      <h2>Gauss Elimination Simulator</h2>

      <p>
        Solves a 3×3 linear system using
        forward elimination and back substitution.
      </p>

      <div style="display:grid;grid-template-columns:repeat(4,70px);gap:5px;margin-bottom:10px;">

        <input id="a11" value="1">
        <input id="a12" value="1">
        <input id="a13" value="1">
        <input id="b1" value="6">

        <input id="a21" value="2">
        <input id="a22" value="3">
        <input id="a23" value="1">
        <input id="b2" value="10">

        <input id="a31" value="1">
        <input id="a32" value="2">
        <input id="a33" value="3">
        <input id="b3" value="14">

      </div>

      <button id="run">Run Elimination</button>

      <div id="status" style="margin-top:15px;"></div>

      <canvas
        id="canvas"
        width="800"
        height="350"
        style="
          margin-top:15px;
          background:#0b1220;
          border:1px solid #333;
        ">
      </canvas>

      <div id="solution"
           style="margin-top:15px;font-size:18px;">
      </div>

    </div>
  `;

  const canvas =
    container.querySelector("#canvas");

  const ctx =
    canvas.getContext("2d");

  const status =
    container.querySelector("#status");

  const solution =
    container.querySelector("#solution");

  const W = canvas.width;
  const H = canvas.height;

  function getMatrix() {

    return [

      [
        +container.querySelector("#a11").value,
        +container.querySelector("#a12").value,
        +container.querySelector("#a13").value,
        +container.querySelector("#b1").value
      ],

      [
        +container.querySelector("#a21").value,
        +container.querySelector("#a22").value,
        +container.querySelector("#a23").value,
        +container.querySelector("#b2").value
      ],

      [
        +container.querySelector("#a31").value,
        +container.querySelector("#a32").value,
        +container.querySelector("#a33").value,
        +container.querySelector("#b3").value
      ]

    ];
  }

  function drawMatrix(matrix, highlightRow = -1) {

    ctx.clearRect(0,0,W,H);

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";

    ctx.fillText(
      "Augmented Matrix [A|B]",
      20,
      40
    );

    for(let i=0;i<3;i++){

      for(let j=0;j<4;j++){

        if(i === highlightRow){

          ctx.fillStyle =
            "rgba(255,255,0,0.25)";

          ctx.fillRect(
            40 + j*120,
            70 + i*70,
            100,
            50
          );
        }

        ctx.fillStyle = "white";

        ctx.strokeRect(
          40 + j*120,
          70 + i*70,
          100,
          50
        );

        ctx.fillText(
          Number(matrix[i][j]).toFixed(2),
          60 + j*120,
          102 + i*70
        );
      }
    }

    ctx.fillStyle = "#4cc9f0";

    ctx.fillText(
      "Columns 1-3 → coefficients",
      40,
      320
    );

    ctx.fillText(
      "Column 4 → constants",
      380,
      320
    );
  }

  container.querySelector("#run").onclick = () => {

    let A = getMatrix();

    drawMatrix(A);

    let step = 0;

    const stages = [];

    stages.push({
      msg:"Initial Matrix",
      matrix:JSON.parse(JSON.stringify(A)),
      row:-1
    });

    // Row2 elimination
    let factor21 = A[1][0]/A[0][0];

    for(let j=0;j<4;j++){
      A[1][j] =
        A[1][j] -
        factor21*A[0][j];
    }

    stages.push({
      msg:"Eliminate x from Row 2",
      matrix:JSON.parse(JSON.stringify(A)),
      row:1
    });

    // Row3 elimination
    let factor31 = A[2][0]/A[0][0];

    for(let j=0;j<4;j++){
      A[2][j] =
        A[2][j] -
        factor31*A[0][j];
    }

    stages.push({
      msg:"Eliminate x from Row 3",
      matrix:JSON.parse(JSON.stringify(A)),
      row:2
    });

    let factor32 = A[2][1]/A[1][1];

    for(let j=0;j<4;j++){
      A[2][j] =
        A[2][j] -
        factor32*A[1][j];
    }

    stages.push({
      msg:"Eliminate y from Row 3",
      matrix:JSON.parse(JSON.stringify(A)),
      row:2
    });

    function animate(){

      if(step >= stages.length){

        const z =
          A[2][3]/A[2][2];

        const y =
          (A[1][3] -
          A[1][2]*z) /
          A[1][1];

        const x =
          (A[0][3] -
          A[0][2]*z -
          A[0][1]*y) /
          A[0][0];

        solution.innerHTML = `
          <h3>Solution</h3>

          x = ${x.toFixed(4)}
          <br>

          y = ${y.toFixed(4)}
          <br>

          z = ${z.toFixed(4)}
        `;

        return;
      }

      const s = stages[step];

      status.innerHTML =
        `<b>${s.msg}</b>`;

      drawMatrix(
        s.matrix,
        s.row
      );

      step++;

      setTimeout(
        animate,
        1200
      );
    }

    animate();
  };
}
