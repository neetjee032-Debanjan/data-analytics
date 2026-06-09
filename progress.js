export function getProgress() {
  return JSON.parse(localStorage.getItem("nm_progress") || "{}");
}

export function saveProgress(progress) {
  localStorage.setItem("nm_progress", JSON.stringify(progress));
}

export function markPageComplete(moduleId, lessonId, pageIndex) {
  const progress = getProgress();

  if (!progress[moduleId]) progress[moduleId] = {};
  if (!progress[moduleId][lessonId]) progress[moduleId][lessonId] = [];

  if (!progress[moduleId][lessonId].includes(pageIndex)) {
    progress[moduleId][lessonId].push(pageIndex);
  }

  saveProgress(progress);
}
