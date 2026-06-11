export function runFixedPoint(container) {

  container.innerHTML = `
    <div style="color:white;padding:15px;font-family:Arial;">

      <h2>Fixed Point Iteration Simulator</h2>

      <p>
        Enter a function g(x). The simulator solves:
        <b>x = g(x)</b>
      </p>

      <label>g(x):</label>
      <input id="gx"
        value="Math.cos(x)"
        style="padding:6px;width:250px;" />

      <label style="margin-left:15px;">
        Initial Guess:
      </label>

      <input id="x0"
        type="number"
        value="0.5"
        step="0.1"
        style="padding:6px;width:100px;" />

      <button id="run">Run</button>
      <button id="reset">Reset</button>

      <br/><br/>

      <canvas
        id="canvas"
        width="800"
        height="420"
        style="
          background:#0b1220;
          border:1px solid #333;
        ">
      </canvas>

      <div id="result"
        style="
          margin-top:15px;
          font-size:18px;
          color:#7dd3fc;
        ">
      </div>

      <table
        border="1"
        style="
          width:100%;
          margin-top:15px;
          color:white;
          border-collapse:collapse;
        ">

        <thead>
          <tr>
            <th>Step</th>
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

  const gxInput =
    container.querySelector("#gx");

  const x0Input =
    container.querySelector("#x0");

  const table =
    container.querySelector("#table");

  const result =
    container.querySelector("#result");

  const W = canvas.width;
  const H = canvas.height;

  const sx = x => (x + 3) * (W / 6);
  const sy = y => H/2 - y * 60;

  function g(expr, x) {
    return Function(
      "x",
      `return ${expr}`
    )(x);
  }

  let rows = [];

  function drawAxes() {

    ctx.strokeStyle = "#555";

    ctx.beginPath();
    ctx.moveTo(0, H/2);
    ctx.lineTo(W, H/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(W/2, 0);
    ctx.lineTo(W/2, H);
    ctx.stroke();

    ctx.fillStyle = "#aaa";

    ctx.fillText("x", W-15, H/2-8);
    ctx.fillText("y", W/2+8, 15);
  }

  function drawGraph(expr) {

    ctx.strokeStyle = "#4cc9f0";
    ctx.lineWidth = 2;

    ctx.beginPath();

    let first = true;

    for (let x=-3; x<=3; x+=0.02) {

      let y;

      try {
        y = g(expr, x);
      } catch {
        continue;
      }

      if (first) {
        ctx.moveTo(sx(x), sy(y));
        first = false;
      } else {
        ctx.lineTo(sx(x), sy(y));
      }
    }

    ctx.stroke();

    ctx.strokeStyle = "#22c55e";

    ctx.beginPath();

    ctx.moveTo(sx(-3), sy(-3));
    ctx.lineTo(sx(3), sy(3));

    ctx.stroke();

    ctx.fillStyle = "#4cc9f0";
    ctx.fillText("g(x)", 20, 20);

    ctx.fillStyle = "#22c55e";
    ctx.fillText("y=x", 20, 40);
  }

  function drawCobweb(points) {

    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;

    points.forEach(p => {

      ctx.beginPath();

      ctx.moveTo(
        sx(p.x),
        sy(p.x)
      );

      ctx.lineTo(
        sx(p.x),
        sy(p.gx)
      );

      ctx.stroke();

      ctx.beginPath();

      ctx.moveTo(
        sx(p.x),
        sy(p.gx)
      );

      ctx.lineTo(
        sx(p.gx),
        sy(p.gx)
      );

      ctx.stroke();
    });
  }

  function renderTable() {

    table.innerHTML =
      rows.map(r => `
        <tr>
          <td>${r.step}</td>
          <td>${r.x}</td>
          <td>${r.next}</td>
          <td>${r.error}</td>
        </tr>
      `).join("");
  }

  function redraw(expr, cobweb = []) {

    ctx.clearRect(0,0,W,H);

    drawAxes();
    drawGraph(expr);
    drawCobweb(cobweb);
  }

  container.querySelector("#run").onclick = () => {

    const expr = gxInput.value;

    let x =
      parseFloat(x0Input.value);

    rows = [];

    let cobweb = [];

    let step = 0;

    function iterate() {

      let next;

      try {

        next = g(expr, x);

      } catch {

        alert(
          "Invalid function."
        );

        return;
      }

      let error =
        Math.abs(next - x);

      rows.push({
        step,
        x: x.toFixed(6),
        next: next.toFixed(6),
        error: error.toFixed(6)
      });

      cobweb.push({
        x,
        gx: next
      });

      renderTable();
      redraw(expr, cobweb);

      result.innerHTML =
        `
          Current Approximation:
          <b>${next.toFixed(8)}</b>
        `;

      x = next;
      step++;

      if (
        error > 0.0001 &&
        step < 15
      ) {
        setTimeout(
          iterate,
          700
        );
      }
    }

    iterate();
  };

  container.querySelector("#reset").onclick =
    () => {

      rows = [];

      table.innerHTML = "";

      result.innerHTML = "";

      redraw(
        gxInput.value,
        []
      );
    };

  redraw(
    gxInput.value,
    []
  );
}
