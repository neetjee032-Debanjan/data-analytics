import { course } from "./data/course.js";
import { renderHome } from "./pages/home.js";
import { renderModule } from "./pages/module.js";
import { renderLesson } from "./pages/lesson.js";

const app = document.getElementById("app");

function router() {
  const hash = window.location.hash;

  if (!hash || hash === "#home") {
    renderHome(app, course);
    return;
  }

  if (hash.startsWith("#module-")) {
    const moduleId = hash.replace("#module-", "");
    renderModule(app, course, moduleId);
    return;
  }

  if (hash.startsWith("#lesson-")) {
    const parts = hash.replace("#lesson-", "").split("-");
    const moduleId = parts[0];
    const lessonId = parts[1];

    renderLesson(app, course, moduleId, lessonId);
    return;
  }
}

window.addEventListener("hashchange", router);
router();
