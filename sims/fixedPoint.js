import { drawAxes, drawLegend } from "./graph-utils.js";

export function runFixedPoint(container) {

  container.innerHTML = `
    <div style="color:white;padding:15px;font-family:Arial;">

      <h2>Fixed Point Iteration Simulator</h2>

      <p>
        Visualizes convergence using a Cobweb Diagram.
      </p>

      <label>g(x):</label>
      <input
        id="fn"
        value="Math.cos(x)"
        style="width:220px;"
      />

      <label>x₀:</label>
      <input
        id="x0"
        type="number"
        value="0.5"
      />

      <button id="run">Run</button>

      <div
        id="status"
        style="
          margin-top:10px;
          color:#4cc9f0;
        ">
      </div>

      <canvas
        id="canvas"
        width="800"
        height="500"
        style="
          background:#0b1220;
          margin-top:10px;
          border:1px solid #333;
        ">
      </canvas>

      <table
        border="1"
        style="
          width:100%;
          margin-top:10px;
          color:white;
        ">
        <thead>
          <tr>
            <th>Iteration</th>
            <th>xₙ</th>
            <th>xₙ₊₁</th>
            <th>Error</th>
          </tr>
        </thead>

        <tbody id="table"></tbody>
      </table>

    </div>
  `;

  const canvas =
    container.querySelector("#canvas");

  const ctx =
    canvas.getContext("2d");

  const fnInput =
    container.querySelector("#fn");

  const x0Input =
    container.querySelector("#x0");

  const table =
    container.querySelector("#table");

  const status =
    container.querySelector("#status");

  const W = canvas.width;
  const H = canvas.height;

  const sx =
    x => (x + 2) * (W / 4);

  const sy =
    y => H - ((y + 1) * (H / 3));

  function g(expr,x){
    return Function(
      "x",
      `return ${expr}`
    )(x);
  }

  function drawBase(expr){

    ctx.clearRect(0,0,W,H);

    drawAxes(ctx,W,H);

    /* y=x */
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;

    ctx.beginPath();

    for(let x=-2;x<=2;x+=0.02){

      const px = sx(x);
      const py = sy(x);

      if(x === -2){
        ctx.moveTo(px,py);
      } else {
        ctx.lineTo(px,py);
      }
    }

    ctx.stroke();

    /* g(x) */
    ctx.strokeStyle = "#4cc9f0";
    ctx.lineWidth = 3;

    ctx.beginPath();

    let first = true;

    for(let x=-2;x<=2;x+=0.02){

      const px = sx(x);
      const py = sy(g(expr,x));

      if(first){
        ctx.moveTo(px,py);
        first = false;
      } else {
        ctx.lineTo(px,py);
      }
    }

    ctx.stroke();

    drawLegend(ctx,[

      {
        color:"#4cc9f0",
        label:"g(x)"
      },

      {
        color:"#ffffff",
        label:"y = x"
      },

      {
        color:"#f59e0b",
        label:"Cobweb Path"
      }

    ]);
  }

  function drawCobweb(points){

    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 2;

    ctx.beginPath();

    for(let i=0;i<points.length;i++){

      const p = points[i];

      if(i===0){
        ctx.moveTo(
          sx(p.x),
          sy(p.y)
        );
      } else {
        ctx.lineTo(
          sx(p.x),
          sy(p.y)
        );
      }
    }

    ctx.stroke();

    points.forEach(p => {

      ctx.fillStyle = "yellow";

      ctx.beginPath();

      ctx.arc(
        sx(p.x),
        sy(p.y),
        4,
        0,
        Math.PI*2
      );

      ctx.fill();
    });
  }

  container.querySelector("#run").onclick = () => {

    const expr =
      fnInput.value;

    let x =
      parseFloat(
        x0Input.value
      );

    let rows = [];
    let cobweb = [];

    drawBase(expr);

    let step = 0;

    function iterate(){

      const next =
        g(expr,x);

      const error =
        Math.abs(next-x);

      rows.push({
        step,
        x:x.toFixed(6),
        next:next.toFixed(6),
        error:error.toFixed(6)
      });

      table.innerHTML =
        rows.map(r => `
          <tr>
            <td>${r.step}</td>
            <td>${r.x}</td>
            <td>${r.next}</td>
            <td>${r.error}</td>
          </tr>
        `).join("");

      cobweb.push({
        x:x,
        y:x
      });

      cobweb.push({
        x:x,
        y:next
      });

      cobweb.push({
        x:next,
        y:next
      });

      drawBase(expr);
      drawCobweb(cobweb);

      status.innerHTML = `
        Iteration ${step}
        |
        x = ${x.toFixed(6)}
        |
        Next = ${next.toFixed(6)}
      `;

      x = next;
      step++;

      if(
        step < 12 &&
        error > 0.0001
      ){
        setTimeout(
          iterate,
          800
        );
      }
      else {

        status.innerHTML = `
          ✅ Converged

          <br>

          Fixed Point ≈
          <b>${x.toFixed(8)}</b>
        `;
      }
    }

    iterate();
  };
}
