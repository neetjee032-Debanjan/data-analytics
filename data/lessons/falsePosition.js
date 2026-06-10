export const falsePositionLesson = {
  id: "l8",
  title: "False Position Method (Regula Falsi)",
  simulation: "falseposition",

  pages: [

    {
      title: "1. Historical Background",
      content: `
The False Position Method, also known as Regula Falsi, is one of the oldest numerical root-finding techniques.

Ancient mathematicians used geometric reasoning to estimate unknown quantities.

The method combines the reliability of interval-based methods with the idea of linear approximation.

It is generally faster than the Bisection Method while still maintaining a guaranteed root interval.
`
    },

    {
      title: "2. What Problem Does It Solve?",
      content: `
Many equations cannot be solved analytically.

Example:

x³ − x − 2 = 0

No simple algebraic solution exists.

Numerical root-finding methods estimate solutions iteratively.

False Position is one such method.
`
    },

    {
      title: "3. Root and Sign Change",
      content: `
A root is a value x for which:

f(x)=0

If:

f(a) × f(b) < 0

then the function changes sign between a and b.

A root must exist in the interval.

This property is the foundation of Regula Falsi.
`
    },

    {
      title: "4. Geometric Intuition",
      content: `
Unlike Bisection, False Position does not use the midpoint.

Instead, it draws a straight line joining:

(a,f(a))

and

(b,f(b))

The x-axis intercept of this line becomes the next approximation.

This often moves closer to the root than the midpoint.
`
    },

    {
      title: "5. Derivation of Formula",
      content: `
Using the equation of a straight line:

x =
(a f(b) − b f(a))
/
(f(b) − f(a))

This point becomes the new approximation.

The interval is then updated while preserving the sign change.
`
    },

    {
      title: "6. Algorithm",
      content: `
Step 1:
Choose a and b.

Step 2:
Verify sign change.

Step 3:
Compute new estimate c.

Step 4:
Evaluate f(c).

Step 5:
Replace a or b.

Step 6:
Repeat until convergence.
`
    },

    {
      title: "7. Worked Example I",
      content: `
Solve:

x² − 4 = 0

Choose:

a = 1
b = 3

Using Regula Falsi:

c ≈ 1.75

Subsequent iterations move rapidly toward x = 2.
`
    },

    {
      title: "8. Worked Example II",
      content: `
Solve:

x³ − x − 2 = 0

Interval:

[1,2]

Successive approximations converge toward:

x ≈ 1.52138
`
    },

    {
      title: "9. Error Behaviour",
      content: `
False Position generally converges faster than Bisection.

However, one endpoint may remain fixed for many iterations.

This can slow convergence considerably.
`
    },

    {
      title: "10. Convergence Analysis",
      content: `
The method exhibits linear convergence.

It is usually faster than Bisection but slower than Newton-Raphson.

Reliability remains one of its major strengths.
`
    },

    {
      title: "11. Advantages",
      content: `
Advantages:

• Guaranteed interval
• Simple implementation
• Faster than Bisection
• No derivative required
• Stable behaviour
`
    },

    {
      title: "12. Limitations",
      content: `
Limitations:

• Can stagnate
• Slower than Newton
• Requires sign change
• Requires continuity
`
    },

    {
      title: "13. Engineering Applications",
      content: `
Applications include:

• Structural engineering
• Heat transfer
• Fluid mechanics
• Circuit design
• Scientific simulations
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Solve x²−9=0

2. Solve x³−5=0

3. Solve cos(x)-x=0

4. Solve e^x−3=0
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. What is Regula Falsi?

Q2. How is it different from Bisection?

Q3. What information is required before applying it?

Q4. State one advantage.

Q5. State one limitation.
`
    }

  ]
};
