import { runNewton } from "./newton-raphson.js";

export const Simulations = {

  "newton": runNewton,
  "newton-raphson": runNewton,
  "newtonraphson": runNewton,

  // SAFE PLACEHOLDERS (NO CRASH IF NOT IMPLEMENTED YET)
  "bisection": (c) => renderMissing(c, "Bisection Method"),
  "false-position": (c) => renderMissing(c, "False Position Method"),
  "falseposition": (c) => renderMissing(c, "False Position Method"),
  "regula-falsi": (c) => renderMissing(c, "Regula Falsi Method"),

  "fixed-point": (c) => renderMissing(c, "Fixed Point Iteration"),
  "fixedpoint": (c) => renderMissing(c, "Fixed Point Iteration"),

  "secant": (c) => renderMissing(c, "Secant Method"),
};

function renderMissing(container, name) {
  container.innerHTML = `
    <div style="
      padding:20px;
      color:#ff4d4d;
      font-family:Arial;
      background:#111827;
      border-radius:10px;
    ">
      <h2>${name}</h2>
      <p><b>Simulation not implemented yet.</b></p>
      <p style="opacity:0.8">
        This method will be added in next upgrade phase.
      </p>
    </div>
  `;
}
