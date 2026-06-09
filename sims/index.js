import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";

/**
 * ===============================
 * SIMULATION REGISTRY (CORE ENGINE)
 * ===============================
 * ONLY THESE KEYS ARE VALID:
 * (must match lesson.simulation exactly)
 */

const Simulations = {

  // ================= ROOT FINDING =================
  "newton-raphson": runNewton,
  "bisection": runBisection,

  // ================= NUMERICAL INTEGRATION =================
  "integration": runIntegration,

  // ================= INTERPOLATION =================
  "lagrange": runLagrange,

  // ================= DIFFERENTIAL EQUATIONS =================
  "differential": runDE
};

/**
 * ===============================
 * SAFE SIMULATION LOADER
 * ===============================
 * This prevents blank screens & crashes
 */

export function loadSimulation(key, container) {

  // normalize key (prevents casing/spacing issues)
  const cleanKey = (key || "").trim().toLowerCase();

  console.log("▶ Loading simulation:", cleanKey);

  const sim = Simulations[cleanKey];

  // ---------------- NOT FOUND ----------------
  if (!sim) {
    container.innerHTML = `
      <div style="
        color:#ff4d4d;
        padding:20px;
        font-family:Arial;
        background:#111827;
        border-radius:10px;
      ">
        <h2>⚠ Simulation Not Found</h2>
        <p><b>Key:</b> ${cleanKey}</p>
        <p>
          This simulation is not registered in the system.
          <br/>Check lesson.simulation value or registry mapping.
        </p>

        <hr style="margin:10px 0; opacity:0.2"/>

        <small style="opacity:0.7">
          Allowed keys: newton-raphson, bisection, integration, lagrange, differential
        </small>
      </div>
    `;
    return;
  }

  // ---------------- EXECUTE SIMULATION ----------------
  try {
    sim(container);
  } catch (err) {
    console.error("Simulation error:", err);

    container.innerHTML = `
      <div style="
        color:red;
        padding:20px;
        font-family:Arial;
      ">
        <h2>Simulation Crashed</h2>
        <pre>${err.message}</pre>
      </div>
    `;
  }
}

/**
 * Export registry (optional use)
 */
export { Simulations };
