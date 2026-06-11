import { drawAxes, drawLegend } from "./graph-utils.js";

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

      <div id="status"
           style="margin-top:10px;
                  font-size:16px;
                  color:#4cc9f0;">
      </div>

      <canvas
        id="canvas"
        width="800"
        height="450"
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
            <th>Step</th>
            <th>a</th>
            <th>b</th>
            <th>Midpoint</th>
            <th>f(mid)</th>
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

  const fn =
    container.querySelector("#fn");

  const aIn =
    container.querySelector("#a");

  const bIn =
    container.querySelector("#b");

  const table =
    container.querySelector("#table");

  const status =
    container.querySelector("#status");

  const W = canvas.width;
  const H = canvas.height;

  function f(expr, x) {
    return Function(
      "x",
      `return ${expr}`
    )(x);
  }

  const sx =
    x => (x + 5) * (W / 10);

  const sy =
    y => H/2 - y*40;

  let rows = [];

  function draw(expr,a,b,m){

    ctx.clearRect(0,0,W,H);

    drawAxes(ctx,W,H);

    /* FUNCTION CURVE */
    ctx.strokeStyle = "#4cc9f0";
    ctx.lineWidth = 3;

    ctx.beginPath();

    let first = true;

    for(let x=-5;x<=5;x+=0.05){

      const px = sx(x);
      const py = sy(f(expr,x));

      if(first){
        ctx.moveTo(px,py);
        first = false;
      } else {
        ctx.lineTo(px,py);
      }
    }

    ctx.stroke();

    /* INTERVAL START */
    ctx.fillStyle = "red";

    ctx.beginPath();
    ctx.arc(
      sx(a),
      H/2,
      6,
      0,
      Math.PI*2
    );
    ctx.fill();

    /* INTERVAL END */
    ctx.fillStyle = "lime";

    ctx.beginPath();
    ctx.arc(
      sx(b),
      H/2,
      6,
      0,
      Math.PI*2
    );
    ctx.fill();

    /* MIDPOINT */
    ctx.fillStyle = "yellow";

    ctx.beginPath();
    ctx.arc(
      sx(m),
      sy(f(expr,m)),
      7,
      0,
      Math.PI*2
    );
    ctx.fill();

    /* LABELS */
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";

    ctx.fillText(
      `a = ${a.toFixed(3)}`,
      sx(a)-20,
      H/2+25
    );

    ctx.fillText(
      `b = ${b.toFixed(3)}`,
      sx(b)-20,
      H/2+25
    );

    ctx.fillText(
      `mid`,
      sx(m)+10,
      sy(f(expr,m))
    );

    /* LEGEND */
    drawLegend(ctx,[
      {
        color:"#4cc9f0",
        label:"Function Curve"
      },
      {
        color:"red",
        label:"Left Interval Endpoint (a)"
      },
      {
        color:"lime",
        label:"Right Interval Endpoint (b)"
      },
      {
        color:"yellow",
        label:"Current Midpoint"
      }
    ]);
  }

  function renderTable(){

    table.innerHTML =
      rows.map(r => `
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

    function iterate(){

      let mid = (a+b)/2;

      let fmid =
        f(expr,mid);

      rows.push({

        step,

        a:a.toFixed(4),

        b:b.toFixed(4),

        mid:mid.toFixed(4),

        fmid:fmid.toFixed(6)

      });

      draw(expr,a,b,mid);

      renderTable();

      status.innerHTML = `
        Iteration ${step}
        |
        Current Root Estimate:
        <b>${mid.toFixed(6)}</b>
        |
        f(mid)=
        ${fmid.toFixed(6)}
      `;

      if(
        Math.abs(fmid) > 0.0001 &&
        step < 12
      ){

        if(
          f(expr,a) * fmid < 0
        ){
          b = mid;
        } else {
          a = mid;
        }

        step++;

        setTimeout(
          iterate,
          800
        );
      }
      else {

        status.innerHTML = `
          ✅ Converged

          <br>

          Approximate Root:
          <b>${mid.toFixed(8)}</b>
        `;
      }
    }

    iterate();
  };
}
