export const rungeKutta2Lesson = {
  id: "l24",

  title: "Runge-Kutta 2nd Order Method (RK2)",

  simulation: "differential",

  pages: [

    {
      title: "1. Introduction",
      content: `
Runge-Kutta 2nd Order Method (RK2) is an improved numerical method for solving ordinary differential equations.

It provides better accuracy than Euler's Method while remaining computationally simple.

RK2 is often called the Improved Euler Method.
`
    },

    {
      title: "2. Motivation",
      content: `
Euler Method uses only the slope at the beginning of the interval.

This can produce significant error.

RK2 uses information from two slopes, giving a more accurate estimate.
`
    },

    {
      title: "3. Differential Equation Form",
      content: `
Consider:

dy/dx = f(x,y)

with initial condition:

y(x₀)=y₀

The goal is to estimate y at future points.
`
    },

    {
      title: "4. Euler Review",
      content: `
Euler Method:

y(n+1)=y(n)+h f(x(n),y(n))

Only one slope evaluation is used.
`
    },

    {
      title: "5. RK2 Idea",
      content: `
RK2 computes two slopes:

k₁

and

k₂

The average behavior is then used to update the solution.
`
    },

    {
      title: "6. First Slope",
      content: `
Compute:

k₁ = f(xₙ,yₙ)

This is the same slope used by Euler Method.
`
    },

    {
      title: "7. Second Slope",
      content: `
Estimate the slope at the midpoint:

k₂ = f(xₙ+h/2, yₙ+h·k₁/2)

This captures future behavior of the solution.
`
    },

    {
      title: "8. RK2 Formula",
      content: `
Update equation:

y(n+1)

=

y(n)

+

h·k₂

The midpoint slope drives the solution forward.
`
    },

    {
      title: "9. Algorithm",
      content: `
Step 1:
Compute k₁

Step 2:
Compute k₂

Step 3:
Update y

Step 4:
Advance x

Repeat
`
    },

    {
      title: "10. Example",
      content: `
Given:

dy/dx = x+y

y(0)=1

h=0.1

Compute k₁ and k₂.

Use RK2 formula to estimate y(0.1).
`
    },

    {
      title: "11. Error Behavior",
      content: `
RK2 is more accurate than Euler.

Local truncation error:

O(h³)

Global error:

O(h²)
`
    },

    {
      title: "12. Comparison with Euler",
      content: `
Euler:

One slope evaluation.

RK2:

Two slope evaluations.

RK2 is usually significantly more accurate.
`
    },

    {
      title: "13. Comparison with RK4",
      content: `
RK4 uses four slope evaluations.

RK2 uses only two.

RK4 is more accurate, but RK2 is computationally cheaper.
`
    },

    {
      title: "14. Advantages",
      content: `
Advantages:

• Better accuracy than Euler

• Simple implementation

• Stable for many problems

• Efficient computation
`
    },

    {
      title: "15. Limitations",
      content: `
Limitations:

• Less accurate than RK4

• Small step sizes may still be required

• Error accumulates over long intervals
`
    },

    {
      title: "16. Applications",
      content: `
Applications include:

• Physics simulations

• Population growth

• Chemical reactions

• Engineering systems
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Solve dy/dx=x+y.

2. Compare RK2 and Euler.

3. Investigate effect of step size.

4. Compare RK2 and RK4.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. What is RK2?

Q2. Why is it more accurate than Euler?

Q3. What are k₁ and k₂?

Q4. What is the global error order?

Q5. Compare RK2 and RK4.
`
    }

  ]
};
