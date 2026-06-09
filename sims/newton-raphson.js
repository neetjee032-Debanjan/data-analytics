export function runNewton(container) {

  container.innerHTML = `
    <div style="padding:15px; border-radius:12px; background:rgba(255,255,255,0.04);">

      <h3>Newton-Raphson Visual Simulator</h3>

      <!-- INPUTS -->
      <div style="display:flex; gap:15px; flex-wrap:wrap; margin-top:10px;">

        <div>
          <label>Function f(x):</label><br/>
          <input id="fnInput" value="x*x - 4"
            style="padding:8px; width:220px;" />
        </div>

        <div>
          <label>Initial Guess x₀:</label><br/>
          <input id="guessInput" type="number" value="2"
            style="padding:8px; width:100px;" />
        </div>

      </div>

      <button id="runBtn" style="margin-top:12px;">
        Run Simulation
      </button>

      <!-- GRAPH -->
      <canvas id="graph" width="650" height="320"
        style="margin-top:15px; background:#0b1220; border-radius:10px;"></canvas>

      <!-- LEGEND -->
      <div style="margin-top:10px; font-size:13px;">
        <span style="color:#60a5fa;">■ Function</span> |
        <span style="color:#f59e0b;">■ Tangent</span> |
        <span style="color:#22c55e;">■ Current Point</span>
      </div>

      <!-- OUTPUT -->
      <div id="output" style="margin-top:10px;"></div>

      <!-- ITERATION TABLE -->
      <div id="table" style="margin-top:15px;"></div>

    </div>
  `;

  const canvas = container.querySelector("#graph");
  const ctx = canvas.getContext("2d");

  const output = container.querySelector("#output");
  const tableDiv = container.querySelector("#table");

  const W = canvas.width;
  const H = canvas.height;

  // --------------------------
  // FUNCTION PARSER
  // --------------------------
  function f(expr, x) {
    return Function("x", `return ${expr}`)(x);
  }

  function derivative(expr, x) {
    const h = 0.00001;
    return (f(expr, x + h) - f(expr, x - h)) / (2 * h);
  }

  // --------------------------
  // SCALE FUNCTIONS
  // --------------------------
  function scaleX(x) {
    return (x + 5) * (W / 10);
  }

  function scaleY(y) {
    return H/2 - y * 40;
  }

  // --------------------------
  // DRAW GRID + AXES
  // --------------------------
  function drawGrid() {

    ctx.clearRect(0, 0, W, H);

    // grid
    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    for (let i = 0; i < W; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, H);
      ctx.stroke();
    }

    for (let i = 0; i < H; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(W, i);
      ctx.stroke();
    }

    // axes
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.beginPath();
    ctx.moveTo(0, H/2);
    ctx.lineTo(W, H/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(W/2, 0);
    ctx.lineTo(W/2, H);
    ctx.stroke();
  }

  // --------------------------
  // DRAW FUNCTION CURVE
  // --------------------------
  function drawFunction(expr) {

    ctx.strokeStyle = "#60a5fa";
    ctx.beginPath();

    for (let x = -5; x <= 5; x += 0.05) {
      let y = f(expr, x);
      ctx.lineTo(scaleX(x), scaleY(y));
    }

    ctx.stroke();
  }

  // --------------------------
  // ANIMATION ENGINE
  // --------------------------
  function animate(expr, x0) {

    let x = x0;
    let step = 0;

    let rows = [];

    function frame() {

      drawGrid();
      drawFunction(expr);

      let fx = f(expr, x);
      let dfx = derivative(expr, x);

      // CURRENT POINT
      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(scaleX(x), scaleY(fx), 6, 0, Math.PI * 2);
      ctx.fill();

      // TANGENT LINE
      let x1 = x - 1;
      let x2 = x + 1;

      let y1 = fx + dfx * (x1 - x);
      let y2 = fx + dfx * (x2 - x);

      ctx.strokeStyle = "#f59e0b";
      ctx.beginPath();
      ctx.moveTo(scaleX(x1), scaleY(y1));
      ctx.lineTo(scaleX(x2), scaleY(y2));
      ctx.stroke();

      // iteration data
      let nextX = x - fx / dfx;

      rows.push({
        step,
        x: x.toFixed(6),
        fx: fx.toFixed(6),
        next: nextX.toFixed(6)
      });

      // OUTPUT INFO
      output.innerHTML = `
        <b>Current Step:</b> ${step}<br/>
        x = ${x.toFixed(6)}<br/>
        f(x) = ${fx.toFixed(6)}<br/>
        next x = ${nextX.toFixed(6)}
      `;

      // TABLE RENDER (RESTORED)
      tableDiv.innerHTML = `
        <h4>Iteration Table</h4>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr>
            <th>Step</th>
            <th>x</th>
            <th>f(x)</th>
            <th>Next x</th>
          </tr>
          ${rows.map(r => `
            <tr>
              <td>${r.step}</td>
              <td>${r.x}</td>
              <td>${r.fx}</td>
              <td>${r.next}</td>
            </tr>
          `).join("")}
        </table>
      `;

      x = nextX;
      step++;

      if (step < 8 && Math.abs(fx) > 0.0001) {
        requestAnimationFrame(frame);
      }
    }

    frame();
  }

  // --------------------------
  // BUTTON
  // --------------------------
  container.querySelector("#runBtn").onclick = () => {

    const expr = container.querySelector("#fnInput").value;
    const x0 = parseFloat(container.querySelector("#guessInput").value);

    animate(expr, x0);
  };
}
