export const luDecompositionLesson = {
  id: "l19",

  title: "LU Decomposition",

  simulation: "lu",

  pages: [

    {
      title: "1. Introduction",
      content: `
LU Decomposition is a matrix factorization technique.

It expresses a matrix A as:

A = LU

where:

L = Lower Triangular Matrix

U = Upper Triangular Matrix

This decomposition simplifies solving systems of linear equations.
`
    },

    {
      title: "2. Motivation",
      content: `
Repeatedly applying Gauss Elimination to solve multiple systems can be inefficient.

LU Decomposition performs elimination once.

The resulting matrices can then be reused for multiple right-hand-side vectors.
`
    },

    {
      title: "3. Triangular Matrices",
      content: `
A Lower Triangular Matrix contains non-zero elements only below the main diagonal.

An Upper Triangular Matrix contains non-zero elements only above the main diagonal.

These matrices are easier to solve computationally.
`
    },

    {
      title: "4. Matrix Factorization",
      content: `
The objective is:

A = LU

Instead of directly solving Ax=b, we solve:

LUx=b

This is performed in two simpler stages.
`
    },

    {
      title: "5. Forward Substitution",
      content: `
Let:

Ly=b

Solve for y first.

Because L is lower triangular, the solution can be obtained sequentially from top to bottom.
`
    },

    {
      title: "6. Back Substitution",
      content: `
After computing y:

Ux=y

Solve for x.

Since U is upper triangular, the solution proceeds from bottom to top.
`
    },

    {
      title: "7. Example Matrix",
      content: `
Consider:

A =

[2 1]

[4 3]

The matrix can be decomposed into L and U.

Multiplying L and U reconstructs the original matrix.
`
    },

    {
      title: "8. Doolittle Method",
      content: `
One common decomposition approach is Doolittle's Method.

In this method:

Diagonal entries of L are equal to 1.

The remaining elements are computed systematically.
`
    },

    {
      title: "9. Crout Method",
      content: `
Another approach is Crout's Method.

In Crout decomposition:

Diagonal entries of U are equal to 1.

Both approaches produce valid LU factorizations.
`
    },

    {
      title: "10. Algorithm Overview",
      content: `
Step 1:
Initialize L and U.

Step 2:
Compute first row of U.

Step 3:
Compute first column of L.

Step 4:
Continue until all entries are determined.

Step 5:
Verify A = LU.
`
    },

    {
      title: "11. Computational Advantages",
      content: `
Advantages include:

• Faster repeated solutions

• Reduced computation

• Efficient implementation

• Widely used in numerical software
`
    },

    {
      title: "12. Numerical Stability",
      content: `
In practice pivoting is often used.

Partial Pivoting:

PA = LU

where P is a permutation matrix.

Pivoting improves numerical stability.
`
    },

    {
      title: "13. Applications",
      content: `
Applications include:

• Finite Element Analysis

• Structural Engineering

• Circuit Analysis

• Machine Learning

• Scientific Computing
`
    },

    {
      title: "14. Advantages and Limitations",
      content: `
Advantages:

• Efficient

• Reusable decomposition

• Suitable for large systems

Limitations:

• Pivoting may be required

• Singular matrices cannot be decomposed normally
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. What is LU Decomposition?

Q2. What does L represent?

Q3. What does U represent?

Q4. Why is LU useful?

Q5. What is partial pivoting?
`
    }

  ]
};
