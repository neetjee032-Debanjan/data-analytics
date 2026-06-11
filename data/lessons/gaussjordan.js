export const gaussJordanLesson = {
  id: "l18",

  title: "Gauss-Jordan Method",

  simulation: "gauss-jordan",

  pages: [

    {
      title: "1. Introduction",
      content: `
Gauss-Jordan Method is an extension of Gauss Elimination.

Instead of stopping at an upper triangular matrix, the method continues until the coefficient matrix becomes the identity matrix.

The final solution can then be read directly without back substitution.

It is one of the most important matrix-solving techniques.
`
    },

    {
      title: "2. Motivation",
      content: `
Gauss Elimination requires a separate back-substitution step.

Gauss-Jordan eliminates this requirement.

The solution appears automatically after matrix reduction.

This makes the procedure conceptually simpler.
`
    },

    {
      title: "3. System of Linear Equations",
      content: `
Consider:

a₁₁x + a₁₂y + a₁₃z = b₁

a₂₁x + a₂₂y + a₂₃z = b₂

a₃₁x + a₃₂y + a₃₃z = b₃

These equations can be represented using an augmented matrix.
`
    },

    {
      title: "4. Augmented Matrix",
      content: `
The system is written as:

[A|B]

The coefficient matrix and constant vector are combined into one matrix.

Row operations are then performed on this matrix.
`
    },

    {
      title: "5. Elementary Row Operations",
      content: `
Allowed operations:

1. Swap two rows

2. Multiply a row by a non-zero constant

3. Add a multiple of one row to another

These operations preserve the solution.
`
    },

    {
      title: "6. Goal of Gauss-Jordan",
      content: `
Transform:

[A|B]

into:

[I|X]

where:

I = Identity Matrix

X = Solution Vector
`
    },

    {
      title: "7. Forward Elimination",
      content: `
First remove coefficients below each pivot.

This stage is identical to Gauss Elimination.

An upper triangular matrix is produced.
`
    },

    {
      title: "8. Backward Elimination",
      content: `
Continue eliminating coefficients above each pivot.

Eventually every pivot column contains zeros except the pivot itself.

The coefficient matrix becomes the identity matrix.
`
    },

    {
      title: "9. Example",
      content: `
Solve:

x + y = 3

x − y = 1

After row operations:

[1 0 | 2]

[0 1 | 1]

Therefore:

x = 2

y = 1
`
    },

    {
      title: "10. Algorithm",
      content: `
Step 1:
Form augmented matrix.

Step 2:
Select pivot.

Step 3:
Normalize pivot row.

Step 4:
Eliminate all other entries in pivot column.

Step 5:
Repeat for all columns.

Step 6:
Read solution directly.
`
    },

    {
      title: "11. Matrix Inversion",
      content: `
Gauss-Jordan can also compute matrix inverses.

Augment:

[A|I]

Perform row operations until:

[I|A⁻¹]

This is one of the most common methods for matrix inversion.
`
    },

    {
      title: "12. Advantages",
      content: `
Advantages:

• Direct solution

• No back substitution

• Can compute inverses

• Easy to automate
`
    },

    {
      title: "13. Limitations",
      content: `
Limitations:

• More arithmetic operations

• Slower for large systems

• Numerical instability may occur without pivoting
`
    },

    {
      title: "14. Applications",
      content: `
Applications include:

• Engineering analysis

• Circuit design

• Structural mechanics

• Data science

• Computer graphics
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. What is the goal of Gauss-Jordan elimination?

Q2. What matrix appears at the end?

Q3. Why is back substitution unnecessary?

Q4. Name three elementary row operations.

Q5. How can matrix inverses be computed?
`
    }

  ]
};
