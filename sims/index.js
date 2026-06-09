import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";

/**
 * =========================
 * SINGLE SIMULATION ENGINE
 * =========================
 */

const Simulations = {
  "newton-raphson": runNewton,
  "bisection": runBisection,
  "integration": runIntegration,
  "lagrange": runLagrange,
  "differential": runDE
};

/**
 * MAIN ENTRY FUNCTION
 * (THIS IS THE ONLY THING lesson.js SHOULD CALL)
 */

export function loadSimulation(key, container) {

  const cleanKey = (key || "").trim().toLowerCase();

  console.log("SIM LOAD →", cleanKey);

  const sim = Simulations[cleanKey];

  if (!sim) {
    container.innerHTML = `
      <div style="color:#ff4d4d;padding:20px;font-family:Arial;">
        <h2>Simulation Not Found</h2>
        <p>Key: ${cleanKey}</p>
        <p>Check lesson.simulation value</p>
      </div>
    `;
    return;
  }

  try {
    sim(container);
  } catch (e) {
    console.error(e);

    container.innerHTML = `
      <div style="color:red;padding:20px;">
        <h2>Simulation Crashed</h2>
        <pre>${e.message}</pre>
      </div>
    `;
  }
}
