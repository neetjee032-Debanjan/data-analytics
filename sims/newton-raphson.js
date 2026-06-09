export function runNewton(container) {

  container.innerHTML = `
    <h3>Newton-Raphson Simulation</h3>

    <input id="x0" placeholder="Initial guess" />
    <button id="run">Run</button>

    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {

    let x = parseFloat(document.getElementById("x0").value);

    function f(x) {
      return x*x - 4;
    }

    function df(x) {
      return 2*x;
    }

    const values = [];

    for (let i = 0; i < 10; i++) {
      x = x - f(x)/df(x);
      values.push(x);
    }

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: values.map((_, i) => i),
        datasets: [{
          label: "Convergence",
          data: values
        }]
      }
    });
  };
}
