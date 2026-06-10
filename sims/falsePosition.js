export function falsePositionSimulation(container) {

  container.innerHTML = `

    <h2>False Position Method Simulator</h2>

    <p>
      Find the root of:
      <b>f(x) = x³ − x − 2</b>
    </p>

    <label>a:</label>
    <input id="fp-a" type="number" value="1" step="0.1">

    <label>b:</label>
    <input id="fp-b" type="number" value="2" step="0.1">

    <button id="fp-run">
      Run False Position
    </button>

    <div id="fp-output"
         style="
         margin-top:20px;
         white-space:pre-wrap;
         ">
    </div>

  `;

  const runBtn =
    container.querySelector("#fp-run");

  runBtn.onclick = () => {

    let a =
      parseFloat(
        container.querySelector("#fp-a").value
      );

    let b =
      parseFloat(
        container.querySelector("#fp-b").value
      );

    const output =
      container.querySelector("#fp-output");

    function f(x) {
      return x * x * x - x - 2;
    }

    if (f(a) * f(b) >= 0) {

      output.innerHTML =
        "Interval must contain a sign change.";

      return;
    }

    let log = "";

    let c = a;

    for (let i = 1; i <= 15; i++) {

      c =
        (
          a * f(b)
          -
          b * f(a)
        )
        /
        (
          f(b)
          -
          f(a)
        );

      log +=
        `Iteration ${i}\n` +
        `c = ${c.toFixed(8)}\n\n`;

      if (
        Math.abs(f(c))
        < 0.000001
      ) {
        break;
      }

      if (
        f(a) * f(c)
        < 0
      ) {
        b = c;
      } else {
        a = c;
      }
    }

    log +=
      `Estimated Root = ${c.toFixed(8)}`;

    output.textContent = log;
  };
}
