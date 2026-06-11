export const simpson38Lesson = {
  id: "l26",

  title: "Simpson's 3/8 Rule",

  simulation: "simpson38",

  pages: [

    {
      title: "1. Introduction",
      content: `
Simpson's 3/8 Rule is a numerical integration method used to approximate definite integrals.

Like Simpson's 1/3 Rule, it approximates the integrand using polynomial curves.

However, it uses cubic interpolation instead of quadratic interpolation.
`
    },

    {
      title: "2. Motivation",
      content: `
Trapezoidal Rule approximates the curve using straight lines.

Simpson's 1/3 Rule uses quadratic polynomials.

Simpson's 3/8 Rule uses cubic polynomials, often improving accuracy.
`
    },

    {
      title: "3. Integral Form",
      content: `
We wish to evaluate:

∫ f(x) dx

between limits a and b.

The exact integral may be difficult or impossible to compute analytically.
`
    },

    {
      title: "4. Interval Requirement",
      content: `
The number of subintervals must be a multiple of 3.

This is a key requirement for applying Simpson's 3/8 Rule.
`
    },

    {
      title: "5. Step Size",
      content: `
If n subintervals are used:

h = (b-a)/n

where n is divisible by 3.
`
    },

    {
      title: "6. Formula",
      content: `
Integral ≈

(3h/8)

[

f(x₀)

+

3f(x₁)

+

3f(x₂)

+

f(x₃)

]
`
    },

    {
      title: "7. Composite Formula",
      content: `
For many intervals:

weights follow the pattern

1,3,3,2,3,3,2,...

ending with 1.
`
    },

    {
      title: "8. Weight Pattern",
      content: `
Points divisible by 3 receive weight 2.

Other interior points receive weight 3.

Endpoints receive weight 1.
`
    },

    {
      title: "9. Example",
      content: `
Evaluate:

∫₀³ x² dx

using Simpson's 3/8 Rule.

Compute all function values.

Apply weights.

Obtain approximation.
`
    },

    {
      title: "10. Geometric Interpretation",
      content: `
The curve is approximated using cubic segments.

These cubic approximations follow the actual curve more closely than straight-line approximations.
`
    },

    {
      title: "11. Error Formula",
      content: `
Error is proportional to:

h⁴

for sufficiently smooth functions.

Thus accuracy improves rapidly as h decreases.
`
    },

    {
      title: "12. Comparison with Trapezoidal Rule",
      content: `
Trapezoidal Rule:

Linear approximation.

Simpson 3/8:

Cubic approximation.

Simpson 3/8 is generally more accurate.
`
    },

    {
      title: "13. Comparison with Simpson 1/3",
      content: `
Both methods are highly accurate.

Simpson 1/3 is more commonly used.

Simpson 3/8 becomes useful when interval counts fit multiples of 3.
`
    },

    {
      title: "14. Advantages",
      content: `
Advantages:

• High accuracy

• Uses cubic approximation

• Simple implementation

• Widely taught in numerical analysis
`
    },

    {
      title: "15. Limitations",
      content: `
Limitations:

• Requires interval count divisible by 3

• More evaluations than trapezoidal rule

• Still an approximation
`
    },

    {
      title: "16. Applications",
      content: `
Applications include:

• Engineering calculations

• Physics simulations

• Scientific computing

• Numerical modeling
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Evaluate ∫₀³ x² dx.

2. Compare with Simpson 1/3.

3. Investigate effect of interval count.

4. Compare approximation errors.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. Why must n be divisible by 3?

Q2. What polynomial degree is used?

Q3. What is the weight pattern?

Q4. Compare Simpson 1/3 and 3/8.

Q5. State one application.
`
    }

  ]
};
