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
              title: "1. Deep Concept: Why Floating Point Exists",
              content: `
In real-world computation, numbers are not continuous inside computers.
A computer has finite memory, which means it cannot represent infinite decimal expansions.

This leads to the need for approximation systems called floating point representation.

Floating point numbers allow computers to represent extremely large and extremely small numbers using a structured format.

This system is the backbone of all scientific computing, simulations, and machine learning systems today.
              `
            },
            {
              title: "2. Mathematical Structure and Representation",
              content: `
A floating point number is represented in the form:

Number = Sign × Mantissa × Base^Exponent

This structure is similar to scientific notation in mathematics.

The mantissa stores precision digits while the exponent controls scale.

Because mantissa has limited bits, precision is always finite, which leads to small rounding errors even in simple arithmetic operations.
              `
            },
            {
              title: "3. Real-world Implications and Limitations",
              content: `
Floating point errors accumulate over repeated computations.

In simulations such as physics engines, weather models, or engineering systems,
these small errors can grow significantly over time.

This is why numerical stability is a critical topic in computational mathematics.

Even modern systems like GPUs and AI models must account for floating point precision limitations.
              `
            }
          ]
        },

        {
          id: "l2",
          title: "Types of Numerical Errors",

          pages: [
            {
              title: "1. Understanding Error in Computation",
              content: `
In numerical computation, error refers to the difference between true value and computed value.

Since most real-world problems cannot be solved exactly, approximation is always involved.

Therefore, understanding error behavior is essential in numerical methods.
              `
            },
            {
              title: "2. Types of Errors in Detail",
              content: `
There are three major types of errors:

1. Absolute Error → magnitude of deviation
2. Relative Error → proportional deviation
3. Truncation Error → loss due to approximation of infinite processes

Each error type plays a different role in numerical accuracy analysis.
              `
            },
            {
              title: "3. Error Propagation and Stability",
              content: `
Errors do not remain isolated.

In iterative computations, errors propagate and sometimes amplify.

This is why stable algorithms are preferred in scientific computing.

Numerical stability determines whether a method produces reliable results under small perturbations.
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
              title: "1. Core Idea and Intuition",
              content: `
The Bisection Method is based on one fundamental principle:

If a continuous function changes sign between two points, then a root exists between them.

This is known as the Intermediate Value Theorem.

The method repeatedly narrows the interval until the root is approximated.
              `
            },
            {
              title: "2. Mathematical Logic Behind the Method",
              content: `
We start with an interval [a, b] such that f(a) and f(b) have opposite signs.

We compute midpoint c = (a + b)/2.

Then evaluate f(c):

- If f(a)*f(c) < 0 → root lies in [a, c]
- Else → root lies in [c, b]

This ensures guaranteed convergence.
              `
            },
            {
              title: "3. Algorithm and Convergence Behavior",
              content: `
Step 1: Choose interval [a, b]
Step 2: Compute midpoint c
Step 3: Evaluate function sign
Step 4: Reduce interval
Step 5: Repeat

Each iteration halves the error interval,
making it a very stable but slower convergence method.
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
              title: "1. Concept and Geometric Insight",
              content: `
Newton-Raphson method is based on tangent line approximation.

Instead of searching blindly for roots,
we use local linear approximation of the function.

The tangent line at a point gives a better estimate of the root.
              `
            },
            {
              title: "2. Mathematical Derivation from Taylor Series",
              content: `
Using Taylor expansion:

f(x) ≈ f(xn) + f'(xn)(x - xn)

Setting f(x) = 0 gives:

xn+1 = xn - f(xn)/f'(xn)

This is one of the most powerful iterative formulas in numerical analysis.
              `
            },
            {
              title: "3. Algorithm and Convergence Properties",
              content: `
Step 1: Choose initial guess x0
Step 2: Compute f(xn) and f'(xn)
Step 3: Update xn+1
Step 4: Repeat until convergence

This method converges very fast when the initial guess is close to the root,
but may fail if derivative is zero or guess is poor.
              `
            }
          ]
        }
      ]
    },

    {
      id: "m3",
      title: "Interpolation Methods",

      lessons: [

        {
          id: "l5",
          title: "Lagrange Interpolation",

          simulation: "lagrange",

          pages: [
            {
              title: "1. Concept of Curve Reconstruction",
              content: `
Interpolation is the process of constructing a function
that passes through a given set of data points.

Lagrange interpolation builds a polynomial that exactly fits all points.
              `
            },
            {
              title: "2. Mathematical Construction",
              content: `
The Lagrange polynomial is constructed using basis functions:

Each basis polynomial is zero at all points except one.

This ensures exact fitting of all given points.
              `
            },
            {
              title: "3. Applications and Limitations",
              content: `
Used in data science, physics modeling, and numerical prediction.

However, higher degree polynomials can oscillate,
making it unstable for large datasets.
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
              title: "1. Idea of Numerical Integration",
              content: `
When exact integration is impossible,
we approximate area under curve using geometric shapes.

Trapezoidal rule uses trapezoids to estimate area.
              `
            },
            {
              title: "2. Mathematical Formulation",
              content: `
The area is divided into multiple trapezoids.

Each segment contributes partial area based on function values.

This improves accuracy compared to simple rectangle methods.
              `
            },
            {
              title: "3. Accuracy and Applications",
              content: `
Accuracy depends on number of segments.

Used in physics, engineering, and statistical modeling
where analytical integration is not possible.
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
              title: "1. Concept of Differential Approximation",
              content: `
Differential equations describe systems that change continuously.

Euler method approximates solutions step-by-step using small increments.
              `
            },
            {
              title: "2. Mathematical Basis",
              content: `
Using slope approximation:

y(n+1) = y(n) + h * f(xn, yn)

This transforms continuous problems into discrete steps.
              `
            },
            {
              title: "3. Stability and Limitations",
              content: `
Euler method is simple but not very accurate for large step sizes.

More advanced methods like Runge-Kutta improve accuracy significantly.
              `
            }
          ]
        }
      ]
    }
  ]
};
