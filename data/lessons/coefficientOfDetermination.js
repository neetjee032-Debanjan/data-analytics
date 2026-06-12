export const coefficientOfDeterminationLesson = {
  id: "l38",

  title: "Coefficient of Determination (R²)",

  pages: [

    {
      title: "1. Introduction",
      content: `
The Coefficient of Determination is one of the most important measures in regression analysis.

It indicates how well a regression model explains the observed data.

It is denoted by R².
`
    },

    {
      title: "2. Purpose",
      content: `
R² measures the proportion of variation in the dependent variable that is explained by the regression model.
`
    },

    {
      title: "3. Range of R²",
      content: `
R² generally lies between:

0 and 1

or

0% and 100%
`
    },

    {
      title: "4. Interpretation",
      content: `
R² = 1

means perfect prediction.

All observed points lie exactly on the regression curve.
`
    },

    {
      title: "5. Zero Value",
      content: `
R² = 0

means the model explains none of the variation in the data.
`
    },

    {
      title: "6. Example",
      content: `
R² = 0.85

means 85% of the variation in the dependent variable is explained by the model.
`
    },

    {
      title: "7. Total Variation",
      content: `
The total variation in data is measured by:

SST

Total Sum of Squares.
`
    },

    {
      title: "8. Explained Variation",
      content: `
The variation explained by the model is measured by:

SSR

Regression Sum of Squares.
`
    },

    {
      title: "9. Unexplained Variation",
      content: `
The variation not explained by the model is:

SSE

Sum of Squared Errors.
`
    },

    {
      title: "10. Formula",
      content: `
R² = SSR / SST

or equivalently

R² = 1 − SSE/SST
`
    },

    {
      title: "11. Graphical Meaning",
      content: `
Higher R² generally means the regression curve follows the data more closely.
`
    },

    {
      title: "12. Comparing Models",
      content: `
R² is often used to compare multiple regression models.
`
    },

    {
      title: "13. High R²",
      content: `
High R² indicates strong explanatory power.

However, it does not guarantee a perfect model.
`
    },

    {
      title: "14. Low R²",
      content: `
Low R² suggests that much of the variation remains unexplained.
`
    },

    {
      title: "15. Overfitting Warning",
      content: `
A very high R² can sometimes indicate overfitting, especially with high-degree polynomials.
`
    },

    {
      title: "16. Applications",
      content: `
Economics

Finance

Engineering

Machine Learning

Scientific Research
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Interpret R² = 0.65.

2. Interpret R² = 0.95.

3. Compare two models using R².
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. What does R² measure?

Q2. What does R² = 1 mean?

Q3. What does R² = 0 mean?

Q4. Can a high R² guarantee a good model?

Q5. Why is R² useful?
`
    }

  ]
};
