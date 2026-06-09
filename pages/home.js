export function renderHome(app, course) {
  app.innerHTML = `
    <div class="navbar">${course.title}</div>
    <div class="content">
      <h1>Welcome to Numerical Methods</h1>
      <p>Master computational mathematics with simulations.</p>

      ${course.modules.map(m => `
        <div class="card">
          <a href="#module-${m.id}" style="color:white;text-decoration:none;">
            ${m.title}
          </a>
        </div>
      `).join("")}
    </div>
  `;
}
