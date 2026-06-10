export const lagrangeLesson = {
  id: "l5",
  title: "Lagrange Interpolation",

  simulation: "lagrange",

  pages: [
    {
      title: "1. Introduction",
      content: `
Interpolation estimates values between known data points.

Lagrange Interpolation constructs a polynomial that passes exactly through all known points.
`
    },

    {
      title: "2. Core Idea",
      content: `
Given n data points, Lagrange builds basis polynomials.

Each basis polynomial equals 1 at its own point and 0 at all others.

Combining these basis functions creates the final interpolation polynomial.
`
    },

    {
      title: "3. Applications",
      content: `
Applications include:

• Curve fitting
• Computer graphics
• Scientific computing
• Engineering simulations
• Data modelling
`
    }
  ]
};
