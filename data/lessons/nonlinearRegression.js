export const nonlinearRegressionLesson = {
  id: "l42",

  title: "Nonlinear Regression",

  pages: [

    {
      title: "1. Introduction",
      content: `
Many real-world relationships are not linear.

Examples:

• Population growth
• Radioactive decay
• Chemical reaction rates
• Epidemic spread
• Investment growth

A straight line cannot accurately model these systems.

Nonlinear Regression is used when the relationship between variables follows a nonlinear mathematical function.
`
    },

    {
      title: "2. What Makes a Model Nonlinear?",
      content: `
A regression model is nonlinear if one or more parameters appear nonlinearly.

Examples:

y = ae^(bx)

y = ax² + bx + c

y = a ln(x)

y = a/(b+x)

These models produce curves rather than straight lines.
`
    },

    {
      title: "3. Common Nonlinear Models",
      content: `
Frequently used nonlinear models include:

Exponential:

y = ae^(bx)

Logarithmic:

y = a + b ln(x)

Power Model:

y = axᵇ

Reciprocal Model:

y = a + b/x

Each model is suited to specific physical phenomena.
`
    },

    {
      title: "4. Exponential Growth",
      content: `
Exponential growth occurs when the rate of increase is proportional to the current value.

Model:

y = ae^(bx)

Examples:

• Population growth
• Compound interest
• Bacterial reproduction

The curve becomes increasingly steep over time.
`
    },

    {
      title: "5. Exponential Decay",
      content: `
Exponential decay occurs when a quantity decreases proportionally to its current value.

Model:

y = ae^(-bx)

Examples:

• Radioactive decay
• Capacitor discharge
• Drug elimination

The curve approaches zero but never reaches it.
`
    },

    {
      title: "6. Logarithmic Models",
      content: `
Logarithmic growth is rapid initially and then slows.

Model:

y = a + b ln(x)

Examples:

• Learning curves
• Diminishing returns
• Human perception scales

The rate of growth decreases with time.
`
    },

    {
      title: "7. Power Law Models",
      content: `
Power relationships are represented by:

y = axᵇ

Examples:

• Biological scaling laws
• Fluid dynamics
• Fractal systems

The exponent b determines the shape of the curve.
`
    },

    {
      title: "8. Parameter Estimation",
      content: `
Unlike linear regression, nonlinear regression often requires iterative numerical methods.

Common techniques:

• Gradient Descent
• Gauss-Newton Method
• Levenberg-Marquardt Algorithm

These methods repeatedly adjust parameters until the error becomes minimal.
`
    },

    {
      title: "9. Advantages and Limitations",
      content: `
Advantages:

• Captures complex relationships
• More realistic models

Limitations:

• Computationally intensive
• Sensitive to initial guesses
• Multiple local minima may exist

Careful analysis is required.
`
    },

    {
      title: "10. Summary",
      content: `
Nonlinear Regression models relationships that cannot be represented by a straight line.

Important models:

• Exponential
• Logarithmic
• Power Law
• Reciprocal

These models are widely used throughout science, engineering, economics, and machine learning.
`
    }

  ]
};
