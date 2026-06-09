export const course = {
  title: "Numerical Methods",

  modules: [

    {
      id: "m1",
      title: "Numbers, Precision & Errors",

      lessons: [
        {
          id: "l1",
          title: "Floating Point Representation",

          pages: [
            {
              title: "1. Intuition",
              content: `
Computers cannot store real numbers with infinite precision.

So they approximate numbers using a finite binary format.
This is why 0.1 + 0.2 is not exactly 0.3 in computers.
              `
            },
            {
              title: "2. Structure",
              content: `
A floating-point number has three parts:

- Sign bit (positive/negative)
- Exponent (scale)
- Mantissa (precision digits)

This is similar to scientific notation in mathematics.
              `
            },
            {
              title: "3. Why It Matters",
              content: `
Because of limited storage, small rounding errors occur.

These errors accumulate in numerical computations and affect results in:
- simulations
- engineering calculations
- scientific modeling
              `
            }
          ]
        },

        {
          id: "l2",
          title: "Types of Errors",

          pages: [
            {
              title: "1. Absolute Error",
              content: `
Absolute Error = |True Value - Approximate Value|

It measures total deviation from actual value.
              `
            },
            {
              title: "2. Relative Error",
              content: `
Relative Error = Absolute Error / True Value

It shows error in proportional form.
              `
            },
            {
              title: "3. Truncation Error",
              content: `
Occurs when infinite processes are cut short.

Example:
Taylor series approximation uses limited terms.
              `
            }
          ]
        }
      ]
    },

    {
      id: "m2",
      title: "Root Finding Methods",

      lessons: [

        {
          id: "l3",
          title: "Bisection Method",

          simulation: "bisection",

          pages: [
            {
              title: "1. Intuition",
              content: `
We want to find x such that f(x)=0.

If f(a) and f(b) have opposite signs,
a root must lie between them.
              `
            },
            {
              title: "2. Method Idea",
              content: `
We repeatedly divide the interval [a, b]
and narrow down the root location.
              `
            },
            {
              title: "3. Algorithm",
              content: `
Step 1: Choose a, b  
Step 2: Compute midpoint c = (a+b)/2  
Step 3: Check sign of f(c)  
Step 4: Replace a or b  
Step 5: Repeat
              `
            }
          ]
        },

        {
          id: "l4",
          title: "Newton-Raphson Method",

          simulation: "newton",

          pages: [
            {
              title: "1. Intuition",
              content: `
Instead of guessing randomly,
we use tangent lines to approach the root.
              `
            },
            {
              title: "2. Geometric Idea",
              content: `
At a point xₙ, we draw tangent to curve f(x).
Where tangent crosses x-axis becomes next estimate.
              `
            },
            {
              title: "3. Derivation",
              content: `
Using Taylor expansion:

f(x) ≈ f(xₙ) + f'(xₙ)(x - xₙ)

Set f(x)=0:

xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)
              `
            },
            {
              title: "4. Algorithm",
              content: `
1. Choose initial guess x₀  
2. Compute f(xₙ), f'(xₙ)  
3. Apply formula  
4. Repeat until convergence
              `
            },
            {
              title: "5. Example",
              content: `
Solve x² - 4 = 0

x₀ = 2.5  
x₁ = 2.05  
x₂ = 2.0006  
Root ≈ 2
              `
            }
          ]
        }
      ]
    },

    {
      id: "m3",
      title: "Interpolation",

      lessons: [
        {
          id: "l5",
          title: "Lagrange Interpolation",

          simulation: "lagrange",

          pages: [
            {
              title: "1. Concept",
              content: `
We construct a polynomial passing through given points.
              `
            },
            {
              title: "2. Idea",
              content: `
Instead of guessing values between points,
we build exact polynomial interpolation.
              `
            },
            {
              title: "3. Use Case",
              content: `
Used in data estimation, curve fitting, and physics modeling.
              `
            }
          ]
        }
      ]
    },

    {
      id: "m4",
      title: "Numerical Integration",

      lessons: [
        {
          id: "l6",
          title: "Trapezoidal Rule",

          simulation: "trapezoid",

          pages: [
            {
              title: "1. Idea",
              content: `
We approximate area under curve using trapezoids.
              `
            },
            {
              title: "2. Formula Logic",
              content: `
Area ≈ sum of trapezoidal slices under curve.
              `
            },
            {
              title: "3. Use",
              content: `
Used when exact integration is not possible.
              `
            }
          ]
        }
      ]
    },

    {
      id: "m5",
      title: "Differential Equations",

      lessons: [
        {
          id: "l7",
          title: "Euler Method",

          simulation: "euler",

          pages: [
            {
              title: "1. Idea",
              content: `
We approximate solutions step-by-step instead of exact solving.
              `
            },
            {
              title: "2. Formula",
              content: `
y(n+1) = y(n) + h * f(x,y)
              `
            },
            {
              title: "3. Application",
              content: `
Used in physics simulations and dynamic systems.
              `
            }
          ]
        }
      ]
    }
  ]
};
