// Course Data
const courses = [
    {
        title: "Introduction to Data Analytics",
        level: "basic",
        duration: "4 weeks",
        lectures: 25,
        description: "Learn the fundamentals of data analytics, including basic concepts, terminology, and simple data exploration techniques.",
        topics: ["What is Data Analytics?", "Types of Data", "Basic Statistics", "Data Visualization Basics"]
    },
    {
        title: "Excel for Data Analysis",
        level: "basic",
        duration: "3 weeks",
        lectures: 20,
        description: "Master Excel for data analysis with pivot tables, formulas, charts, and data cleaning techniques.",
        topics: ["Excel Basics", "Pivot Tables", "VLOOKUP & HLOOKUP", "Data Cleaning"]
    },
    {
        title: "SQL for Data Analytics",
        level: "basic",
        duration: "5 weeks",
        lectures: 30,
        description: "Learn SQL from scratch to query databases, join tables, and perform complex data analysis.",
        topics: ["SQL Basics", "SELECT Statements", "JOINs", "Aggregations"]
    },
    {
        title: "Python for Data Science",
        level: "intermediate",
        duration: "6 weeks",
        lectures: 40,
        description: "Learn Python programming specifically for data science with pandas, numpy, and matplotlib.",
        topics: ["Python Basics", "Pandas Library", "NumPy", "Data Visualization"]
    },
    {
        title: "Data Visualization with Power BI",
        level: "intermediate",
        duration: "4 weeks",
        lectures: 28,
        description: "Create stunning visualizations and dashboards using Microsoft Power BI for business analytics.",
        topics: ["Power BI Basics", "Data Modeling", "Dashboards", "Advanced Visuals"]
    },
    {
        title: "Statistical Analysis for Data Science",
        level: "intermediate",
        duration: "5 weeks",
        lectures: 35,
        description: "Master statistical concepts essential for data analytics including hypothesis testing and regression.",
        topics: ["Descriptive Statistics", "Hypothesis Testing", "Regression Analysis", "Probability"]
    },
    {
        title: "Machine Learning for Analysts",
        level: "advanced",
        duration: "7 weeks",
        lectures: 50,
        description: "Apply machine learning algorithms to solve real-world data analytics problems.",
        topics: ["ML Basics", "Classification", "Clustering", "Model Evaluation"]
    },
    {
        title: "Big Data Analytics",
        level: "advanced",
        duration: "6 weeks",
        lectures: 45,
        description: "Learn to work with large datasets using Apache Spark, Hadoop, and cloud platforms.",
        topics: ["Big Data Concepts", "Apache Spark", "Hadoop", "Cloud Analytics"]
    },
    {
        title: "Advanced SQL & Database Management",
        level: "advanced",
        duration: "5 weeks",
        lectures: 38,
        description: "Master advanced SQL techniques including window functions, stored procedures, and database optimization.",
        topics: ["Window Functions", " Stored Procedures", "Database Optimization", "NoSQL"]
    },
    {
        title: "Data Analytics Capstone Project",
        level: "advanced",
        duration: "4 weeks",
        lectures: 15,
        description: "Complete a real-world data analytics project from data collection to presentation.",
        topics: ["Project Planning", "Data Collection", "Analysis", "Presentation"]
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCourses('all');
    setupNavigation();
    setupSmoothScroll();
});

// Load Courses
function loadCourses(filter) {
    const grid = document.getElementById('coursesGrid');
    const filteredCourses = filter === 'all' 
        ? courses 
        : courses.filter(course => course.level === filter);
    
    grid.innerHTML = filteredCourses.map(course => `
        <div class="course-card">
            <span class="course-level level-${course.level}">
                ${course.level.toUpperCase()}
            </span>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="course-meta">
                <span>⏱️ ${course.duration}</span>
                <span>📚 ${course.lectures} Lectures</span>
            </div>
            <div style="margin-bottom: 1.5rem;">
                <strong>Topics:</strong>
                <ul style="margin: 0.5rem 0; padding-left: 1.5rem; color: #666;">
                    ${course.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            </div>
            <button class="btn btn-primary" onclick="enrollCourse('${course.title}')">Enroll Now</button>
        </div>
    `).join('');
}

// Filter Courses
function filterCourses(level) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    loadCourses(level);
}

// Navigation
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Scroll Functions
function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

function showCourses() {
    scrollToCourses();
}

function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

// Enroll Course
function enrollCourse(courseTitle) {
    showNotification(`✓ Successfully enrolled in "${courseTitle}"! Check your email for access.`);
}

// Resource Data
const resources = {
    datasets: [
        { name: "Kaggle Datasets", description: "100,000+ free datasets", link: "https://www.kaggle.com/datasets" },
        { name: "UCI ML Repository", description: "Machine learning datasets", link: "https://archive.ics.uci.edu/ml/" },
        { name: "Google Dataset Search", description: "Search any dataset", link: "https://datasetsearch.research.google.com/" },
        { name: "GitHub Public Datasets", description: "Open source datasets", link: "https://github.com/caesar0301/Free-Public-Datasets" }
    ],
    tools: [
        { name: "Python", description: "Programming language", link: "https://www.python.org/downloads/" },
        { name: "RStudio", description: "R development environment", link: "https://www.rstudio.com/products/rstudio/download/" },
        { name: "MySQL", description: "Database management", link: "https://www.mysql.com/downloads/" },
        { name: "Tableau Public", description: "Data visualization", link: "https://www.tableau.com/products/public" },
        { name: "Power BI Desktop", description: "Business analytics", link: "https://powerbi.microsoft.com/desktop/" }
    ],
    tutorials: [
        { name: "Khan Academy Statistics", description: "Free statistics course", link: "https://www.khanacademy.org/math/statistics-probability" },
        { name: "DataCamp Free Courses", description: "Interactive learning", link: "https://www.datacamp.com/" },
        { name: "Coursera Analytics", description: "Professional courses", link: "https://www.coursera.org/browse/data-science" },
        { name: "FreeCode Camp", description: "Free coding tutorials", link: "https://www.freecodecamp.org/" }
    ],
    code: [
        { name: "Python Pandas Examples", description: "Data manipulation code", link: "#" },
        { name: "SQL Query Templates", description: "Common SQL queries", link: "#" },
        { name: "Matplotlib Scripts", description: "Visualization code", link: "#" },
        { name: "Machine Learning Scripts", description: "ML algorithms", link: "#" }
    ],
    certification: [
        { name: "Google Data Analytics", description: "Professional certificate", link: "https://www.google.com/certifications/data-analytics/" },
        { name: "Microsoft Data Analyst", description: "PL-300 certification", link: "https://learn.microsoft.com/en-us/certifications/data-analyst-associate/" },
        { name: "IBM Data Science", description: "Professional certificate", link: "https://www.ibm.com/certify/data-science-professional" }
    ],
    community: [
        { name: "Reddit Data Science", description: "d
