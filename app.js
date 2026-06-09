import { course } from "./data/course.js";

import { renderHome } from "./pages/home.js";
import { renderModule } from "./pages/module.js";
import { renderLesson } from "./pages/lesson.js";

const app = document.getElementById("app");

function router() {
  const hash = window.location.hash;

  if (!hash || hash === "#home") {
    renderHome(app, course);
  }

  else if (hash.startsWith("#module")) {
    renderModule(app, course);
  }

  else if (hash.startsWith("#lesson")) {
    renderLesson(app, course);
  }
}

window.addEventListener("hashchange", router);
router();
