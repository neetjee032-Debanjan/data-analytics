export const gaussEliminationLesson = {
  id: "l20",
  title: "Gauss Elimination Method",

  simulation: "gauss",

  pages: [

    {
      title: "1. Historical Background",
      content: `
Gauss Elimination is one of the most important algorithms in numerical mathematics.

The method is named after the German mathematician Carl Friedrich Gauss.

It provides a systematic way to solve systems of linear equations.

Modern scientific computing, engineering analysis, machine learning, computer graphics, and finite element analysis rely heavily on linear system solvers derived from Gaussian elimination.

Many advanced numerical techniques are built upon this foundation.
`
    },

    {
      title: "2. Systems of Linear Equations",
      content: `
A system of linear equations contains multiple equations and multiple unknowns.

Example:

2x + y = 5

x + 3y = 7

The goal is to find values of x and y that satisfy all equations simultaneously.

Such systems appear throughout science and engineering.
`
    },

    {
      title: "3. Matrix Representation",
      content: `
Linear systems can be represented compactly using matrices.

Example:

A X = B

where:

A = coefficient matrix

X = unknown vector

B = constant vector

Matrix representation allows efficient numerical computation.
`
    },

    {
      title: "4. Augmented Matrix",
      content: `
Instead of writing separate matrices, we often combine them.

Example:

[ A | B ]

This is called an augmented matrix.

Gauss Elimination operates directly on the augmented matrix.
`
    },

    {
      title: "5. Elementary Row Operations",
      content: `
Three row operations are allowed:

1. Swap rows

2. Multiply a row by a nonzero constant

3. Add a multiple of one row to another row

These operations preserve the solution of the system.
`
    },

    {
      title: "6. Forward Elimination",
      content: `
The first phase of Gauss Elimination is forward elimination.

The objective is to transform the matrix into upper triangular form.

All entries below the main diagonal become zero.

This greatly simplifies solving the system.
`
    },

    {
      title: "7. Example: First Elimination",
      content: `
Consider:

2x + y = 5

4x + 3y = 11

Subtract twice Row 1 from Row 2.

The x term disappears from Row 2.

This is the essence of elimination.
`
    },

    {
      title: "8. Upper Triangular Matrix",
      content: `
After forward elimination the matrix becomes:

a b c

0 d e

0 0 f

This structure is called an upper triangular matrix.

It is much easier to solve.
`
    },

    {
      title: "9. Back Substitution",
      content: `
Once upper triangular form is obtained, solve from bottom to top.

First solve the final equation.

Substitute upward repeatedly.

This process is called back substitution.
`
    },

    {
      title: "10. Worked Example",
      content: `
Solve:

x + y + z = 6

2x + 3y + z = 10

x + 2y + 3z = 14

Forward elimination produces an upper triangular matrix.

Back substitution yields:

x = 1

y = 2

z = 3
`
    },

    {
      title: "11. Pivot Elements",
      content: `
The leading element used for elimination is called the pivot.

Good pivots improve numerical stability.

Small pivots can cause significant computational errors.

Pivot selection is an important topic in numerical analysis.
`
    },

    {
      title: "12. Partial Pivoting",
      content: `
Partial pivoting swaps rows to place the largest available pivot into the pivot position.

Benefits:

• Better stability

• Reduced round-off error

• More reliable computations

Most professional solvers use pivoting.
`
    },

    {
      title: "13. Computational Complexity",
      content: `
For an n × n system:

Gauss Elimination requires approximately:

O(n³)

operations.

Although expensive for very large systems, it remains practical for many engineering applications.
`
    },

    {
      title: "14. Engineering Applications",
      content: `
Applications include:

• Structural analysis

• Finite element methods

• Electrical circuits

• Machine learning

• Fluid mechanics

• Robotics

Nearly every engineering discipline uses matrix solvers.
`
    },

    {
      title: "15. Practice Problems",
      content: `
1. Solve:

x + y = 4

2x + 3y = 9

2. Solve:

x + y + z = 6

2x + 3y + z = 10

x + 2y + 3z = 14

3. Perform one elimination step manually.

4. Explain the purpose of pivoting.

5. Why is back substitution required?
`
    }

  ]
};
