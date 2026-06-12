import { quizzes } from "../data/quizzes.js";
import { renderQuiz } from "../components/Quiz.js";

export function openQuiz(container,id){

  if(!quizzes[id]){

    container.innerHTML =
      "<h2>No quiz available.</h2>";

    return;
  }

  renderQuiz(
    container,
    quizzes[id]
  );
}
