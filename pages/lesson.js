import { markPageComplete, getProgress } from "../progress.js";

export function renderLesson(app, course, moduleId, lessonId, pageIndex = 0) {

  const module = course.modules.find(m => m.id === moduleId);
  const lesson = module.lessons.find(l => l.id === lessonId);

  const page = lesson.pages[pageIndex];

  const progress = getProgress();
  const completed = progress?.[moduleId]?.[lessonId] || [];

  const isCompleted = completed.includes(pageIndex);

  app.innerHTML = `
    <div class="navbar">${lesson.title}</div>

    <div class="container">

      <!-- SIDEBAR -->
      <div class="sidebar">

        <h3>Pages</h3>

        ${lesson.pages.map((p, i) => `
          <div class="card" style="opacity:${i === pageIndex ? 1 : 0.6}">
            <a href="#lesson-${moduleId}-${lessonId}-${i}" style="color:white;">
              ${i + 1}. ${p.title}
            </a>

            ${completed.includes(i) ? "✔" : ""}
          </div>
        `).join("")}

      </div>

      <!-- CONTENT -->
      <div class="content">

        <h2>${page.title}</h2>

        <p style="white-space:pre-line; line-height:1.7;">
          ${page.content}
        </p>

        <div style="margin-top:20px;">
          ${!isCompleted ? `
            <button id="completeBtn">Mark as Complete</button>
          ` : `<span>✔ Completed</span>`}
        </div>

        <div style="margin-top:30px; display:flex; gap:10px;">

          ${pageIndex > 0 ? `
            <button onclick="go(${pageIndex - 1})">⬅ Previous</button>
          ` : ""}

          ${pageIndex < lesson.pages.length - 1 ? `
            <button onclick="go(${pageIndex + 1})">Next ➡</button>
          ` : `
            <button disabled>Lesson Completed 🎉</button>
          `}

        </div>

        <div style="margin-top:10px;">
          Page ${pageIndex + 1} / ${lesson.pages.length}
        </div>

      </div>
    </div>
  `;

  // Navigation
  window.go = (i) => {
    window.location.hash = `lesson-${moduleId}-${lessonId}-${i}`;
  };

  // Completion tracking
  const btn = document.getElementById("completeBtn");
  if (btn) {
    btn.onclick = () => {
      markPageComplete(moduleId, lessonId, pageIndex);
      renderLesson(app, course, moduleId, lessonId, pageIndex);
    };
  }
}
