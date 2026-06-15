import {
  evaluateFunction
} from "../utils/evaluateFunction.js";

export function runNewton(container) {

  container.innerHTML = `
    <div style="padding:15px;color:white;font-family:Arial;">

      <h2>Newton-Raphson Visual Simulator</h2>

      <div style="display:flex;gap:10px;flex-wrap:wrap;">

        <div>
          <label>f(x)</label><br/>
          <input
            id="fn"
            value="x^2 - 4"
            style="padding:6px;width:220px;"
          />
        </div>

        <div>
          <label>x₀</label><br/>
          <input
            id="x0"
            value="3"
            type="text"
            style="padding:6px;"
          />
        </div>

        <button id="run">
          Run
        </button>

        <button id="reset">
          Reset
        </button>

      </div>

      <div
        style="
          margin-top:10px;
          color:#94a3b8;
          font-size:14px;
        "
      >
        Functions:
sin(x), cos(x), exp(-x),
x^3-4*x+1,
sin(pi*x),
sqrt(abs(x)),
e^(-x)

Initial Guess x₀:
3, pi, e,
sqrt(2),
pi/4,
2*pi,
e^2
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

      <div
        id="info"
        style="
          margin-top:10px;
          color:#4cc9f0;
        ">
      </div>

      <table
        border="1"
        style="
          width:100%;
          margin-top:10px;
          color:white;
        "
      >
        <thead>
          <tr>
            <th>Step</th>
            <th>x</th>
            <th>f(x)</th>
            <th>f'(x)</th>
            <th>next</th>
            <th>error</th>
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

  const x0 =
    container.querySelector("#x0");

  const table =
    container.querySelector("#table");

  const info =
    container.querySelector("#info");

  const W = canvas.width;
  const H = canvas.height;

  const scaleX =
    x => (x + 5) * (W / 10);

  const scaleY =
    y => H/2 - y*40;

  function f(expr,x){

    return evaluateFunction(
      expr,
      x
    );
  }

  function df(expr,x){

    const h = 0.000001;

    return (

      f(expr,x+h)

      -

      f(expr,x-h)

    )/(2*h);
  }

  let expr = "x^2 - 4";
  let x = 3;

  let step = 0;
  let rows = [];

  let running = false;

  function draw(currentX,nextX){

    ctx.clearRect(0,0,W,H);

    ctx.strokeStyle = "#555";

    ctx.beginPath();
    ctx.moveTo(0,H/2);
    ctx.lineTo(W,H/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(W/2,0);
    ctx.lineTo(W/2,H);
    ctx.stroke();

    ctx.fillStyle = "#aaa";

    ctx.fillText(
      "x",
      W-20,
      H/2-10
    );

    ctx.fillText(
      "y",
      W/2+10,
      20
    );

    ctx.strokeStyle =
      "#4cc9f0";

    ctx.lineWidth = 3;

    ctx.beginPath();

    let first = true;

    for(
      let i=-5;
      i<=5;
      i+=0.05
    ){

      let y;

      try{

        y = f(expr,i);

      }catch{

        continue;
      }

      const px =
        scaleX(i);

      const py =
        scaleY(y);

      if(first){

        ctx.moveTo(px,py);

        first=false;

      }else{

        ctx.lineTo(px,py);
      }
    }

    ctx.stroke();

    const fx =
      f(expr,currentX);

    const dfx =
      df(expr,currentX);

    ctx.fillStyle =
      "lime";

    ctx.beginPath();

    ctx.arc(
      scaleX(currentX),
      scaleY(fx),
      6,
      0,
      Math.PI*2
    );

    ctx.fill();

    ctx.strokeStyle =
      "#ff6b6b";

    ctx.lineWidth = 2;

    ctx.beginPath();

    const leftX =
      currentX - 2;

    const rightX =
      currentX + 2;

    const leftY =
      fx +
      dfx*
      (leftX-currentX);

    const rightY =
      fx +
      dfx*
      (rightX-currentX);

    ctx.moveTo(
      scaleX(leftX),
      scaleY(leftY)
    );

    ctx.lineTo(
      scaleX(rightX),
      scaleY(rightY)
    );

    ctx.stroke();

    ctx.fillStyle =
      "yellow";

    ctx.beginPath();

    ctx.arc(
      scaleX(nextX),
      H/2,
      6,
      0,
      Math.PI*2
    );

    ctx.fill();
  }

  function renderTable(){

    table.innerHTML =
      rows.map(r=>`
        <tr>
          <td>${r.step}</td>
          <td>${r.x}</td>
          <td>${r.fx}</td>
          <td>${r.dfx}</td>
          <td>${r.next}</td>
          <td>${r.error}</td>
        </tr>
      `).join("");
  }

  function iterate(){

    try{

      const fx =
        f(expr,x);

      const dfx =
        df(expr,x);

      if(
        !isFinite(fx)
      ){

        throw new Error(
          "Invalid function value"
        );
      }

      if(
        Math.abs(dfx)
        <
        1e-10
      ){

        info.innerHTML =
          "Derivative too close to zero.";

        running = false;

        return;
      }

      const next =
        x - fx/dfx;

      const error =
        Math.abs(next-x);

      draw(x,next);

      rows.push({

        step,

        x:x.toFixed(6),

        fx:fx.toFixed(6),

        dfx:dfx.toFixed(6),

        next:next.toFixed(6),

        error:error.toFixed(8)

      });

      renderTable();

      info.innerHTML = `
        Root Approximation:
        ${next.toFixed(8)}
        |
        Error:
        ${error.toFixed(8)}
      `;

      x = next;

      step++;

      if(
        step < 15 &&
        error > 0.000001 &&
        running
      ){

        setTimeout(
          iterate,
          700
        );
      }

    }catch(err){

      info.innerHTML =
        "Expression Error: "
        + err.message;

      running = false;
    }
  }

  container
    .querySelector("#run")
    .onclick = () => {

      expr =
        fn.value;

      try {

  x = evaluateFunction(
    x0.value,
    0
  );

  if(!isFinite(x)){
    throw new Error();
  }

} catch {

  info.innerHTML =
    "Invalid initial guess (x₀). Examples: 3, pi, e, sqrt(2), pi/4";

  return;
}

      rows = [];

      step = 0;

      running = true;

      iterate();
    };

  container
    .querySelector("#reset")
    .onclick = () => {

      running = false;

      rows = [];

      step = 0;

      x = 3;

      table.innerHTML = "";

      info.innerHTML = "";

      draw(3,3);
    };

  draw(3,3);
}
