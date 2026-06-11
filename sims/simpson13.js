import { drawAxes, drawLegend } from "./graph-utils.js";

export function runSimpson13(container) {

  container.innerHTML = `
    <div style="color:white;padding:15px;font-family:Arial;">

      <h2>Simpson's 1/3 Rule Visual Simulator</h2>

      <label>f(x):</label>
      <input id="fn" value="x*x" />

      <label>a:</label>
      <input id="a" type="number" value="0" />

      <label>b:</label>
      <input id="b" type="number" value="2" />

      <button id="run">
        Compute Integral
      </button>

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
  const status = container.querySelector("#status");

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

  function draw(expr,a,b){

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

    const h = (b-a)/2;

    const x0 = a;
    const x1 = a+h;
    const x2 = b;

    /* SHADED AREA */
    ctx.fillStyle =
      "rgba(59,130,246,0.30)";

    ctx.beginPath();

    ctx.moveTo(
      sx(x0),
      H/2
    );

    for(
      let x=x0;
      x<=x2;
      x+=0.02
    ){

      ctx.lineTo(
        sx(x),
        sy(f(expr,x))
      );
    }

    ctx.lineTo(
      sx(x2),
      H/2
    );

    ctx.closePath();
    ctx.fill();

    /* SUBINTERVAL MARKERS */
    [x0,x1,x2].forEach((x,i)=>{

      ctx.strokeStyle = "#f59e0b";

      ctx.beginPath();

      ctx.moveTo(
        sx(x),
        H/2
      );

      ctx.lineTo(
        sx(x),
        sy(f(expr,x))
      );

      ctx.stroke();

      ctx.fillStyle = "yellow";

      ctx.beginPath();

      ctx.arc(
        sx(x),
        sy(f(expr,x)),
        6,
        0,
        Math.PI*2
      );

      ctx.fill();

      ctx.fillStyle = "white";

      ctx.fillText(
        ["x₀","x₁","x₂"][i],
        sx(x)-10,
        sy(f(expr,x))-12
      );
    });

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
        label:"Simpson Nodes"
      }

    ]);
  }

  container.querySelector("#run").onclick = () => {

    try{

      const expr =
        fnInput.value;

      const a =
        Number(aInput.value);

      const b =
        Number(bInput.value);

      const h =
        (b-a)/2;

      const x0 = a;
      const x1 = a+h;
      const x2 = b;

      const fx0 =
        f(expr,x0);

      const fx1 =
        f(expr,x1);

      const fx2 =
        f(expr,x2);

      const integral =
        (h/3) *
        (
          fx0 +
          4*fx1 +
          fx2
        );

      draw(expr,a,b);

      status.innerHTML = `
        Simpson Formula:

        (h/3)
        [f(x₀)+4f(x₁)+f(x₂)]
      `;

      result.innerHTML = `
        <div>

          h = ${h.toFixed(4)}

          <br><br>

          f(x₀) =
          ${fx0.toFixed(6)}

          <br>

          f(x₁) =
          ${fx1.toFixed(6)}

          <br>

          f(x₂) =
          ${fx2.toFixed(6)}

          <br><br>

          <b>
          Approximate Area =
          ${integral.toFixed(8)}
          </b>

        </div>
      `;

    }
    catch(err){

      result.innerHTML = `
        <span style="color:red;">
          Invalid Function
        </span>
      `;

      console.error(err);
    }
  };
}
