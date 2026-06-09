import { markPageComplete, getProgress } from "../progress.js";
import { Simulations } from "../sims/index.js";

export function renderLesson(app, courseData, moduleId, lessonId, pageIndex = 0) {

  const module = courseData.modules.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);

  if (!module || !lesson) {
    app.innerHTML = "<h2>Lesson not found</h2>";
    return;
  }

  const page = lesson.pages[pageIndex];

  const progress = getProgress();
  const completedPages = progress?.[moduleId]?.[lessonId] || [];
  const isCompleted = completedPages.includes(pageIndex);

  // ---------------- UI ----------------
  app.innerHTML = `
    <div class="navbar">
      📘 ${lesson.title}
    </div>

    <div class="container">

      <!-- SIDEBAR -->
      <div class="sidebar">
        <h3>Pages</h3>

        ${lesson.pages.map((p, i) => `
          <div class="card ${i === pageIndex ? "active" : ""}">
            <a href="#lesson-${moduleId}-${lessonId}-${i}"
               style="color:white;text-decoration:none;">
              ${i + 1}. ${p.title}
            </a>
          </div>
        `).join("")}

      </div>

      <!-- CONTENT -->
      <div class="content">

        <h1>${page.title}</h1>

        <div style="line-height:1.7; white-space:pre-line;">
          ${page.content}
        </div>

        <div style="margin-top:20px;">
          ${
            !isCompleted
              ? `<button id="completeBtn">Mark as Complete</button>`
              : `<span style="color:#22c55e;">Completed ✔</span>`
          }
        </div>

        <!-- SIMULATION AREA -->
        <div id="sim" style="margin-top:25px;"></div>

      </div>
    </div>
  `;

  // ---------------- NAV ----------------
  window.goPage = (i) => {
    window.location.hash = `lesson-${moduleId}-${lessonId}-${i}`;
  };

  // ---------------- COMPLETE ----------------
  const btn = document.getElementById("completeBtn");
  if (btn) {
    btn.onclick = () => {
      markPageComplete(moduleId, lessonId, pageIndex);
      renderLesson(app, courseData, moduleId, lessonId, pageIndex);
    };
  }

  // ---------------- SIMULATION ENGINE ----------------
  try {

    const simContainer = document.getElementById("sim");

    if (!simContainer) return;

    const key = (lesson.simulation || "").trim().toLowerCase();

    const sim = Simulations?.[key];

    if (typeof sim === "function") {
      sim(simContainer);
    } else {
      simContainer.innerHTML = `
        <div style="color:#ff4d4d; padding:10px;">
          <b>Simulation not found</b><br/>
          Key: ${key}
        </div>
      `;
    }

  } catch (err) {
    console.error("Simulation crash:", err);

    const simContainer = document.getElementById("sim");
    if (simContainer) {
      simContainer.innerHTML = `
        <div style="color:red;">
          <b>Simulation runtime error</b>
        </div>
      `;
    }
  }
}
