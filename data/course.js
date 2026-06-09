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
              title: "Concept",
              content: "Floating point numbers represent real numbers using sign, exponent and mantissa."
            },
            {
              title: "Why needed",
              content: "Computers cannot store infinite real numbers, so approximation is required."
            },
            {
              title: "Error introduction",
              content: "This leads to rounding and truncation errors in computation."
            }
          ]
        },

        {
          id: "l2",
          title: "Types of Errors",
          pages: [
            {
              title: "Absolute Error",
              content: "Absolute error = |true value - approximate value|"
            },
            {
              title: "Relative Error",
              content: "Relative error = absolute error / true value"
            },
            {
              title: "Truncation Error",
              content: "Error due to cutting off infinite processes."
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
              title: "Idea",
              content: "Repeatedly divide interval to find root."
            },
            {
              title: "Algorithm",
              content: "Choose a,b such that f(a)*f(b)<0"
            }
          ]
        },

        {
          id: "l4",
          title: "Newton-Raphson Method",
          simulation: "newton",
          pages: [
            {
              title: "Formula",
              content: "x_{n+1} = x_n - f(x)/f'(x)"
            },
            {
              title: "Concept",
              content: "Uses tangent line to approximate root."
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
              title: "Concept",
              content: "Construct polynomial passing through given points."
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
              title: "Formula",
              content: "Area approximated using trapezoids."
            }
          ]
        },

        {
          id: "l7",
          title: "Simpson’s Rule",
          simulation: "simpson",
          pages: [
            {
              title: "Concept",
              content: "Uses parabolic approximation for better accuracy."
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
          id: "l8",
          title: "Euler Method",
          simulation: "euler",
          pages: [
            {
              title: "Concept",
              content: "Stepwise approximation of ODE solution."
            }
          ]
        },

        {
          id: "l9",
          title: "Runge-Kutta Method",
          simulation: "rk",
          pages: [
            {
              title: "Concept",
              content: "Improved accuracy using weighted slopes."
            }
          ]
        }
      ]
    }
  ]
};
