import { drawAxes, drawLegend } from "./graph-utils.js";

export function runDE(container){

container.innerHTML = `
<div style="color:white;padding:15px;font-family:Arial;">

  <h2>Differential Equations Visual Solver</h2>

  <label>dy/dx = f(x,y)</label>
  <input id="fn" value="x + y"/>

  <label>x0:</label>
  <input id="x0" type="number" value="0"/>

  <label>y0:</label>
  <input id="y0" type="number" value="1"/>

  <label>h:</label>
  <input id="h" type="number" value="0.1"/>

  <label>steps:</label>
  <input id="n" type="number" value="10"/>

  <select id="method">
    <option value="euler">Euler</option>
    <option value="rk4">RK4</option>
  </select>

  <button id="run">Run</button>

  <div
    id="status"
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
        <th>Step</th>
        <th>x</th>
        <th>y</th>
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

const table =
  container.querySelector("#table");

const status =
  container.querySelector("#status");

const W = canvas.width;
const H = canvas.height;

function f(expr,x,y){
  return Function(
    "x",
    "y",
    `return ${expr}`
  )(x,y);
}

const sx =
  x => (x + 2) * (W / 12);

const sy =
  y => H - ((y + 5) * (H / 12));

function drawSlopeField(expr){

  drawAxes(ctx,W,H);

  ctx.strokeStyle =
    "rgba(255,255,255,0.35)";

  for(let x=-2;x<=10;x+=0.5){

    for(let y=-5;y<=5;y+=0.5){

      let m;

      try{
        m = f(expr,x,y);
      }
      catch{
        continue;
      }

      const len = 0.15;

      const dx =
        len /
        Math.sqrt(1+m*m);

      const dy =
        m*dx;

      ctx.beginPath();

      ctx.moveTo(
        sx(x-dx),
        sy(y-dy)
      );

      ctx.lineTo(
        sx(x+dx),
        sy(y+dy)
      );

      ctx.stroke();
    }
  }
}

function drawSolution(points){

  ctx.strokeStyle = "#f59e0b";
  ctx.lineWidth = 3;

  ctx.beginPath();

  points.forEach((p,i)=>{

    if(i===0){
      ctx.moveTo(
        sx(p.x),
        sy(p.y)
      );
    }
    else{
      ctx.lineTo(
        sx(p.x),
        sy(p.y)
      );
    }

  });

  ctx.stroke();

  points.forEach(p=>{

    ctx.fillStyle = "yellow";

    ctx.beginPath();

    ctx.arc(
      sx(p.x),
      sy(p.y),
      4,
      0,
      Math.PI*2
    );

    ctx.fill();
  });

  drawLegend(ctx,[

    {
      color:"#ffffff",
      label:"Slope Field"
    },

    {
      color:"#f59e0b",
      label:"Numerical Solution"
    },

    {
      color:"yellow",
      label:"Computed Points"
    }

  ]);
}

container.querySelector("#run").onclick = () => {

  const expr =
    container.querySelector("#fn").value;

  let x =
    +container.querySelector("#x0").value;

  let y =
    +container.querySelector("#y0").value;

  const h =
    +container.querySelector("#h").value;

  const n =
    +container.querySelector("#n").value;

  const method =
    container.querySelector("#method").value;

  let rows = [];

  let points = [
    {x,y}
  ];

  table.innerHTML = "";

  ctx.clearRect(0,0,W,H);

  drawSlopeField(expr);

  let step = 0;

  function iterate(){

    let k1,k2,k3,k4;

    if(method==="euler"){

      k1 =
        f(expr,x,y);

      y =
        y + h*k1;
    }

    else{

      k1 =
        f(expr,x,y);

      k2 =
        f(
          expr,
          x+h/2,
          y+h*k1/2
        );

      k3 =
        f(
          expr,
          x+h/2,
          y+h*k2/2
        );

      k4 =
        f(
          expr,
          x+h,
          y+h*k3
        );

      y =
        y +
        (h/6) *
        (
          k1 +
          2*k2 +
          2*k3 +
          k4
        );
    }

    x += h;

    points.push({x,y});

    rows.push({
      step,
      x:x.toFixed(4),
      y:y.toFixed(4)
    });

    table.innerHTML =
      rows.map(r=>`
        <tr>
          <td>${r.step}</td>
          <td>${r.x}</td>
          <td>${r.y}</td>
        </tr>
      `).join("");

    ctx.clearRect(0,0,W,H);

    drawSlopeField(expr);

    drawSolution(points);

    status.innerHTML = `
      Step ${step}
      |
      x = ${x.toFixed(4)}
      |
      y = ${y.toFixed(4)}
    `;

    step++;

    if(step < n){

      setTimeout(
        iterate,
        600
      );
    }
    else{

      status.innerHTML = `
        ✅ Completed

        <br>

        Final Value:
        y(${x.toFixed(3)})
        =
        <b>${y.toFixed(6)}</b>
      `;
    }
  }

  iterate();
};

}
