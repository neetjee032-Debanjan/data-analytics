export function runNewton(container) {

  container.innerHTML = `
    <div style="padding:15px; border-radius:12px; background:rgba(255,255,255,0.04);">

      <h3>Newton-Raphson Interactive Solver</h3>

      <!-- FUNCTION INPUT -->
      <div style="margin-top:10px;">
        <label>Function f(x):</label><br/>
        <input id="fnInput" type="text" value="x*x - 4"
          style="padding:8px; width:250px; margin-top:5px;" />
      </div>

      <!-- DERIVATIVE NOTE -->
      <p style="opacity:0.7; font-size:12px; margin-top:5px;">
        (Derivative is computed automatically using numerical approximation)
      </p>

      <!-- GUESS INPUT -->
      <div style="margin-top:10px;">
        <label>Initial Guess x₀:</label><br/>
        <input id="guessInput" type="number" value="2"
          style="padding:8px; width:100px; margin-top:5px;" />
      </div>

      <button id="runBtn" style="margin-top:10px;">
        Run Newton-Raphson
      </button>

      <div id="output" style="margin-top:15px;"></div>
    </div>
  `;

  const output = container.querySelector("#output");

  function f(expr, x) {
    return Function("x", `return ${expr}`)(x);
  }

  function derivative(expr, x) {
    const h = 0.00001;
    return (f(expr, x + h) - f(expr, x - h)) / (2 * h);
  }

  container.querySelector("#runBtn").onclick = () => {

    const expr = container.querySelector("#fnInput").value;
    let x = parseFloat(container.querySelector("#guessInput").value);

    let resultHTML = "<h4>Iterations:</h4><table border='1' cellpadding='6'>";
    resultHTML += "<tr><th>n</th><th>x</th><th>f(x)</th></tr>";

    for (let i = 0; i < 8; i++) {

      const fx = f(expr, x);
      const dfx = derivative(expr, x);

      if (Math.abs(dfx) < 1e-8) {
        resultHTML += `<tr><td>${i}</td><td colspan='2'>Derivative too small</td></tr>`;
        break;
      }

      resultHTML += `<tr>
        <td>${i}</td>
        <td>${x.toFixed(6)}</td>
        <td>${fx.toFixed(6)}</td>
      </tr>`;

      x = x - fx / dfx;
    }

    resultHTML += "</table>";

    resultHTML += `<p style="margin-top:10px;">
      Approx Root ≈ <b>${x.toFixed(6)}</b>
    </p>`;

    output.innerHTML = resultHTML;
  };
}
