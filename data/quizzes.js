export const quizzes = {

  floatingPoint: [
    {
      question:
        "Why do floating-point numbers introduce numerical errors?",

      options: [
        "Because computers use decimal arithmetic",
        "Because real numbers cannot always be represented exactly in binary",
        "Because CPUs round integers",
        "Because RAM stores numbers as strings"
      ],

      answer: 1
    },

    {
      question:
        "Which floating-point operation is most likely to cause catastrophic cancellation?",

      options: [
        "Multiplication",
        "Division",
        "Addition of similar magnitude opposite-sign values",
        "Exponentiation"
      ],

      answer: 2
    }
  ],

  bisection: [
    {
      question:
        "Which condition guarantees applicability of the Bisection Method?",

      options: [
        "f(a)=0",
        "f(b)=0",
        "f(a)f(b)<0",
        "f(a)f(b)>0"
      ],

      answer: 2
    },

    {
      question:
        "The convergence order of the Bisection Method is:",

      options: [
        "Quadratic",
        "Linear",
        "Cubic",
        "Superlinear"
      ],

      answer: 1
    }
  ],

  newton: [
    {
      question:
        "Newton-Raphson may fail primarily when:",

      options: [
        "Root exists",
        "Derivative is near zero",
        "Function is continuous",
        "Initial guess is exact"
      ],

      answer: 1
    },

    {
      question:
        "The convergence order of Newton-Raphson near the root is:",

      options: [
        "Linear",
        "Quadratic",
        "Cubic",
        "Logarithmic"
      ],

      answer: 1
    }
  ]

};
