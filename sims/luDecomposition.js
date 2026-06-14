export function runLU(container) {

  container.innerHTML = `

    <div class="card">

      <h2>LU Decomposition Simulator</h2>

      <p>
        Decompose matrix A into L × U
      </p>

      <div
        style="
          display:grid;
          grid-template-columns:
          repeat(3,80px);
          gap:8px;
          margin-top:15px;
        "
      >

        <input id="a11" value="2">
        <input id="a12" value="-1">
        <input id="a13" value="1">

        <input id="a21" value="3">
        <input id="a22" value="3">
        <input id="a23" value="9">

        <input id="a31" value="3">
        <input id="a32" value="3">
        <input id="a33" value="5">

      </div>

      <button
        id="lu-run"
        style="margin-top:15px;"
      >
        Decompose
      </button>

      <div
        id="lu-output"
        style="margin-top:20px;"
      ></div>

    </div>

  `;

  document
    .getElementById("lu-run")
    .onclick = () => {

      const A = [

        [
          Number(a11.value),
          Number(a12.value),
          Number(a13.value)
        ],

        [
          Number(a21.value),
          Number(a22.value),
          Number(a23.value)
        ],

        [
          Number(a31.value),
          Number(a32.value),
          Number(a33.value)
        ]

      ];

      const L = [
        [1,0,0],
        [0,1,0],
        [0,0,1]
      ];

      const U = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];

      for(let i=0;i<3;i++){

        for(let k=i;k<3;k++){

          let sum = 0;

          for(let j=0;j<i;j++){

            sum +=
              L[i][j] *
              U[j][k];
          }

          U[i][k] =
            A[i][k] - sum;
        }

        for(let k=i+1;k<3;k++){

          let sum = 0;

          for(let j=0;j<i;j++){

            sum +=
              L[k][j] *
              U[j][i];
          }

          L[k][i] =
            (
              A[k][i] - sum
            ) / U[i][i];
        }
      }

      document
        .getElementById("lu-output")
        .innerHTML = `

          <h3>L Matrix</h3>

          <pre>
${JSON.stringify(L,null,2)}
          </pre>

          <h3>U Matrix</h3>

          <pre>
${JSON.stringify(U,null,2)}
          </pre>

        `;
    };
}
