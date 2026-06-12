export const leastSquaresLineLesson = {
  id: "l34",

  title: "Least Squares Fit to a Straight Line",

  pages: [

    {
      title: "1. Introduction",
      content: `
The Least Squares Method is one of the most important techniques in numerical analysis and statistics.

It is used to find the straight line that best fits a given set of data points.
`
    },

    {
      title: "2. Motivation",
      content: `
Real-world measurements often contain errors.

Data points rarely lie perfectly on a straight line.

We therefore seek the line that represents the overall trend of the data.
`
    },

    {
      title: "3. Best-Fit Line",
      content: `
The best-fit straight line is usually written as:

y = a + bx

where:

a = intercept

b = slope
`
    },

    {
      title: "4. Independent and Dependent Variables",
      content: `
x is called the independent variable.

y is called the dependent variable.

The value of y depends on x.
`
    },

    {
      title: "5. Sample Dataset",
      content: `
x     y

1     2

2     4

3     5

4     4

5     5

Our goal is to find the best straight line through these points.
`
    },

    {
      title: "6. Why Not Connect Points Directly?",
      content: `
Connecting points directly may create a complicated curve.

Regression seeks a simple mathematical relationship that captures the overall pattern.
`
    },

    {
      title: "7. Prediction Error",
      content: `
For each observation:

Error = Observed Value − Predicted Value

or

e = y − ŷ
`
    },

    {
      title: "8. Residuals",
      content: `
The individual prediction errors are called residuals.

Residual:

eᵢ = yᵢ − ŷᵢ
`
    },

    {
      title: "9. Why Square the Errors?",
      content: `
Positive and negative errors can cancel each other.

To avoid this problem, errors are squared.

This gives the Least Squares Method its name.
`
    },

    {
      title: "10. Sum of Squared Errors",
      content: `
Objective:

Minimize

Σ(y − ŷ)²

This quantity is called the Sum of Squared Errors (SSE).
`
    },

    {
      title: "11. Least Squares Principle",
      content: `
The best-fit line is the line that minimizes the Sum of Squared Errors.
`
    },

    {
      title: "12. Normal Equations",
      content: `
The Least Squares Method leads to two equations:

Σy = na + bΣx

Σxy = aΣx + bΣx²

These are called Normal Equations.
`
    },

    {
      title: "13. Solving for a and b",
      content: `
The Normal Equations are solved simultaneously to obtain:

a = intercept

b = slope
`
    },

    {
      title: "14. Interpretation of Slope",
      content: `
The slope indicates how rapidly y changes with x.

Positive slope:

Increasing trend

Negative slope:

Decreasing trend
`
    },

    {
      title: "15. Interpretation of Intercept",
      content: `
The intercept represents the predicted value of y when x = 0.
`
    },

    {
      title: "16. Prediction",
      content: `
Once the equation is known, future values can be estimated.

Example:

Predict sales for a given advertising budget.
`
    },

    {
      title: "17. Applications",
      content: `
Applications include:

Economics

Engineering

Finance

Physics

Machine Learning

Data Analytics
`
    },

    {
      title: "18. Advantages",
      content: `
Advantages:

• Simple

• Fast

• Interpretable

• Widely used

• Good foundation for advanced regression models
`
    },

    {
      title: "19. Practice Problems",
      content: `
1. Compute a best-fit line for a small dataset.

2. Calculate residuals.

3. Determine slope and intercept.

4. Make predictions using the fitted line.
`
    },

    {
      title: "20. Quiz",
      content: `
Q1. What is the Least Squares Method?

Q2. Why are errors squared?

Q3. What are residuals?

Q4. What are Normal Equations?

Q5. What does the slope represent?
`
    }

  ]
};
