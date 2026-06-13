export const goodnessOfFitLesson = {
  id: "l40",

  title: "Goodness of Fit",

  pages: [

    {
      title: "1. Introduction",
      content: `
When a regression model is fitted to data, we need a way to judge how well the model represents the observed data.

This evaluation is called Goodness of Fit.

A good model should:

• Explain most of the variation in data
• Produce small residuals
• Predict unseen values accurately
• Avoid overfitting

Goodness-of-fit measures help quantify these properties.
`
    },

    {
      title: "2. Why Goodness of Fit Matters",
      content: `
Two different models can be fitted to the same dataset.

Example:

Model A:
y = 2x + 1

Model B:
y = 0.5x² + 3

Which one is better?

Goodness-of-fit measures provide an objective criterion for comparison.

Without these measures, model selection becomes subjective.
`
    },

    {
      title: "3. Sum of Squares",
      content: `
Most goodness-of-fit measures are based on sums of squares.

Total Sum of Squares:

SST = Σ(yᵢ − ȳ)²

Explained Sum of Squares:

SSR = Σ(ŷᵢ − ȳ)²

Residual Sum of Squares:

SSE = Σ(yᵢ − ŷᵢ)²

Relationship:

SST = SSR + SSE

This decomposition forms the foundation of regression analysis.
`
    },

    {
      title: "4. Interpretation of SSE",
      content: `
SSE measures the unexplained variation.

Large SSE:

• Poor model fit
• Large prediction errors

Small SSE:

• Good model fit
• Small prediction errors

The ideal model would have:

SSE = 0

meaning every point lies exactly on the regression curve.
`
    },

    {
      title: "5. Root Mean Square Error (RMSE)",
      content: `
A widely used goodness-of-fit measure is:

RMSE = √(SSE/n)

where:

n = number of observations

RMSE represents the average prediction error measured in the same units as the dependent variable.

Smaller RMSE indicates a better model.
`
    },

    {
      title: "6. Mean Absolute Error (MAE)",
      content: `
Another popular metric is:

MAE = (1/n)Σ|yᵢ − ŷᵢ|

Advantages:

• Easy to interpret
• Less sensitive to extreme outliers

Compared with RMSE:

RMSE penalizes large errors more heavily.
`
    },

    {
      title: "7. Comparing Models",
      content: `
Suppose two models produce:

Model A:
RMSE = 2.1

Model B:
RMSE = 1.3

Model B generally provides better predictions because its average error is smaller.

Goodness-of-fit metrics allow objective comparison between competing models.
`
    },

    {
      title: "8. Overfitting Problem",
      content: `
A model may fit training data perfectly but perform poorly on new data.

This phenomenon is called overfitting.

Example:

A high-degree polynomial may pass through every training point.

However:

• Prediction quality decreases
• Generalization becomes poor

Therefore a lower error on training data does not always imply a superior model.
`
    },

    {
      title: "9. Practical Interpretation",
      content: `
Goodness-of-fit measures should always be interpreted together.

Useful indicators:

• R²
• Adjusted R²
• RMSE
• MAE
• Residual plots

No single metric tells the entire story.

A robust model performs well across multiple measures.
`
    },

    {
      title: "10. Summary",
      content: `
Goodness of Fit measures how effectively a regression model explains observed data.

Key concepts:

• SST, SSR and SSE
• RMSE
• MAE
• Model comparison
• Overfitting awareness

These metrics help determine whether a regression model is reliable and useful.
`
    }

  ]
};
