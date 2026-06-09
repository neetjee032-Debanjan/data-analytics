import { markPageComplete, getProgress } from "../progress.js";

export function renderLesson(app, courseData, moduleId, lessonId, pageIndex = 0) {

  const module = courseData.modules.find(m => m.id === moduleId);

  if (!module) {
    app.innerHTML = "<h2>Module not found</h2>";
    return;
  }

  const lesson = module.lessons.find(l => l.id === lessonId);

  if (!lesson) {
    app.innerHTML = "<h2>Lesson not found</h2>";
    return;
  }

  const page = lesson.pages[pageIndex];

  const progress = getProgress();
  const completedPages = progress?.[moduleId]?.[lessonId] || [];

  const isCompleted = completedPages.includes(pageIndex);

  app.innerHTML = `
    <div class="navbar">📘 ${lesson.title}</div>

    <div class="container">

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

      <div class="content">

        <h1>${page.title}</h1>

        <div style="white-space:pre-line; line-height:1.8;">
          ${page.content}
        </div>

        <div style="margin-top:20px;">
          ${
            !isCompleted
              ? `<button id="completeBtn">Mark as Complete</button>`
              : `<span style="color:#22c55e;">Completed ✔</span>`
          }
        </div>

        <div id="sim" style="margin-top:30px;"></div>

      </div>
    </div>
  `;

  window.goPage = (i) => {
    window.location.hash = `lesson-${moduleId}-${lessonId}-${i}`;
  };

  const btn = document.getElementById("completeBtn");
  if (btn) {
    btn.onclick = () => {
      markPageComplete(moduleId, lessonId, pageIndex);
      renderLesson(app, courseData, moduleId, lessonId, pageIndex);
    };
  }

  // -----------------------------
  // 🔥 BULLETPROOF SIMULATION LOADER
  // -----------------------------
  if (lesson.simulation) {

    const simContainer = document.getElementById("sim");

    // normalize key (THIS FIXES YOUR ISSUE)
    const rawKey = String(lesson.simulation);
    const key = rawKey.trim().toLowerCase();

    const fileMap = {
      "newton": "newton-raphson",
      "newton-raphson": "newton-raphson",
      "newtonraphson": "newton-raphson",

      "bisection": "bisection",
      "lagrange": "lagrange",
      "trapezoid": "trapezoid",
      "euler": "euler"
    };

    const fnMap = {
      "newton": "runNewton",
      "newton-raphson": "runNewton",
      "newtonraphson": "runNewton",

      "bisection": "runBisection",
      "lagrange": "runLagrange",
      "trapezoid": "runTrapezoid",
      "euler": "runEuler"
    };

    const fileName = fileMap[key];
    const fnName = fnMap[key];

    // DEBUG (VERY IMPORTANT)
    console.log("SIM KEY RAW:", rawKey);
    console.log("SIM KEY NORMALIZED:", key);
    console.log("FILE NAME:", fileName);
    console.log("FUNCTION:", fnName);

    if (!fileName || !fnName) {
      simContainer.innerHTML = `
        <div style="color:red;">
          <b>Simulation mapping error</b><br/>
          Raw: ${rawKey}<br/>
          Normalized: ${key}
        </div>
      `;
      return;
    }

    import(`../sims/${fileName}.js`)
      .then(module => {

        if (module[fnName]) {
          module[fnName](simContainer);
        } else {
          simContainer.innerHTML = "<p>Simulation function missing.</p>";
        }
      })
      .catch(err => {
        console.error(err);

        simContainer.innerHTML = `
          <div style="color:red;">
            <b>Failed to load simulation file</b><br/>
            File: sims/${fileName}.js<br/>
            Check deployment + filename
          </div>
        `;
      });
  }
}
