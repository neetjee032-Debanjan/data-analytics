export function runEuler(container) {

  container.innerHTML = `
    <h3>Euler Method (ODE Visualizer)</h3>

    <p>dy/dx = y, y(0)=1</p>

    <button id="run">Simulate</button>

    <div id="steps"></div>
    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {

    let y = 1;
    let h = 0.2;

    const values = [];
    const steps = document.getElementById("steps");

    steps.innerHTML = "";

    for (let i = 0; i < 15; i++) {

      let dy = y;
      let next = y + h * dy;

      steps.innerHTML += `
        <div>Step ${i+1}: y=${y.toFixed(3)} → ${next.toFixed(3)}</div>
      `;

      values.push(y);
      y = next;
    }

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: values.map((_, i) => i),
        datasets: [{
          label: "ODE Growth",
          data: values,
          borderColor: "#06b6d4"
        }]
      }
    });
  };
}
