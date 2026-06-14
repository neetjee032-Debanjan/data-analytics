export function runFourierSeries(container) {

  container.innerHTML = `

    <div class="card">

      <h2>Fourier Series Visualizer</h2>

      <p>
        Observe how harmonics reconstruct a square wave.
      </p>

      <div
        style="
          margin-top:15px;
          margin-bottom:15px;
        "
      >

        <label>
          Number of Harmonics:
        </label>

        <input
          id="harmonics"
          type="range"
          min="1"
          max="50"
          value="1"
        >

        <span id="harmonicValue">
          1
        </span>

      </div>

      <canvas
        id="fourierCanvas"
        width="900"
        height="450"
        style="
          width:100%;
          max-width:900px;
          background:#0f172a;
          border-radius:12px;
        "
      ></canvas>

      <div
        id="fourierInfo"
        style="
          margin-top:15px;
          font-size:18px;
        "
      ></div>

    </div>

  `;

  const canvas =
    document.getElementById(
      "fourierCanvas"
    );

  const ctx =
    canvas.getContext("2d");

  const slider =
    document.getElementById(
      "harmonics"
    );

  const value =
    document.getElementById(
      "harmonicValue"
    );

  function draw(n){

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.strokeStyle =
      "#334155";

    for(let x=0;x<900;x+=50){

      ctx.beginPath();

      ctx.moveTo(x,0);

      ctx.lineTo(x,450);

      ctx.stroke();
    }

    for(let y=0;y<450;y+=50){

      ctx.beginPath();

      ctx.moveTo(0,y);

      ctx.lineTo(900,y);

      ctx.stroke();
    }

    ctx.strokeStyle =
      "#38bdf8";

    ctx.lineWidth = 3;

    ctx.beginPath();

    for(let px=0; px<900; px++){

      const x =
        (px-450)/90;

      let y = 0;

      for(let k=1;k<=n;k++){

        const odd =
          2*k-1;

        y +=

          (4/Math.PI)
          *
          (
            Math.sin(
              odd*x
            )
            /
            odd
          );
      }

      const py =
        225
        -
        y*120;

      if(px===0){

        ctx.moveTo(px,py);

      } else {

        ctx.lineTo(px,py);
      }
    }

    ctx.stroke();

    document
      .getElementById(
        "fourierInfo"
      )
      .innerHTML = `

        <strong>
          Harmonics:
        </strong>

        ${n}

        <br><br>

        Increasing harmonics
        improves approximation
        to an ideal square wave.

      `;
  }

  slider.addEventListener(
    "input",
    () => {

      value.innerText =
        slider.value;

      draw(
        Number(
          slider.value
        )
      );
    }
  );

  draw(1);
}
