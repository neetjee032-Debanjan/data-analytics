import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";

/**
 * =========================
 * SIMULATION REGISTRY CORE
 * =========================
 * All lesson.simulation keys must match EXACTLY here
 */

const Simulations = {

  // Root Finding
  "newton-raphson": runNewton,
  "bisection": runBisection,

  // Numerical Integration
  "integration": runIntegration,

  // Interpolation
  "lagrange": runLagrange,

  // Differential Equations
  "differential": runDE
};

/**
 * =========================
 * SAFE SIMULATION LOADER
 * =========================
 * Prevents crashes and blank screens
 */

export function loadSimulation(key, container) {

  const cleanKey = (key || "").trim().toLowerCase();

  console.log("Loading simulation:", cleanKey);

  const sim = Simulations[cleanKey];

  if (!sim) {
    container.innerHTML = `
      <div style="color:#ff4d4d;padding:20px;font-family:Arial;background:#111827;border-radius:10px;">
        <h2>Simulation Not Found</h2>
        <p><b>Key:</b> ${cleanKey}</p>
        <p>Check if this key exists in sims/index.js and matches lesson.simulation exactly.</p>
        <hr style="opacity:0.2"/>
        <small>
          Valid keys: newton-raphson, bisection, integration, lagrange, differential
        </small>
      </div>
    `;
    return;
  }

  try {
    sim(container);
  } catch (err) {
    console.error(err);

    container.innerHTML = `
      <div style="color:red;padding:20px;font-family:Arial;">
        <h2>Simulation Crashed</h2>
        <pre>${err.message}</pre>
      </div>
    `;
  }
}

/**
 * Export registry (optional debug use)
 */
export { Simulations };
