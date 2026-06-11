export const rungeKutta4Lesson = {
  id: "l17",

  title: "Runge-Kutta 4th Order Method (RK4)",

  simulation: "rk4",

  pages: [

    {
      title: "1. Introduction",
      content: `
Runge-Kutta 4th Order Method, commonly called RK4, is one of the most widely used numerical methods for solving ordinary differential equations.

It provides very high accuracy without requiring higher-order derivatives.

RK4 is often considered the industry standard for many engineering and scientific applications.
`
    },

    {
      title: "2. Why Euler Method is Not Enough",
      content: `
Euler Method uses only the slope at the beginning of an interval.

As step size increases, Euler's error becomes significant.

To improve accuracy we need information from multiple points within the interval.

RK4 achieves this by combining four slope estimates.
`
    },

    {
      title: "3. Basic Idea",
      content: `
Instead of taking one slope estimate, RK4 computes four different slopes.

These slopes are calculated at different locations within the interval.

A weighted average of these slopes produces the next solution value.

This dramatically improves accuracy.
`
    },

    {
      title: "4. Differential Equation Form",
      content: `
Consider:

dy/dx = f(x,y)

with initial condition:

y(x₀)=y₀

RK4 approximates y values at successive points.
`
    },

    {
      title: "5. RK4 Formula",
      content: `
k₁ = f(x,y)

k₂ = f(x+h/2, y+h·k₁/2)

k₃ = f(x+h/2, y+h·k₂/2)

k₄ = f(x+h, y+h·k₃)

Then:

yₙ₊₁ = yₙ + (h/6)(k₁ + 2k₂ + 2k₃ + k₄)
`
    },

    {
      title: "6. Understanding k₁",
      content: `
k₁ is the slope at the beginning of the interval.

It is identical to the slope used in Euler Method.

This provides the first estimate of the solution behavior.
`
    },

    {
      title: "7. Understanding k₂",
      content: `
k₂ estimates the slope halfway through the interval.

It uses information from k₁.

This improves our understanding of how the solution changes.
`
    },

    {
      title: "8. Understanding k₃",
      content: `
k₃ is another midpoint estimate.

It refines the information obtained from k₂.

Together k₂ and k₃ provide strong midpoint correction.
`
    },

    {
      title: "9. Understanding k₄",
      content: `
k₄ estimates the slope at the end of the interval.

It captures information from the far side of the step.

This completes the interval analysis.
`
    },

    {
      title: "10. Weighted Average Concept",
      content: `
RK4 combines all four slopes:

k₁ + 2k₂ + 2k₃ + k₄

The midpoint slopes receive higher weight because they are usually more representative of interval behavior.
`
    },

    {
      title: "11. Worked Example",
      content: `
Given:

dy/dx = x + y

x₀ = 0

y₀ = 1

h = 0.1

Compute k₁, k₂, k₃ and k₄.

Substitute them into the RK4 formula.

The resulting approximation is significantly more accurate than Euler Method.
`
    },

    {
      title: "12. Accuracy",
      content: `
Euler Method:

Error O(h)

RK4:

Error O(h⁴)

This huge improvement explains why RK4 is so popular.
`
    },

    {
      title: "13. Advantages",
      content: `
Advantages:

• Very accurate

• Stable

• Widely used

• Easy to implement

• No higher derivatives required
`
    },

    {
      title: "14. Applications",
      content: `
Applications include:

• Orbital mechanics

• Robotics

• Physics simulations

• Chemical engineering

• Aerospace engineering

• Computational fluid dynamics
`
    },

    {
      title: "15. Comparison with Euler",
      content: `
Euler:

Fast but less accurate.

RK4:

Slightly more computation per step but dramatically higher accuracy.

In practice RK4 is often preferred whenever computational resources permit.
`
    },

    {
      title: "16. Practice Problems",
      content: `
1. Solve dy/dx = x+y using RK4.

2. Solve dy/dx = x²+y.

3. Compare RK4 and Euler solutions.

4. Investigate effect of step size.
`
    },

    {
      title: "17. Quiz",
      content: `
Q1. How many slopes are used in RK4?

Q2. Define k₁.

Q3. Define k₄.

Q4. What is the order of accuracy?

Q5. Why is RK4 more accurate than Euler?
`
    }

  ]
};
