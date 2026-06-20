export function binaryConverterSim(container) {

  container.innerHTML = `

    <div class="card">

      <h2>
        Binary Number Converter
      </h2>

      <p>
        Convert decimal numbers into binary
        and observe the division-by-2 process.
      </p>

      <input
        id="decimalInput"
        type="number"
        placeholder="Enter Decimal Number"
        style="
          width:100%;
          padding:12px;
          margin-top:15px;
          border-radius:10px;
          border:none;
        "
      >

      <button
        id="convertBtn"
        style="
          margin-top:15px;
        "
      >
        Convert
      </button>

      <div
        id="result"
        style="
          margin-top:25px;
        "
      >
      </div>

    </div>

  `;

  const btn =
    container.querySelector(
      "#convertBtn"
    );

  btn.addEventListener(
    "click",
    () => {

      const n =
        parseInt(
          container.querySelector(
            "#decimalInput"
          ).value
        );

      if (isNaN(n)) return;

      let num = n;

      let steps = [];

      if (num === 0) {

        container.querySelector(
          "#result"
        ).innerHTML = `
          <h3>Binary = 0</h3>
        `;

        return;
      }

      while (num > 0) {

        const quotient =
          Math.floor(num / 2);

        const remainder =
          num % 2;

        steps.push(
          `${num} ÷ 2 = ${quotient}
           remainder ${remainder}`
        );

        num = quotient;
      }

      container.querySelector(
        "#result"
      ).innerHTML = `

        <h3>
          Binary =
          ${n.toString(2)}
        </h3>

        <h4>
          Conversion Steps
        </h4>

        <pre
          style="
            white-space:pre-wrap;
            line-height:1.7;
          "
        >
${steps.join("\n")}
        </pre>

      `;
    }
  );
}
