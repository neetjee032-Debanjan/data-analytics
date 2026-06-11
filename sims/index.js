import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";

import { runFalsePosition } from "./falsePosition.js";
import { runSecant } from "./secant.js";
import { runSimpson13 } from "./simpson13.js";
import { runFixedPoint } from "./fixedPoint.js";

export const Simulations = {

  /* =========================
     ROOT FINDING METHODS
  ========================= */

  "newton": runNewton,
  "newton-raphson": runNewton,

  "bisection": runBisection,

  "falseposition": runFalsePosition,
  "false-position": runFalsePosition,
  "regulafalsi": runFalsePosition,

  "secant": runSecant,

  "fixedpoint": runFixedPoint,
  "fixed-point": runFixedPoint,
  "fixed_point": runFixedPoint,

  /* =========================
     INTERPOLATION
  ========================= */

  "lagrange": runLagrange,

  /* =========================
     NUMERICAL INTEGRATION
  ========================= */

  "integration": runIntegration,
  "trapezoid": runIntegration,

  "simpson13": runSimpson13,
  "simpson-1-3": runSimpson13,
  "simpson": runSimpson13,

  /* =========================
     DIFFERENTIAL EQUATIONS
  ========================= */

  "differential": runDE,
  "euler": runDE

};
