export function runSecant(container) {

  container.innerHTML = `
    <div style="color:white;padding:15px;font-family:Arial;">
      <h2>Secant Method Simulator</h2>

      <label>f(x):</label>
      <input id="fn" value="x*x*x - x - 2" />

      <label>x0:</label>
      <input id="x0" type="number" value="1" />

      <label>x1:</label>
      <input id="x1" type="number" value="2" />

      <button id="run">Run</button>

      <table border="1" style="width:100%;margin-top:15px;">
        <thead>
          <tr>
            <th>Step</th>
            <th>x₀</th>
            <th>x₁</th>
            <th>x₂</th>
            <th>f(x₂)</th>
          </tr>
        </thead>
        <tbody id="table"></tbody>
      </table>
    </div>
  `;

  const fn = container.querySelector("#fn");
  const x0Input = container.querySelector("#x0");
  const x1Input = container.querySelector("#x1");
  const table = container.querySelector("#table");

  function f(expr, x) {
    return Function("x", `return ${expr}`)(x);
  }

  container.querySelector("#run").onclick = () => {

    const expr = fn.value;

    let x0 = parseFloat(x0Input.value);
    let x1 = parseFloat(x1Input.value);

    let rows = [];

    for (let step = 0; step < 10; step++) {

      const fx0 = f(expr, x0);
      const fx1 = f(expr, x1);

      const denominator = fx1 - fx0;

      if (Math.abs(denominator) < 1e-12) {
        break;
      }

      const x2 =
        x1 -
        (fx1 * (x1 - x0)) / denominator;

      const fx2 = f(expr, x2);

      rows.push({
        step,
        x0: x0.toFixed(6),
        x1: x1.toFixed(6),
        x2: x2.toFixed(6),
        fx2: fx2.toFixed(6)
      });

      x0 = x1;
      x1 = x2;

      if (Math.abs(fx2) < 0.000001) {
        break;
      }
    }

    table.innerHTML = rows.map(r => `
      <tr>
        <td>${r.step}</td>
        <td>${r.x0}</td>
        <td>${r.x1}</td>
        <td>${r.x2}</td>
        <td>${r.fx2}</td>
      </tr>
    `).join("");
  };
}
