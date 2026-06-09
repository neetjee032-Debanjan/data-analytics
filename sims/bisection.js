export function runBisection(container) {

  container.innerHTML = `
    <div style="color:white; padding:15px; font-family:Arial;">
      <h2>Bisection Method Simulator</h2>

      <label>f(x):</label>
      <input id="fn" value="x*x - 4" />

      <label>a:</label>
      <input id="a" type="number" value="0" />

      <label>b:</label>
      <input id="b" type="number" value="3" />

      <button id="run">Run</button>

      <canvas id="canvas" width="700" height="350"
        style="background:#0b1220; margin-top:10px;"></canvas>

      <table border="1" style="width:100%; margin-top:10px;">
        <thead>
          <tr><th>Step</th><th>a</th><th>b</th><th>mid</th><th>f(mid)</th></tr>
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
    return Function("x", `return ${expr}`)(x);
  }

  const W = canvas.width;
  const H = canvas.height;

  const sx = x => (x + 5) * (W / 10);
  const sy = y => H/2 - y*40;

  let rows = [];

  function draw(expr, a, b, m) {
    ctx.clearRect(0,0,W,H);

    ctx.strokeStyle = "#4cc9f0";
    ctx.beginPath();

    for (let x=-5;x<=5;x+=0.05){
      ctx.lineTo(sx(x), sy(f(expr,x)));
    }
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(sx(a), H/2, 5, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(sx(b), H/2, 5, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(sx(m), sy(f(expr,m)), 6, 0, Math.PI*2);
    ctx.fill();
  }

  function renderTable() {
    table.innerHTML = rows.map(r => `
      <tr>
        <td>${r.step}</td>
        <td>${r.a}</td>
        <td>${r.b}</td>
        <td>${r.mid}</td>
        <td>${r.fmid}</td>
      </tr>
    `).join("");
  }

  container.querySelector("#run").onclick = () => {

    let expr = fn.value;
    let a = +aIn.value;
    let b = +bIn.value;

    rows = [];
    let step = 0;

    function iterate() {

      let mid = (a + b)/2;
      let fmid = f(expr, mid);

      rows.push({
        step,
        a:a.toFixed(4),
        b:b.toFixed(4),
        mid:mid.toFixed(4),
        fmid:fmid.toFixed(4)
      });

      draw(expr,a,b,mid);
      renderTable();

      if (Math.abs(fmid) > 0.0001 && step < 10) {

        if (f(expr,a)*fmid < 0) b = mid;
        else a = mid;

        step++;
        setTimeout(iterate, 600);
      }
    }

    iterate();
  };
}
