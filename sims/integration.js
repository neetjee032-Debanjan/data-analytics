import { drawAxes, drawLegend } from "./graph-utils.js";

export function runIntegration(container) {

container.innerHTML = `
<div style="color:white;font-family:Arial;padding:15px;">

  <h2>Numerical Integration Visual Lab</h2>

  <label>f(x):</label>
  <input id="fn" value="x*x"/>

  <label>a:</label>
  <input id="a" type="number" value="0"/>

  <label>b:</label>
  <input id="b" type="number" value="4"/>

  <label>n:</label>
  <input id="n" type="number" value="4"/>

  <select id="method">
    <option value="trap">Trapezoidal</option>
    <option value="simpson">Simpson 1/3</option>
  </select>

  <button id="run">Run</button>

  <div
    id="out"
    style="
      margin-top:10px;
      color:#4cc9f0;
    ">
  </div>

  <canvas
    id="canvas"
    width="850"
    height="500"
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
        <th>i</th>
        <th>x</th>
        <th>f(x)</th>
        <th>Weight</th>
      </tr>
    </thead>

    <tbody id="table"></tbody>
  </table>

</div>
`;

const fn = container.querySelector("#fn");
const aIn = container.querySelector("#a");
const bIn = container.querySelector("#b");
const nIn = container.querySelector("#n");
const method = container.querySelector("#method");
const out = container.querySelector("#out");
const table = container.querySelector("#table");

const canvas =
  container.querySelector("#canvas");

const ctx =
  canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

function f(expr,x){
  return Function(
    "x",
    `return ${expr}`
  )(x);
}

const sx =
  x => (x + 5) * (W / 10);

const sy =
  y => H/2 - y*40;

function drawGraph(expr,a,b,n,currentMethod){

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
    }
    else{
      ctx.lineTo(px,py);
    }
  }

  ctx.stroke();

  const h = (b-a)/n;

  if(currentMethod==="trap"){

    for(let i=0;i<n;i++){

      const x0 = a + i*h;
      const x1 = x0 + h;

      const y0 = f(expr,x0);
      const y1 = f(expr,x1);

      /* SHADED TRAPEZOID */
      ctx.fillStyle =
        "rgba(59,130,246,0.25)";

      ctx.beginPath();

      ctx.moveTo(
        sx(x0),
        H/2
      );

      ctx.lineTo(
        sx(x0),
        sy(y0)
      );

      ctx.lineTo(
        sx(x1),
        sy(y1)
      );

      ctx.lineTo(
        sx(x1),
        H/2
      );

      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle =
        "#f59e0b";

      ctx.stroke();
    }
  }

  /* SAMPLE POINTS */
  for(let i=0;i<=n;i++){

    const x = a + i*h;
    const y = f(expr,x);

    ctx.fillStyle = "yellow";

    ctx.beginPath();

    ctx.arc(
      sx(x),
      sy(y),
      5,
      0,
      Math.PI*2
    );

    ctx.fill();

    ctx.fillStyle = "white";

    ctx.fillText(
      "x"+i,
      sx(x)-8,
      sy(y)-10
    );
  }

  drawLegend(ctx,[

    {
      color:"#4cc9f0",
      label:"Function Curve"
    },

    {
      color:"#3b82f6",
      label:"Approximate Area"
    },

    {
      color:"#f59e0b",
      label:"Trapezoids"
    },

    {
      color:"yellow",
      label:"Sample Points"
    }

  ]);
}

container.querySelector("#run").onclick = () => {

  let a = +aIn.value;
  let b = +bIn.value;
  let n = +nIn.value;
  let expr = fn.value;

  let h = (b-a)/n;

  let result = 0;

  let rows = [];

  if(method.value==="trap"){

    for(let i=0;i<=n;i++){

      let x = a + i*h;
      let fx = f(expr,x);

      let weight =
        (i===0 || i===n)
        ? 1
        : 2;

      result += weight*fx;

      rows.push({
        i,
        x:x.toFixed(4),
        fx:fx.toFixed(4),
        w:weight
      });
    }

    result *= h/2;
  }

  else{

    if(n%2!==0){

      out.innerHTML =
        "Simpson requires even n";

      return;
    }

    for(let i=0;i<=n;i++){

      let x = a+i*h;
      let fx = f(expr,x);

      let weight =
        (i===0 || i===n)
        ? 1
        : (i%2===0 ? 2 : 4);

      result += weight*fx;

      rows.push({
        i,
        x:x.toFixed(4),
        fx:fx.toFixed(4),
        w:weight
      });
    }

    result *= h/3;
  }

  drawGraph(
    expr,
    a,
    b,
    n,
    method.value
  );

  out.innerHTML = `
    <h3>
      Approximate Integral =
      ${result.toFixed(8)}
    </h3>

    <p>
      Method:
      ${
        method.value==="trap"
        ? "Trapezoidal Rule"
        : "Simpson 1/3 Rule"
      }
    </p>
  `;

  table.innerHTML =
    rows.map(r=>`
      <tr>
        <td>${r.i}</td>
        <td>${r.x}</td>
        <td>${r.fx}</td>
        <td>${r.w}</td>
      </tr>
    `).join("");
};

}
