import { runNewton } from "./newton-raphson.js";

/* Future-ready imports (safe even if file exists later) */
import { runBisection } from "./bisection.js";
import { runFalsePosition } from "./false-position.js";
import { runFixedPoint } from "./fixed-point.js";
import { runSecant } from "./secant.js";

/**
 * CENTRAL SIM REGISTRY (THIS IS THE HEART OF YOUR SYSTEM)
 */
export const Simulations = {

  // Newton family
  "newton": runNewton,
  "newton-raphson": runNewton,
  "newtonraphson": runNewton,

  // Root finding methods
  "bisection": runBisection,
  "false-position": runFalsePosition,
  "falseposition": runFalsePosition,
  "regula-falsi": runFalsePosition,

  "fixed-point": runFixedPoint,
  "fixedpoint": runFixedPoint,

  "secant": runSecant,

};
