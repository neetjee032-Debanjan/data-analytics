export function runAliasing(container) {

  container.innerHTML = `

    <div class="card">

      <h2>Sampling & Aliasing Lab</h2>

      <p>
        Observe how insufficient sampling
        creates aliasing.
      </p>

      <div
        style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
          margin-top:20px;
        "
      >

        <div>

          <label>
            Signal Frequency (Hz)
          </label>

          <input
            id="signalFreq"
            type="range"
            min="1"
            max="40"
            value="15"
          >

          <div id="signalFreqVal">
            15 Hz
          </div>

        </div>

        <div>

          <label>
            Sampling Rate (Hz)
          </label>

          <input
            id="sampleRate"
            type="range"
            min="2"
            max="80"
            value="40"
          >

          <div id="sampleRateVal">
            40 Hz
          </div>

        </div>

      </div>

      <canvas
        id="aliasCanvas"
        width="900"
        height="450"
        style="
          width:100%;
          max-width:900px;
          margin-top:20px;
          background:#0f172a;
          border-radius:12px;
        "
      ></canvas>

      <div
        id="aliasInfo"
        style="
          margin-top:20px;
          font-size:18px;
        "
      ></div>

    </div>

  `;

  const canvas =
    document.getElementById(
      "aliasCanvas"
    );

  const ctx =
    canvas.getContext("2d");

  const signalFreq =
    document.getElementById(
      "signalFreq"
    );

  const sampleRate =
    document.getElementById(
      "sampleRate"
    );

  function draw() {

    const f =
      Number(signalFreq.value);

    const fs =
      Number(sampleRate.value);

    document.getElementById(
      "signalFreqVal"
    ).innerText =
      `${f} Hz`;

    document.getElementById(
      "sampleRateVal"
    ).innerText =
      `${fs} Hz`;

    ctx.clearRect(
      0,
      0,
      900,
      450
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

    for(let px=0;px<900;px++){

      const t =
        px/900;

      const y =
        Math.sin(
          2*Math.PI*f*t
        );

      const py =
        225-y*120;

      if(px===0){

        ctx.moveTo(px,py);

      } else {

        ctx.lineTo(px,py);
      }
    }

    ctx.stroke();

    ctx.fillStyle =
      "#f43f5e";

    const samples =
      Math.floor(fs);

    for(let n=0;n<=samples;n++){

      const t =
        n/samples;

      const y =
        Math.sin(
          2*Math.PI*f*t
        );

      const x =
        t*900;

      const py =
        225-y*120;

      ctx.beginPath();

      ctx.arc(
        x,
        py,
        5,
        0,
        Math.PI*2
      );

      ctx.fill();
    }

    let message;

    if(fs >= 2*f){

      message =
      "Nyquist condition satisfied. No aliasing expected.";

    } else {

      message =
      "Aliasing occurring. Sampling rate is too low.";
    }

    document
      .getElementById(
        "aliasInfo"
      )
      .innerHTML = `

        <strong>
          Nyquist Rate:
        </strong>

        ${2*f} Hz

        <br><br>

        ${message}

      `;
  }

  signalFreq.addEventListener(
    "input",
    draw
  );

  sampleRate.addEventListener(
    "input",
    draw
  );

  draw();
}
