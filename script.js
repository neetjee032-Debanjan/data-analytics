// Topic database with detailed content
const topicContent = {
    'eda': {
        title: '📈 Exploratory Data Analysis (EDA)',
        content: `
            <div class="topic-section">
                <h4>What is EDA?</h4>
                <p>Exploratory Data Analysis is an approach to analyzing data sets to summarize their main characteristics, often using visual methods. EDA is critical for understanding the structure of your data before applying formal modeling techniques.</p>
            </div>
            <div class="topic-section">
                <h4>Key Components of EDA:</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li><strong>Distribution Analysis:</strong> Understanding how data points are spread across different values</li>
                    <li><strong>Outlier Detection:</strong> Identifying unusual observations that deviate from other observations</li>
                    <li><strong>Missing Value Analysis:</strong> Finding gaps in your data and deciding how to handle them</li>
                    <li><strong>Pattern Recognition:</strong> Spotting trends, cycles, or relationships between variables</li>
                </ul>
            </div>
            <div class="topic-section">
                <h4>Common EDA Techniques:</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li>Histograms and Box plots for distribution</li>
                    <li>Scatter plots for relationships</li>
                    <li>Correlation matrices</li>
                    <li>Summary statistics (mean, median, standard deviation)</li>
                </ul>
            </div>
            <div class="example-box">
                <strong>💡 Real-world Example:</strong> A retail company analyzing sales data might use EDA to discover that most sales occur on weekends, helping them optimize staffing and promotions.
            </div>
            <div class="code-block">
                <strong>Python Code Example:</strong><br>
                import pandas as pd<br>
                import matplotlib.pyplot as plt<br><br>
                # Load data<br>
                df = pd.read_csv('sales.csv')<br><br>
                # Quick summary<br>
                print(df.describe())<br><br>
                # Visualize distribution<br>
                df['sales'].hist(bins=30)<br>
                plt.show()
            </div>
        `
    },
    'correlation': {
        title: '🧩 Correlation vs Causation',
        content: `
            <div class="topic-section">
                <h4>Understanding the Difference</h4>
                <p><strong>Correlation</strong> measures the strength and direction of a relationship between two variables. <strong>Causation</strong> means that one event directly causes another to occur.</p>
            </div>
            <div class="topic-section">
                <h4>Key Insight:</h4>
                <p><em>"Correlation does not imply causation"</em> - This is one of the most important principles in statistics. Two variables can be correlated without one causing the other.</p>
            </div>
            <div class="topic-section">
                <h4>Correlation Types:</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li><strong>Positive Correlation:</strong> As one variable increases, the other increases (e.g., height and weight)</li>
                    <li><strong>Negative Correlation:</strong> As one variable increases, the other decreases (e.g., speed and travel time)</li>
                    <li><strong>Zero Correlation:</strong> No relationship between variables</li>
                </ul>
            </div>
            <div class="example-box">
                <strong>📊 Classic Example:</strong> Ice cream sales and drowning incidents are positively correlated, but eating ice cream doesn't cause drowning. The hidden variable is hot weather, which causes both!
            </div>
            <div class="code-block">
                <strong>Python Code (Correlation Calculation):</strong><br>
                import numpy as np<br><br>
                # Calculate Pearson correlation<br>
                correlation = np.corrcoef(x, y)[0, 1]<br>
                print(f"Correlation coefficient: {correlation}")<br><br>
                # Range: -1 (perfect negative) to +1 (perfect positive)
            </div>
        `
    },
    'regression': {
        title: '📉 Linear Regression',
        content: `
            <div class="topic-section">
                <h4>What is Linear Regression?</h4>
                <p>Linear regression is a statistical method used to model the relationship between a dependent variable (Y) and one or more independent variables (X). The goal is to find the best-fitting straight line through the data points.</p>
            </div>
            <div class="topic-section">
                <h4>The Equation:</h4>
                <p><strong>Y = mX + b</strong> where:<br>
                - Y is the predicted value (dependent variable)<br>
                - X is the input feature (independent variable)<br>
                - m is the slope (coefficient)<br>
                - b is the y-intercept</p>
            </div>
            <div class="topic-section">
                <h4>Key Metrics:</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li><strong>R-squared (R²):</strong> Measures how well the model fits the data (0 to 1, higher is better)</li>
                    <li><strong>P-value:</strong> Tests if the relationship is statistically significant</li>
                    <li><strong>Coefficients:</strong> Show the strength and direction of relationships</li>
                </ul>
            </div>
            <div class="example-box">
                <strong>🏠 Real-world Application:</strong> Predicting house prices based on square footage. The regression model might find that each additional square foot increases the price by $150.
            </div>
            <div class="code-block">
                <strong>Python Code (Linear Regression with scikit-learn):</strong><br>
                from sklearn.linear_model import LinearRegression<br>
                import numpy as np<br><br>
                model = LinearRegression()<br>
                model.fit(X, y)<br>
                predictions = model.predict(X_new)<br>
                print(f"Coefficient: {model.coef_[0]}")<br>
                print(f"R-squared: {model.score(X, y)}")
            </div>
        `
    },
    'hypothesis': {
        title: '🎲 Hypothesis Testing',
        content: `
            <div class="topic-section">
                <h4>What is Hypothesis Testing?</h4>
                <p>Hypothesis testing is a statistical method used to make decisions using data. It helps determine whether there is enough evidence to reject a null hypothesis.</p>
            </div>
            <div class="topic-section">
                <h4>Key Concepts:</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li><strong>Null Hypothesis (H₀):</strong> The default assumption (e.g., "no effect" or "no difference")</li>
                    <li><strong>Alternative Hypothesis (H₁):</strong> What you want to prove</li>
                    <li><strong>P-value:</strong> Probability of observing results as extreme as what you found, assuming H₀ is true</li>
                    <li><strong>Significance Level (α):</strong> Usually 0.05 (5%), the threshold for rejecting H₀</li>
                </ul>
            </div>
            <div class="example-box">
                <strong>🧪 A/B Testing Example:</strong> An e-commerce site tests two button colors. If p-value < 0.05, the new color significantly improves conversions.
            </div>
            <div class="code-block">
                <strong>Python Code (t-test):</strong><br>
                from scipy import stats<br>
                t_stat, p_value = stats.ttest_ind(group_a, group_b)<br>
                print(f"P-value: {p_value}")
            </div>
        `
    },
    'data-types': {
        title: '🔢 Data Types in Analytics',
        content: `
            <div class="topic-section">
                <h4>The Four Scales of Measurement</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li><strong>Nominal:</strong> Categories with no order (e.g., colors, genders)</li>
                    <li><strong>Ordinal:</strong> Categories with order but unequal intervals (e.g., movie ratings)</li>
                    <li><strong>Interval:</strong> Numeric with equal intervals but no true zero (e.g., temperature)</li>
                    <li><strong>Ratio:</strong> Numeric with equal intervals and true zero (e.g., height, weight)</li>
                </ul>
            </div>
            <div class="example-box">
                <strong>💡 Why it matters:</strong> The data type determines which statistical tests are appropriate.
            </div>
        `
    },
    'descriptive-stats': {
        title: '📏 Descriptive Statistics',
        content: `
            <div class="topic-section">
                <h4>Measures of Central Tendency</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li><strong>Mean:</strong> Average of all values</li>
                    <li><strong>Median:</strong> Middle value when sorted (resistant to outliers)</li>
                    <li><strong>Mode:</strong> Most frequent value</li>
                </ul>
            </div>
            <div class="topic-section">
                <h4>Measures of Dispersion</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li><strong>Range:</strong> Max - Min</li>
                    <li><strong>Standard Deviation:</strong> Average distance from mean</li>
                </ul>
            </div>
        `
    },
    'data-viz': {
        title: '📊 Data Visualization Principles',
        content: `
            <div class="topic-section">
                <h4>Key Principles</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li>Choose the right chart type for your data</li>
                    <li>Label axes clearly</li>
                    <li>Avoid misleading scales</li>
                    <li>Use color effectively</li>
                </ul>
            </div>
        `
    },
    'data-cleaning': {
        title: '🧹 Data Cleaning',
        content: `
            <div class="topic-section">
                <h4>Essential Steps</h4>
                <ul style="margin-left: 1.5rem; color: #334155;">
                    <li>Handle missing values (remove or impute)</li>
                    <li>Remove duplicates</li>
                    <li>Fix structural errors</li>
                    <li>Handle outliers appropriately</li>
                </ul>
            </div>
        `
    },
    'supervised': {
        title: '🤖 Supervised Learning',
        content: `<div class="topic-section"><h4>What is Supervised Learning?</h4><p>Training models on labeled data to predict outcomes for new data.</p><div class="example-box"><strong>Examples:</strong> Spam detection, price prediction, image classification
