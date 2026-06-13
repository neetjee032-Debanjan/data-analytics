export const quizzes = {

floatingPoint: [

```
{
  question: "Why do many decimal fractions such as 0.1 produce representation errors in binary floating-point systems?",
  options: [
    "Because CPUs cannot perform division",
    "Because many decimal fractions have infinite binary expansions",
    "Because RAM stores numbers as text",
    "Because binary uses base 16 internally"
  ],
  answer: 1,
  explanation: "0.1 cannot be represented exactly in binary because it produces a repeating binary fraction."
},

{
  question: "Which operation is most susceptible to catastrophic cancellation?",
  options: [
    "Multiplying large numbers",
    "Dividing by 10",
    "Subtracting nearly equal numbers",
    "Squaring a number"
  ],
  answer: 2,
  explanation: "Subtracting nearly equal quantities causes significant digit loss."
},

{
  question: "Machine epsilon represents:",
  options: [
    "Largest floating-point number",
    "Smallest positive number",
    "Smallest value that changes 1 when added to it",
    "Maximum rounding error"
  ],
  answer: 2,
  explanation: "Machine epsilon measures floating-point precision near 1."
},

{
  question: "IEEE 754 single precision uses how many bits?",
  options: [
    "16",
    "32",
    "64",
    "128"
  ],
  answer: 1,
  explanation: "Single precision floating-point numbers occupy 32 bits."
},

{
  question: "IEEE 754 double precision uses how many bits?",
  options: [
    "32",
    "48",
    "64",
    "128"
  ],
  answer: 2,
  explanation: "Double precision uses 64 bits."
},

{
  question: "Overflow occurs when:",
  options: [
    "Number becomes too small to represent",
    "Number exceeds maximum representable magnitude",
    "Rounding occurs",
    "Division by zero occurs"
  ],
  answer: 1,
  explanation: "Overflow means the result exceeds available exponent range."
},

{
  question: "Underflow occurs when:",
  options: [
    "Value becomes extremely close to zero",
    "Value exceeds memory",
    "Integer exceeds range",
    "Processor overheats"
  ],
  answer: 0,
  explanation: "Underflow occurs when numbers are too small to represent normally."
},

{
  question: "Normalized floating-point representation ensures:",
  options: [
    "Leading digit is significant",
    "Exponent is zero",
    "Mantissa is an integer",
    "Number is positive"
  ],
  answer: 0,
  explanation: "Normalization maximizes precision by keeping leading significant digits."
},

{
  question: "Rounding errors primarily arise because:",
  options: [
    "Computers are inaccurate",
    "Memory is corrupted",
    "Finite bits cannot store infinite precision",
    "Binary arithmetic is incorrect"
  ],
  answer: 2,
  explanation: "Finite storage inevitably causes approximation."
},

{
  question: "Loss of significance is especially dangerous in:",
  options: [
    "Root-finding",
    "Numerical differentiation",
    "Subtraction of close values",
    "Sorting algorithms"
  ],
  answer: 2,
  explanation: "Close-value subtraction destroys significant digits."
}
```

],

bisection: [

```
{
  question: "The Bisection Method requires:",
  options: [
    "Differentiability",
    "f(a)f(b) < 0",
    "Second derivative",
    "Complex roots"
  ],
  answer: 1,
  explanation: "A sign change guarantees a root in the interval."
},

{
  question: "Bisection convergence is:",
  options: [
    "Quadratic",
    "Linear",
    "Cubic",
    "Superlinear"
  ],
  answer: 1,
  explanation: "Bisection reduces interval size linearly."
},

{
  question: "At every iteration, the interval length becomes:",
  options: [
    "Double",
    "Triple",
    "Half",
    "Unchanged"
  ],
  answer: 2,
  explanation: "The interval is halved every iteration."
},

{
  question: "Bisection guarantees convergence if:",
  options: [
    "Function is continuous",
    "Root exists",
    "Sign change exists and function is continuous",
    "Derivative exists"
  ],
  answer: 2,
  explanation: "Continuity and sign change ensure convergence."
},

{
  question: "Bisection is generally slower than:",
  options: [
    "Newton-Raphson",
    "Brute force search",
    "Linear search",
    "Table lookup"
  ],
  answer: 0,
  explanation: "Newton typically converges much faster."
},

{
  question: "Midpoint formula is:",
  options: [
    "(a+b)/2",
    "(a-b)/2",
    "ab/2",
    "a+b"
  ],
  answer: 0,
  explanation: "Midpoint is average of interval endpoints."
},

{
  question: "The error bound after n iterations is proportional to:",
  options: [
    "(b-a)/2^n",
    "(b-a)^n",
    "n(b-a)",
    "1/n²"
  ],
  answer: 0,
  explanation: "The interval shrinks exponentially by powers of 2."
},

{
  question: "Bisection can fail when:",
  options: [
    "Function is discontinuous",
    "Function is quadratic",
    "Root is positive",
    "Root is negative"
  ],
  answer: 0,
  explanation: "Discontinuity breaks the Intermediate Value Theorem."
},

{
  question: "Bisection belongs to:",
  options: [
    "Open methods",
    "Bracketing methods",
    "Regression methods",
    "Interpolation methods"
  ],
  answer: 1,
  explanation: "Bisection always maintains a bracket around the root."
},

{
  question: "Primary advantage of Bisection:",
  options: [
    "Fastest convergence",
    "Guaranteed convergence",
    "No function evaluations",
    "Uses derivatives"
  ],
  answer: 1,
  explanation: "Reliability is its biggest strength."
}
```

],

newton: [

```
{
  question: "Newton-Raphson uses:",
  options: [
    "Derivatives",
    "Integrals",
    "Matrices",
    "Interpolation tables"
  ],
  answer: 0,
  explanation: "The derivative determines the tangent slope."
},

{
  question: "Newton iteration formula is:",
  options: [
    "x-f(x)",
    "x+f(x)",
    "x-f(x)/f'(x)",
    "x+f'(x)"
  ],
  answer: 2,
  explanation: "This is the standard Newton-Raphson update formula."
},

{
  question: "Near a simple root, Newton converges:",
  options: [
    "Linearly",
    "Quadratically",
    "Cubically",
    "Logarithmically"
  ],
  answer: 1,
  explanation: "Quadratic convergence is Newton's major advantage."
},

{
  question: "Newton may fail when:",
  options: [
    "Derivative is near zero",
    "Root exists",
    "Function is continuous",
    "Function is differentiable"
  ],
  answer: 0,
  explanation: "Division by a tiny derivative causes instability."
},

{
  question: "Newton is classified as:",
  options: [
    "Bracketing method",
    "Open method",
    "Regression method",
    "Interpolation method"
  ],
  answer: 1,
  explanation: "Newton does not maintain an interval bracket."
},

{
  question: "Poor initial guesses may cause:",
  options: [
    "Divergence",
    "Overflow",
    "Compilation error",
    "Memory leak"
  ],
  answer: 0,
  explanation: "Newton is sensitive to starting points."
},

{
  question: "Newton's geometric interpretation is:",
  options: [
    "Area under curve",
    "Tangent intersection with x-axis",
    "Midpoint approximation",
    "Linear interpolation"
  ],
  answer: 1,
  explanation: "Each step follows the tangent to the x-axis."
},

{
  question: "Multiple roots generally cause:",
  options: [
    "Faster convergence",
    "Slower convergence",
    "Exact convergence in one step",
    "No iterations"
  ],
  answer: 1,
  explanation: "Quadratic convergence often degrades."
},

{
  question: "Newton usually requires fewer iterations than:",
  options: [
    "Bisection",
    "Matrix inversion",
    "LU decomposition",
    "Interpolation"
  ],
  answer: 0,
  explanation: "Newton is much faster when it converges."
},

{
  question: "Main disadvantage of Newton-Raphson:",
  options: [
    "Requires derivative information",
    "Cannot find roots",
    "Needs intervals",
    "Cannot handle polynomials"
  ],
  answer: 0,
  explanation: "Derivative evaluation may be difficult or expensive."
}
```

]

};
