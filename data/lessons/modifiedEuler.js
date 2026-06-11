export const modifiedEulerLesson = {
  id: "l25",

  title: "Modified Euler Method",

  simulation: "differential",

  pages: [

    {
      title: "1. Introduction",
      content: `
Modified Euler Method is an improvement over the standard Euler Method.

It uses both the initial slope and a predicted future slope.

This produces significantly better accuracy while remaining simple to implement.
`
    },

    {
      title: "2. Motivation",
      content: `
Euler Method uses only the slope at the beginning of the interval.

If the slope changes rapidly, the approximation may be poor.

Modified Euler attempts to account for slope variation across the interval.
`
    },

    {
      title: "3. Differential Equation",
      content: `
Consider:

dy/dx = f(x,y)

with initial condition:

y(x₀)=y₀

The objective is to estimate future values of y.
`
    },

    {
      title: "4. Predictor Step",
      content: `
First perform a normal Euler step:

y* = yₙ + h f(xₙ,yₙ)

This predicted value estimates the solution at the next point.
`
    },

    {
      title: "5. Corrector Step",
      content: `
Compute the slope at the predicted point.

Average the initial slope and predicted slope.

This produces a corrected solution value.
`
    },

    {
      title: "6. Formula",
      content: `
Predictor:

y* = yₙ + h f(xₙ,yₙ)

Corrector:

yₙ₊₁

=

yₙ

+

(h/2)

[ f(xₙ,yₙ)

+

f(xₙ+h,y*) ]
`
    },

    {
      title: "7. Geometric Interpretation",
      content: `
Euler uses one tangent.

Modified Euler uses the average of two tangents.

This better follows the actual curve.
`
    },

    {
      title: "8. Algorithm",
      content: `
Step 1:
Compute predictor.

Step 2:
Evaluate slope at predictor.

Step 3:
Average slopes.

Step 4:
Compute corrected value.

Repeat.
`
    },

    {
      title: "9. Example",
      content: `
Given:

dy/dx = x+y

y(0)=1

h=0.1

Perform predictor and corrector calculations to estimate y(0.1).
`
    },

    {
      title: "10. Error Analysis",
      content: `
Modified Euler is more accurate than Euler Method.

Local truncation error:

O(h³)

Global error:

O(h²)
`
    },

    {
      title: "11. Relation to RK2",
      content: `
Modified Euler can be viewed as a second-order Runge-Kutta method.

Both achieve second-order accuracy.

They differ mainly in how slopes are selected.
`
    },

    {
      title: "12. Comparison with Euler",
      content: `
Euler:

One slope evaluation.

Modified Euler:

Two slope evaluations.

Accuracy is significantly improved.
`
    },

    {
      title: "13. Comparison with RK4",
      content: `
RK4 uses four slope evaluations.

Modified Euler uses two.

RK4 is more accurate but requires more computation.
`
    },

    {
      title: "14. Advantages",
      content: `
Advantages:

• Better accuracy than Euler

• Simple implementation

• Stable behavior

• Easy understanding
`
    },

    {
      title: "15. Limitations",
      content: `
Limitations:

• Less accurate than RK4

• Error still accumulates

• Small step sizes may be required
`
    },

    {
      title: "16. Applications",
      content: `
Applications include:

• Physics simulations

• Population models

• Engineering systems

• Educational demonstrations
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Apply Modified Euler to dy/dx=x+y.

2. Compare Euler and Modified Euler.

3. Investigate effect of step size.

4. Compare with RK2.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. Why is Modified Euler more accurate?

Q2. What is the predictor step?

Q3. What is the corrector step?

Q4. What is the global error order?

Q5. Compare Modified Euler and RK4.
`
    }

  ]
};
