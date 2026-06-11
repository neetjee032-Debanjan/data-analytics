export function runSimpson13(container) {

  container.innerHTML = `
    <div style="color:white;padding:15px;font-family:Arial;">

      <h2>Simpson's 1/3 Rule Simulator</h2>

      <label>f(x):</label>
      <input id="fn" value="x*x" />

      <label>a:</label>
      <input id="a" type="number" value="0" />

      <label>b:</label>
      <input id="b" type="number" value="2" />

      <button id="run">
        Compute Integral
      </button>

      <canvas
        id="canvas"
        width="700"
        height="350"
        style="
          background:#0b1220;
          margin-top:10px;
          display:block;
        ">
      </canvas>

      <div
        id="result"
        style="
          margin-top:15px;
          font-size:18px;
        ">
      </div>

    </div>
  `;

  const fnInput = container.querySelector("#fn");
  const aInput = container.querySelector("#a");
  const bInput = container.querySelector("#b");
  const result = container.querySelector("#result");

  const canvas = container.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const W = canvas.width;
  const H = canvas.height;

  function f(expr, x) {
    return Function(
      "x",
      `return ${expr}`
    )(x);
  }

  function draw(expr, a, b) {

    ctx.clearRect(0, 0, W, H);

    const scaleX = W / 10;
    const scaleY = 40;

    const sx = x => (x + 5) * scaleX;
    const sy = y => H / 2 - y * scaleY;

    ctx.strokeStyle = "#4cc9f0";
    ctx.lineWidth = 2;

    ctx.beginPath();

    let first = true;

    for (let x = -5; x <= 5; x += 0.05) {

      let y = f(expr, x);

      if (first) {
        ctx.moveTo(sx(x), sy(y));
        first = false;
      } else {
        ctx.lineTo(sx(x), sy(y));
      }
    }

    ctx.stroke();

    const h = (b - a) / 2;

    const x0 = a;
    const x1 = a + h;
    const x2 = b;

    ctx.fillStyle =
      "rgba(59,130,246,0.35)";

    ctx.beginPath();

    ctx.moveTo(sx(x0), H / 2);

    for (
      let x = x0;
      x <= x2;
      x += 0.02
    ) {
      ctx.lineTo(
        sx(x),
        sy(f(expr, x))
      );
    }

    ctx.lineTo(sx(x2), H / 2);

    ctx.closePath();
    ctx.fill();

    [x0, x1, x2].forEach(x => {

      ctx.fillStyle = "yellow";

      ctx.beginPath();

      ctx.arc(
        sx(x),
        sy(f(expr, x)),
        5,
        0,
        Math.PI * 2
      );

      ctx.fill();
    });
  }

  container.querySelector("#run").onclick = () => {

    try {

      const expr = fnInput.value;

      const a = Number(aInput.value);
      const b = Number(bInput.value);

      const h = (b - a) / 2;

      const x0 = a;
      const x1 = a + h;
      const x2 = b;

      const fx0 = f(expr, x0);
      const fx1 = f(expr, x1);
      const fx2 = f(expr, x2);

      const integral =
        (h / 3) *
        (
          fx0 +
          4 * fx1 +
          fx2
        );

      result.innerHTML = `
        Simpson Approximation:
        <b>
          ${integral.toFixed(8)}
        </b>
      `;

      draw(expr, a, b);

    } catch (err) {

      result.innerHTML = `
        <span style="color:red;">
          Invalid Function
        </span>
      `;

      console.error(err);
    }

  };
}
