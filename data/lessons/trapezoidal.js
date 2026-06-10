export const trapezoidalLesson = {
  id: "l6",
  title: "Trapezoidal Rule",
  simulation: "integration",

  pages: [

    {
      title: "1. Why Numerical Integration Exists",
      content: `
Integration is one of the most important operations in mathematics.

Many engineering and scientific problems require calculating areas under curves.

Unfortunately, not every function can be integrated analytically.

Examples include:

e^(-x²)
experimental datasets
simulation outputs

Numerical integration provides approximate solutions when exact integration is difficult or impossible.

The Trapezoidal Rule is one of the oldest and most widely used techniques.
`
    },

    {
      title: "2. Geometric Idea",
      content: `
Suppose a curve lies above the x-axis.

We wish to compute the area underneath it.

Instead of dealing with a curved boundary directly, we replace small pieces of the curve with straight lines.

The region then becomes a collection of trapezoids.

The total area is approximated by summing the areas of all trapezoids.
`
    },

    {
      title: "3. Area of a Trapezoid",
      content: `
Recall the geometry formula:

Area = (1/2) × (sum of parallel sides) × height

In numerical integration:

Parallel sides correspond to function values.

Height corresponds to interval width.

This simple geometric observation forms the foundation of the Trapezoidal Rule.
`
    },

    {
      title: "4. Derivation of the Formula",
      content: `
Consider interval:

[a,b]

with function values:

f(a)
f(b)

The trapezoidal approximation becomes:

Integral ≈ ((b-a)/2)[f(a)+f(b)]

This is the simplest trapezoidal formula.

It uses only the endpoints.
`
    },

    {
      title: "5. Composite Trapezoidal Rule",
      content: `
Accuracy improves when the interval is divided into many smaller parts.

This produces multiple trapezoids.

The resulting method is called the Composite Trapezoidal Rule.

Instead of one approximation, many local approximations are added together.

This greatly improves precision.
`
    },

    {
      title: "6. Step Size",
      content: `
Step size is denoted by h.

Formula:

h = (b-a)/n

where:

n = number of subintervals

Smaller h generally produces better accuracy because the trapezoids follow the curve more closely.
`
    },

    {
      title: "7. Composite Formula Structure",
      content: `
The composite formula assigns weights:

1 to endpoints

2 to interior points

This weighting pattern naturally appears when adjacent trapezoids share boundaries.

Understanding these weights helps interpret numerical integration tables.
`
    },

    {
      title: "8. Worked Example",
      content: `
Estimate:

Integral of x² from 0 to 2

using n=4.

Step size:

h = 0.5

Evaluate function values:

f(0)
f(0.5)
f(1)
f(1.5)
f(2)

Apply trapezoidal weights.

The result approximates the true area under the parabola.
`
    },

    {
      title: "9. Error Analysis",
      content: `
The Trapezoidal Rule introduces truncation error because curved segments are replaced by straight lines.

Error depends primarily on:

• Step size
• Curvature of the function
• Number of intervals

Reducing step size generally decreases error.
`
    },

    {
      title: "10. Convergence",
      content: `
As the number of intervals increases:

n → ∞

the approximation approaches the exact integral.

This behavior is called convergence.

A convergent method becomes increasingly accurate with refinement.
`
    },

    {
      title: "11. Advantages",
      content: `
Advantages include:

• Easy implementation
• Fast computation
• Works on sampled data
• Suitable for experimental measurements

These properties make it extremely popular in engineering.
`
    },

    {
      title: "12. Limitations",
      content: `
The method approximates curves with straight lines.

For highly curved functions, accuracy may be limited.

More sophisticated methods such as Simpson's Rule often achieve better precision.
`
    },

    {
      title: "13. Real Applications",
      content: `
Applications include:

• Physics simulations
• Engineering design
• Financial modeling
• Signal processing
• Experimental data analysis

Whenever exact integration is unavailable, numerical integration becomes essential.
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Estimate ∫x² dx from 0 to 4.

2. Compute step size for:

a=0
b=10
n=20

3. Explain why increasing n improves accuracy.

4. Compare one trapezoid versus ten trapezoids.
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. Why do we use numerical integration?

Q2. What geometric shape is used in the Trapezoidal Rule?

Q3. Define step size.

Q4. What is convergence?

Q5. What causes truncation error?

Q6. Give two advantages.

Q7. Give one limitation.

Q8. Name three real-world applications.
`
    }

  ]
};
