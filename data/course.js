import { floatingPointLesson } from "./lessons/floatingPoint.js";
import { numericalErrorsLesson } from "./lessons/numericalErrors.js";
import { bisectionLesson } from "./lessons/bisection.js";
import { newtonLesson } from "./lessons/newton.js";
import { lagrangeLesson } from "./lessons/lagrange.js";
import { trapezoidalLesson } from "./lessons/trapezoidal.js";
import { eulerLesson } from "./lessons/euler.js";

export const course = {
  title: "Numerical Methods",

  modules: [

    {
      id: "m1",
      title: "Numbers, Precision & Errors",

      lessons: [
        floatingPointLesson,
        numericalErrorsLesson
      ]
    },

    {
      id: "m2",
      title: "Root Finding Methods",

      lessons: [
        bisectionLesson,
        newtonLesson
      ]
    },

    {
      id: "m3",
      title: "Interpolation",

      lessons: [
        lagrangeLesson
      ]
    },

    {
      id: "m4",
      title: "Numerical Integration",

      lessons: [
        trapezoidalLesson
      ]
    },

    {
      id: "m5",
      title: "Differential Equations",

      lessons: [
        eulerLesson
      ]
    }

  ]
};
