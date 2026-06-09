import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";

/**
 * CENTRAL SIMULATION REGISTRY
 * This is the ONLY place where simulations are mapped.
 * If a simulation is not listed here → it will NOT run.
 */

export const Simulations = {

  // ======================
  // ROOT FINDING METHODS
  // ======================
  "newton-raphson": runNewton,
  newton: runNewton,

  bisection: runBisection,

  // ======================
  // NUMERICAL INTEGRATION
  // ======================
  integration: runIntegration,
  "numerical-integration": runIntegration,

  // ======================
  // INTERPOLATION
  // ======================
  lagrange: runLagrange,
  "lagrange-interpolation": runLagrange,

  // ======================
  // DIFFERENTIAL EQUATIONS
  // ======================
  differential: runDE,
  "differential-equations": runDE
};

/**
 * SAFE LOADER
 * Prevents blank screen crashes if key is missing
 */
export function loadSimulation(key, container) {

  try {

    const sim = Simulations[key];

    if (!sim) {
      container.innerHTML = `
        <div style="color:white;padding:20px;font-family:Arial;">
          <h2>⚠ Simulation not found</h2>
          <p>Key: <b>${key}</b></p>
          <p>Check simulation registry mapping in sims/index.js</p>
        </div>
      `;
      return;
    }

    sim(container);

  } catch (err) {
    console.error(err);

    container.innerHTML = `
      <div style="color:red;padding:20px;">
        <h2>Simulation crashed</h2>
        <pre>${err.message}</pre>
      </div>
    `;
  }
}
