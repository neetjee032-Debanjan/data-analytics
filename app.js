import { course } from "./data/course.js";
import { renderLesson } from "./pages/lesson.js";

const app = document.getElementById("app");

/* -----------------------------
   STATE (SAFE GLOBAL STATE)
------------------------------ */
let state = {
  moduleId: null,
  lessonId: null,
  pageIndex: 0
};

/* -----------------------------
   ROUTER
------------------------------ */
function router() {
  const hash = window.location.hash.replace("#", "");

  if (!hash) {
    renderHome();
    return;
  }

  const parts = hash.split("-");

  if (parts[0] === "lesson") {
    state.moduleId = parts[1];
    state.lessonId = parts[2];
    state.pageIndex = parseInt(parts[3] || "0");

    const module = getModule(state.moduleId);
    const lesson = getLesson(module, state.lessonId);

    if (!module || !lesson) {
      app.innerHTML = `
        <div style="padding:20px;">
          <h2>Content Not Found</h2>
          <button onclick="goHome()">Go Home</button>
        </div>
      `;
      return;
    }

    renderLesson(app, course, state.moduleId, state.lessonId, state.pageIndex);
  }
}

/* -----------------------------
   HOME PAGE (ALL MODULES SAFE RENDER)
------------------------------ */
function renderHome() {

  const modulesHTML = course.modules
    .map((module) => {

      const lessonCount = Array.isArray(module.lessons)
        ? module.lessons.length
        : 0;

      return `
        <div class="card" onclick="openModule('${module.id}')">
          <h3>${module.title}</h3>
          <p>${lessonCount} lessons</p>
        </div>
      `;
    })
    .join("");

  app.innerHTML = `
    <div class="navbar">
      🧠 Numerical Methods Learning Platform
    </div>

    <div style="padding:20px;">

      <h1>Welcome to Your Learning Lab</h1>

      <p>Deep structured learning + simulations + theory engine</p>

      <div class="progress">
        <div class="progress-bar" style="width:75%"></div>
      </div>

      <h2>Modules</h2>

      <div style="
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap:15px;
      ">
        ${modulesHTML}
      </div>

    </div>
  `;
}

/* -----------------------------
   OPEN MODULE (FULL SAFE VERSION)
------------------------------ */
window.openModule = function(moduleId) {

  const module = getModule(moduleId);

  if (!module) {
    app.innerHTML = `
      <div style="padding:20px;">
        <h2>Module Not Found</h2>
        <button onclick="goHome()">Go Home</button>
      </div>
    `;
    return;
  }

  const lessonsHTML = (module.lessons || [])
    .map((lesson) => `
      <div class="card" onclick="openLesson('${module.id}','${lesson.id}',0)">
        ${lesson.title}
      </div>
    `)
    .join("");

  app.innerHTML = `
    <div class="navbar">
      📘 ${module.title}
      <button style="float:right;" onclick="goHome()">Home</button>
    </div>

    <div class="container">

      <div class="sidebar">
        <h3>Lessons</h3>
        ${lessonsHTML}
      </div>

      <div class="content">
        <h1>${module.title}</h1>
        <p>Select a lesson to start learning</p>
      </div>

    </div>
  `;
};

/* -----------------------------
   LESSON NAVIGATION
------------------------------ */
window.openLesson = function(moduleId, lessonId, pageIndex = 0) {
  window.location.hash = `lesson-${moduleId}-${lessonId}-${pageIndex}`;
};

/* -----------------------------
   HOME BUTTON
------------------------------ */
window.goHome = function() {
  window.location.hash = "";
};

/* -----------------------------
   SAFE DATA HELPERS
------------------------------ */
function getModule(moduleId) {
  return course.modules.find(m => m.id === moduleId);
}

function getLesson(module, lessonId) {
  if (!module || !module.lessons) return null;
  return module.lessons.find(l => l.id === lessonId);
}

/* -----------------------------
   ROUTER EVENTS
------------------------------ */
window.addEventListener("hashchange", router);
window.addEventListener("load", router);

/* -----------------------------
   INITIAL LOAD
------------------------------ */
router();
