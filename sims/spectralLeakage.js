export function runSpectralLeakage(container) {

  container.innerHTML = `

    <div class="card">

      <h2>Spectral Leakage & Window Functions Lab</h2>

      <p>
        Observe how different window functions reduce spectral leakage.
      </p>

      <div
        style="
          display:flex;
          gap:15px;
          flex-wrap:wrap;
          margin-top:15px;
        "
      >

        <select id="windowType">

          <option value="rect">
            Rectangular Window
          </option>

          <option value="hamming">
            Hamming Window
          </option>

          <option value="hann">
            Hann Window
          </option>

          <option value="blackman">
            Blackman Window
          </option>

        </select>

      </div>

      <canvas
        id="leakageCanvas"
        width="900"
        height="450"
        style="
          width:100%;
          max-width:900px;
          background:#0f172a;
          border-radius:12px;
          margin-top:20px;
        "
      ></canvas>

      <div
        id="windowInfo"
        style="
          margin-top:20px;
          font-size:18px;
        "
      ></div>

    </div>

  `;

  const canvas =
    document.getElementById(
      "leakageCanvas"
    );

  const ctx =
    canvas.getContext("2d");

  const selector =
    document.getElementById(
      "windowType"
    );

  function draw(windowType){

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

    let sideLobe;

    let color;

    let description;

    switch(windowType){

      case "rect":

        sideLobe = 120;

        color = "#ef4444";

        description =
          "Rectangular window produces significant spectral leakage.";

      break;

      case "hamming":

        sideLobe = 70;

        color = "#f59e0b";

        description =
          "Hamming window reduces leakage considerably.";

      break;

      case "hann":

        sideLobe = 55;

        color = "#22c55e";

        description =
          "Hann window provides smoother transitions.";

      break;

      case "blackman":

        sideLobe = 30;

        color = "#38bdf8";

        description =
          "Blackman window offers excellent leakage suppression.";

      break;
    }

    ctx.fillStyle = color;

    ctx.fillRect(
      420,
      100,
      40,
      250
    );

    for(let i=1;i<=6;i++){

      const h =
        sideLobe /
        (i*0.7);

      ctx.fillRect(
        420-(i*60),
        350-h,
        20,
        h
      );

      ctx.fillRect(
        460+(i*60),
        350-h,
        20,
        h
      );
    }

    document
      .getElementById(
        "windowInfo"
      )
      .innerHTML = `

        <strong>
          Selected Window:
        </strong>

        ${selector.options[
          selector.selectedIndex
        ].text}

        <br><br>

        ${description}

      `;
  }

  selector.addEventListener(
    "change",
    () => {

      draw(
        selector.value
      );
    }
  );

  draw("rect");
}
