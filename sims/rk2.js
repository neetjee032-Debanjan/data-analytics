export function runRK2(container) {

  container.innerHTML = `

    <div class="card">

      <h2>Runge-Kutta 2nd Order Simulator</h2>

      <p>
        Solve dy/dx = f(x,y)
      </p>

      <div style="margin:10px 0;">

        <label>f(x,y)</label>

        <input
          id="rk2-f"
          value="x+y"
          style="width:100%;"
        />

      </div>

      <div
        style="
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        "
      >

        <div>
          <label>x₀</label>
          <input
            id="rk2-x0"
            type="number"
            value="0"
          />
        </div>

        <div>
          <label>y₀</label>
          <input
            id="rk2-y0"
            type="number"
            value="1"
          />
        </div>

        <div>
          <label>h</label>
          <input
            id="rk2-h"
            type="number"
            value="0.1"
            step="0.01"
          />
        </div>

        <div>
          <label>Steps</label>
          <input
            id="rk2-n"
            type="number"
            value="10"
          />
        </div>

      </div>

      <button
        id="rk2-run"
        style="margin-top:15px;"
      >
        Solve
      </button>

      <div
        id="rk2-output"
        style="margin-top:20px;"
      ></div>

    </div>

  `;

  document
    .getElementById("rk2-run")
    .onclick = () => {

      const f =
        new Function(
          "x",
          "y",
          `return ${
            document.getElementById("rk2-f").value
          }`
        );

      let x =
        Number(
          document.getElementById("rk2-x0").value
        );

      let y =
        Number(
          document.getElementById("rk2-y0").value
        );

      const h =
        Number(
          document.getElementById("rk2-h").value
        );

      const n =
        Number(
          document.getElementById("rk2-n").value
        );

      let html = `
        <table border="1" cellpadding="6">

          <tr>
            <th>Step</th>
            <th>x</th>
            <th>y</th>
          </tr>
      `;

      for (let i = 0; i < n; i++) {

        html += `
          <tr>
            <td>${i}</td>
            <td>${x.toFixed(4)}</td>
            <td>${y.toFixed(6)}</td>
          </tr>
        `;

        const k1 =
          h * f(x, y);

        const k2 =
          h * f(
            x + h,
            y + k1
          );

        y =
          y +
          (k1 + k2) / 2;

        x += h;
      }

      html += "</table>";

      document
        .getElementById(
          "rk2-output"
        )
        .innerHTML = html;
    };
}
