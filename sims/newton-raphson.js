export function runNewton(container) {
  container.innerHTML = `
    <h3>Newton-Raphson Simulator</h3>

    <input id="x0" placeholder="Initial guess (x0)" />
    <button id="run">Run</button>

    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {
    let x = parseFloat(document.getElementById("x0").value);

    const data = [];

    function f(x) {
      return x*x - 4; // example function
    }

    function df(x) {
      return 2*x;
    }

    for (let i = 0; i < 10; i++) {
      x = x - f(x)/df(x);
      data.push(x);
    }

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: data.map((_, i) => i),
        datasets: [{
          label: "Convergence",
          data: data
        }]
      }
    });
  };
}
