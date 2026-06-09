import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";

export const Simulations = {
  "newton": runNewton,
  "newton-raphson": runNewton,
  "newtonraphson": runNewton,

  "bisection": runBisection,
};
