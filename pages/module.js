import { course } from "../data/course.js";

export function renderModule(app) {
  const id = window.location.hash.split("-")[1];

  const module = course.modules.find(m => m.id === id);

  app.innerHTML = `
    <div class="navbar">${module.title}</div>
    <div class="container">

      <div class="sidebar">
        ${module.lessons.map(l => `
          <div class="card">
            <a href="#lesson-${module.id}-${l.id}" style="color:white;">
              ${l.title}
            </a>
          </div>
        `).join("")}
      </div>

      <div class="content">
        <h2>Select a lesson</h2>
      </div>

    </div>
  `;
}
