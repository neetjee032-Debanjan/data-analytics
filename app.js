let chart;

const lessons = [
{
title: "Introduction",
text: `
Data Analytics is the science of analyzing raw data to find patterns and make decisions.

Used by:
- Netflix (recommendations)
- Amazon (sales prediction)
- Google (search ranking)

Flow:
Data → Cleaning → Analysis → Insights → Decision
`
},

{
title: "Data Types",
text: `
Structured Data → Tables (SQL, Excel)
Unstructured Data → Images, text, videos
Semi-structured → JSON, XML

Example:
Instagram posts = unstructured data
Bank records = structured data
`
},

{
title: "Statistics",
text: `
Mean = average value
Median = middle value
Mode = most frequent value

Example:
10, 20, 20, 30 → Mode = 20
`
},

{
title: "Data Cleaning",
text: `
Real-world data is messy.

Steps:
- remove duplicates
- fix missing values
- standardize formats

Bad data = wrong analysis
`
},

{
title: "Visualization",
text: `
Charts help understand patterns quickly.

Bar → comparison
Line → trends
Pie → distribution
`
},

{
title: "Case Study",
text: `
Problem: Users dropping after Day 3.

Solution:
1. Collect usage data
2. Find drop-off point
3. Visualize trend
4. Fix onboarding flow

This is real analytics work.
`
},

{
title: "Contact",
text: `
Name: Debanjan Banerjee
Location: Kolkata, India
Email: banerjeedebanjan22@gmail.com
Phone: 6289143900
`
}
];

function openLesson(i) {

  document.getElementById("title").innerText = lessons[i].title;

  document.getElementById("content").innerHTML =
    lessons[i].text.replace(/\n/g, "<br>");

  if (chart) chart.destroy();

  if (i === 4) drawChart();
}

function drawChart() {
  const ctx = document.getElementById("chart");

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["A","B","C","D","E"],
      datasets: [{
        label: "Sample Trend",
        data: [12, 19, 8, 15, 22],
        borderColor: "#38bdf8",
        tension: 0.4
      }]
    }
  });
}
