export const centralDifferenceLesson = {
  id: "l14",

  title: "Central Difference Method",

  simulation: "centraldifference",

  pages: [

    {
      title: "1. Introduction",
      content: `
Central Difference is one of the most important numerical differentiation methods.

Unlike Forward Difference and Backward Difference, it uses information from both sides of a point.

Because of this balanced approach, it usually produces more accurate derivative approximations.

It is widely used in scientific computing and engineering simulations.
`
    },

    {
      title: "2. Motivation",
      content: `
Forward Difference uses future data.

Backward Difference uses past data.

Both methods introduce asymmetry.

Central Difference removes this asymmetry by considering points on both sides of the target location.

This significantly improves accuracy.
`
    },

    {
      title: "3. Derivative Definition",
      content: `
Recall:

f'(x)=lim(h→0)
[f(x+h)-f(x)]/h

By combining information from both directions, we obtain a more accurate approximation formula.
`
    },

    {
      title: "4. Central Difference Formula",
      content: `
The Central Difference approximation is:

f'(x) ≈

[f(x+h)-f(x-h)]/(2h)

This formula uses two neighboring points around x.

It is often the preferred finite difference method.
`
    },

    {
      title: "5. Geometric Interpretation",
      content: `
Imagine two points equally spaced around x.

The slope between these points approximates the tangent slope at x.

Because the interval is centered, positive and negative errors partially cancel.

This leads to improved accuracy.
`
    },

    {
      title: "6. Algorithm",
      content: `
Step 1:
Choose x

Step 2:
Choose h

Step 3:
Evaluate f(x+h)

Step 4:
Evaluate f(x-h)

Step 5:
Apply Central Difference Formula

Step 6:
Interpret the derivative estimate
`
    },

    {
      title: "7. Worked Example I",
      content: `
Find the derivative of:

f(x)=x²

at x=2

Using:

h=0.1

f(2.1)=4.41

f(1.9)=3.61

Derivative:

(4.41−3.61)/(0.2)

=4.0

Exact derivative:

4

The approximation is exact in this case.
`
    },

    {
      title: "8. Worked Example II",
      content: `
Find:

d/dx(sin x)

at x=0

Using:

h=0.01

Derivative:

[sin(0.01)-sin(-0.01)]/0.02

≈0.99998

Exact derivative:

1

Very accurate result.
`
    },

    {
      title: "9. Error Analysis",
      content: `
Central Difference has lower truncation error than Forward and Backward Difference.

The leading error term is proportional to h².

This makes the method considerably more accurate.
`
    },

    {
      title: "10. Order of Accuracy",
      content: `
Central Difference is a second-order method.

Error:

O(h²)

This is a major improvement over Forward and Backward Difference:

O(h)

methods.
`
    },

    {
      title: "11. Comparison with Other Methods",
      content: `
Forward Difference:

Error O(h)

Backward Difference:

Error O(h)

Central Difference:

Error O(h²)

For the same step size, Central Difference is generally much more accurate.
`
    },

    {
      title: "12. Advantages",
      content: `
Advantages:

• Higher accuracy
• Symmetric formulation
• Widely used
• Simple implementation

It is often the preferred choice when data on both sides is available.
`
    },

    {
      title: "13. Limitations",
      content: `
Limitations:

• Requires data on both sides
• Cannot be used at boundaries
• Sensitive to noisy data
`
    },

    {
      title: "14. Engineering Applications",
      content: `
Applications include:

• Computational Fluid Dynamics
• Structural Analysis
• Finite Difference Methods
• Signal Processing
• Scientific Simulations
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. State the Central Difference Formula.

Q2. What is its order of accuracy?

Q3. Why is it more accurate than Forward Difference?

Q4. Why is it unsuitable at boundaries?

Q5. Compute the derivative of x² at x=3 using h=0.1.
`
    }

  ]
};
