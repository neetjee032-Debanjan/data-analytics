export const polynomialRegressionLesson = {
  id: "l35",

  title: "Polynomial Regression",

  pages: [

    {
      title: "1. Introduction",
      content: `
Polynomial Regression is used when a straight line cannot adequately represent a dataset.

Instead of fitting a line, we fit a polynomial curve.
`
    },

    {
      title: "2. Motivation",
      content: `
Many real-world relationships are nonlinear.

Examples:

Population Growth

Chemical Reactions

Engineering Systems

Economic Trends
`
    },

    {
      title: "3. Linear vs Polynomial",
      content: `
Linear Regression:

y = a + bx

Polynomial Regression:

y = a + bx + cx² + ...
`
    },

    {
      title: "4. Quadratic Model",
      content: `
The simplest polynomial regression model is:

y = a + bx + cx²

This produces a curved fit.
`
    },

    {
      title: "5. Cubic Model",
      content: `
A cubic regression model is:

y = a + bx + cx² + dx³

This can model more complex trends.
`
    },

    {
      title: "6. Why Use Polynomial Regression",
      content: `
Polynomial regression captures curvature that linear regression cannot represent.
`
    },

    {
      title: "7. Scatter Plot Example",
      content: `
Suppose data forms a U-shaped pattern.

A straight line performs poorly.

A quadratic curve fits much better.
`
    },

    {
      title: "8. Least Squares Principle",
      content: `
Polynomial regression still uses the Least Squares Principle.

The objective remains:

Minimize Σ(y − ŷ)²
`
    },

    {
      title: "9. Regression Coefficients",
      content: `
Coefficients:

a, b, c, d ...

determine the shape of the fitted curve.
`
    },

    {
      title: "10. Normal Equations",
      content: `
Polynomial regression generates more normal equations than linear regression.

These equations are solved simultaneously.
`
    },

    {
      title: "11. Prediction",
      content: `
Once coefficients are known, future values can be predicted using the polynomial equation.
`
    },

    {
      title: "12. Underfitting",
      content: `
Using a polynomial degree that is too low may fail to capture the data trend.
`
    },

    {
      title: "13. Overfitting",
      content: `
Using a very high-degree polynomial may fit noise instead of the true pattern.
`
    },

    {
      title: "14. Model Selection",
      content: `
Choosing an appropriate polynomial degree is an important part of regression analysis.
`
    },

    {
      title: "15. Applications",
      content: `
Applications include:

Engineering

Economics

Machine Learning

Physics

Data Analytics
`
    },

    {
      title: "16. Advantages",
      content: `
Advantages:

• Models nonlinear relationships

• Flexible

• Easy to implement
`
    },

    {
      title: "17. Limitations",
      content: `
Limitations:

• Risk of overfitting

• Computational cost increases with degree
`
    },

    {
      title: "18. Practice Problems",
      content: `
1. Fit a quadratic curve.

2. Compare linear and polynomial fits.

3. Investigate effects of degree.
`
    },

    {
      title: "19. Quiz",
      content: `
Q1. What is polynomial regression?

Q2. Why use a quadratic model?

Q3. What is overfitting?

Q4. What is underfitting?

Q5. How does polynomial regression differ from linear regression?
`
    }

  ]
};
