export function runFalsePosition(container) {

  container.innerHTML = `
    <div style="color:white; padding:15px; font-family:Arial;">
      <h2>False Position Method Simulator</h2>

      <label>f(x):</label>
      <input id="fn" value="x*x*x - x - 2" />

      <label>a:</label>
      <input id="a" type="number" value="1" />

      <label>b:</label>
      <input id="b" type="number" value="2" />

      <button id="run">Run</button>

      <canvas
        id="canvas"
        width="700"
        height="350"
        style="background:#0b1220; margin-top:10px;">
      </canvas>

      <table border="1" style="width:100%; margin-top:10px;">
        <thead>
          <tr>
            <th>Step</th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>f(c)</th>
          </tr>
        </thead>

        <tbody id="table"></tbody>
      </table>
    </div>
  `;

  const canvas = container.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const fn = container.querySelector("#fn");
  const aIn = container.querySelector("#a");
  const bIn = container.querySelector("#b");
  const table = container.querySelector("#table");

  function f(expr, x) {
    return Function(
      "x",
      `return ${expr}`
    )(x);
  }

  const W = canvas.width;
  const H = canvas.height;

  const sx = x => (x + 5) * (W / 10);
  const sy = y => H / 2 - y * 40;

  let rows = [];

  function draw(expr, a, b, c) {

    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = "#4cc9f0";
    ctx.beginPath();

    let first = true;

    for (let x = -5; x <= 5; x += 0.05) {

      const px = sx(x);
      const py = sy(f(expr, x));

      if (first) {
        ctx.moveTo(px, py);
        first = false;
      } else {
        ctx.lineTo(px, py);
      }
    }

    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(sx(a), H / 2, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(sx(b), H / 2, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(
      sx(c),
      sy(f(expr, c)),
      6,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  function renderTable() {

    table.innerHTML = rows.map(r => `
      <tr>
        <td>${r.step}</td>
        <td>${r.a}</td>
        <td>${r.b}</td>
        <td>${r.c}</td>
        <td>${r.fc}</td>
      </tr>
    `).join("");
  }

  container.querySelector("#run").onclick = () => {

    const expr = fn.value;

    let a = +aIn.value;
    let b = +bIn.value;

    rows = [];

    if (f(expr, a) * f(expr, b) >= 0) {

      table.innerHTML = `
        <tr>
          <td colspan="5">
            Interval must contain a sign change.
          </td>
        </tr>
      `;

      return;
    }

    let step = 0;

    function iterate() {

      const fa = f(expr, a);
      const fb = f(expr, b);

      const c =
        (
          a * fb -
          b * fa
        ) /
        (
          fb - fa
        );

      const fc = f(expr, c);

      rows.push({
        step,
        a: a.toFixed(4),
        b: b.toFixed(4),
        c: c.toFixed(6),
        fc: fc.toFixed(6)
      });

      draw(expr, a, b, c);
      renderTable();

      if (
        Math.abs(fc) > 0.0001 &&
        step < 12
      ) {

        if (fa * fc < 0) {
          b = c;
        } else {
          a = c;
        }

        step++;

        setTimeout(
          iterate,
          600
        );
      }
    }

    iterate();
  };
}
