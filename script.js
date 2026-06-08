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
        topics: ["Window Functions", "Stored Procedures", "Database Optimization", "NoSQL"]
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

// Resource Data
const resources = {
    datasets: [
        { name: "Kaggle Datasets", description: "100,000+ free datasets for practice", link: "https://www.kaggle.com/datasets" },
        { name: "UCI ML Repository", description: "Machine learning datasets", link: "https://archive.ics.uci.edu/ml/" },
        { name: "Google Dataset Search", description: "Search any dataset online", link: "https://datasetsearch.research.google.com/" },
        { name: "GitHub Public Datasets", description: "Open source datasets collection", link: "https://github.com/caesar0301/Free-Public-Datasets" },
        { name: "AWS Public Datasets", description: "Large-scale datasets on AWS", link: "https://registry.opendata.aws/" }
    ],
    tools: [
        { name: "Python Download", description: "Programming language for data science", link: "https://www.python.org/downloads/" },
        { name: "RStudio", description: "R development environment", link: "https://www.rstudio.com/products/rstudio/download/" },
        { name: "MySQL", description: "Database management system", link: "https://www.mysql.com/downloads/" },
        { name: "Tableau Public", description: "Free data visualization tool", link: "https://www.tableau.com/products/public" },
        { name: "Power BI Desktop", description: "Microsoft business analytics", link: "https://powerbi.microsoft.com/desktop/" },
        { name: "Jupyter Notebook", description: "Interactive computing", link: "https://jupyter.org/install" }
    ],
    tutorials: [
        { name: "Khan Academy Statistics", description: "Free statistics and probability course", link: "https://www.khanacademy.org/math/statistics-probability" },
        { name: "DataCamp Free Courses", description: "Interactive data science learning", link: "https://www.datacamp.com/" },
        { name: "Coursera Analytics", description: "Professional data analytics courses", link: "https://www.coursera.org/browse/data-science" },
        { name: "FreeCode Camp", description: "Free coding tutorials and projects", link: "https://www.freecodecamp.org/" },
        { name: "W3Schools SQL", description: "Learn SQL online", link: "https://www.w3schools.com/sql/" }
    ],
    code: [
        { name: "Python Pandas Examples", description: "Data manipulation code snippets", link: "https://pandas.pydata.org/docs/getting_started/examples.html" },
        { name: "SQL Query Templates", description: "Common SQL query examples", link: "https://www.sqltutorial.org/" },
        { name: "Matplotlib Scripts", description: "Data visualization code", link: "https://matplotlib.org/stable/gallery/" },
        { name: "Machine Learning Scripts", description: "ML algorithm implementations", link: "https://scikit-learn.org/stable/auto_examples/" },
        { name: "NumPy Examples", description: "Numerical Python code samples", link: "https://numpy.org/devdocs/user/absolute_beginners.html" }
    ],
    certification: [
        { name: "Google Data Analytics", description: "Professional certificate program", link: "https://www.coursera.org/professional-certificates/google-data-analytics" },
        { name: "Microsoft Data Analyst", description: "PL-300 certification exam", link: "https://learn.microsoft.com/en-us/certifications/data-analyst-associate/" },
        { name: "IBM Data Science", description: "Professional certificate", link: "https://www.coursera.org/professional-certificates/ibm-data-science" },
        { name: "Coursera Data Science", description: "Johns Hopkins certification", link: "https://www.coursera.org/professional-certificates/jhu-data-science" }
    ],
    community: [
        { name: "Reddit Data Science", description: "Active data science community", link: "https://www.reddit.com/r/datascience/" },
        { name: "Stack Overflow", description: "Programming Q&A community", link: "https://stackoverflow.com/questions/tagged/data-analysis" },
        { name: "DataCamp Community", description: "Learn and connect with peers", link: "https://www.datacamp.com/community/" },
        { name: "Kaggle Community", description: "Data science competitions & forums", link: "https://www.kaggle.com/discussion" }
    ]
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCourses('all');
    setupNavigation();
    setupSmoothScroll();
    updateActiveNav();
});

// Load Courses to the grid
function loadCourses(filter) {
    const grid = document.getElementById('coursesGrid');
    
    if (!grid) return;
    
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

// Filter Courses when button clicked
function filterCourses(level) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    loadCourses(level);
}

// Navigation Setup
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scroll Setup
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Update Active Navigation
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll Functions
function scrollToCourses() {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function showCourses() {
    scrollToCourses();
}

function scrollToSection(section) {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Enroll in Course
function enrollCourse(courseTitle) {
    showNotification(`✓ Successfully enrolled in "${courseTitle}"! Check your email for access details.`);
}

// Open Resource Modal
function openResource(type) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    const resourceData = resources[type];
    
    if (!resourceData) {
        showNotification('❌ Resource not found');
        return;
    }
    
    modalTitle.textContent = type === 'datasets' ? '📁 Free Datasets' :
                           type === 'tools' ? '🛠️ Tools & Software' :
                           type === 'tutorials' ? '📚 Tutorials & Guides' :
                           type === 'code' ? '💻 Code Examples' :
                           type === 'certification' ? '🎓 Certification Prep' :
                           '👥 Community Forum';
    
    modalBody.innerHTML = resourceData.map(item => `
        <div class="resource-item">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" onclick="showNotification('✓ Opening link...')">
                🔗 Access Resource →
            </a>
        </div>
    `).join('');
    
    modal.classList.add('active');
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Show Notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Open Social Link
function openSocial(platform) {
    const urls = {
        twitter: 'https://twitter.com',
        linkedin: 'https://www.linkedin.com',
        github: 'https://github.com',
        youtube: 'https://www.youtube.com'
    };
    
    if (urls[platform]) {
        showNotification(`✓ Opening ${platform}...`);
        setTimeout(() => {
            window.open(urls[platform], '_blank');
        }, 500);
    }
}

// Submit Contact Form
function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    if (!name || !email || !subject || !message) {
        showNotification('❌ Please fill in all fields');
        return;
    }
    
    showNotification(`✓ Thank you ${name.value}! Your message has been sent. We'll respond to ${email.value} soon.`);
    
    document.getElementById('contactForm').reset();
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.course-card, .resource-card, .feature-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
    });
    
    setTimeout(() => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// Run animation after courses load
setTimeout(animateOnScroll, 500);
