export function renderQuiz(container, questions) {

  let score = 0;

  container.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Quiz Assessment";
  container.appendChild(title);

  const questionBlocks = [];

  questions.forEach((q, index) => {

    const div = document.createElement("div");

    div.style.marginBottom = "25px";
    div.style.padding = "15px";
    div.style.borderRadius = "12px";
    div.style.background = "#1e293b";

    div.innerHTML = `
      <h3>Q${index + 1}. ${q.question}</h3>

      ${q.options.map((op, i) => `
        <label
          style="
            display:block;
            margin:8px 0;
            cursor:pointer;
          "
        >
          <input
            type="radio"
            name="q${index}"
            value="${i}"
          >
          ${op}
        </label>
      `).join("")}

      <div
        id="feedback-${index}"
        style="
          margin-top:12px;
          font-weight:bold;
        "
      ></div>
    `;

    container.appendChild(div);
    questionBlocks.push(div);

  });

  const submitBtn = document.createElement("button");

  submitBtn.textContent = "Submit Quiz";

  submitBtn.style.marginTop = "20px";
  submitBtn.style.padding = "10px 20px";

  container.appendChild(submitBtn);

  const resultBox = document.createElement("div");

  resultBox.style.marginTop = "25px";

  container.appendChild(resultBox);

  submitBtn.onclick = () => {

    score = 0;

    questions.forEach((q, index) => {

      const selected = container.querySelector(
        `input[name=q${index}]:checked`
      );

      const feedback =
        document.getElementById(
          `feedback-${index}`
        );

      if (!selected) {

        feedback.innerHTML = `
          <span style="color:#f59e0b;">
            ⚠ Not Answered
          </span>
        `;

        return;
      }

      const answer =
        Number(selected.value);

      if (answer === q.answer) {

        score++;

        feedback.innerHTML = `
          <span style="color:#22c55e;">
            ✔ Correct
          </span>
        `;

      } else {

        feedback.innerHTML = `
          <span style="color:#ef4444;">
            ✘ Incorrect
          </span>
          <br>
          Correct Answer:
          ${q.options[q.answer]}
          ${
            q.explanation
              ? `<br><small>${q.explanation}</small>`
              : ""
          }
        `;
      }

    });

    const percent = Math.round(
      (score / questions.length) * 100
    );

    let grade = "F";

    if (percent >= 90) grade = "A";
    else if (percent >= 80) grade = "B";
    else if (percent >= 70) grade = "C";
    else if (percent >= 60) grade = "D";

    resultBox.innerHTML = `
      <div
        style="
          margin-top:20px;
          padding:20px;
          border-radius:12px;
          background:#0f172a;
        "
      >
        <h2>
          Final Score:
          ${score}/${questions.length}
        </h2>

        <h3>
          Percentage:
          ${percent}%
        </h3>

        <h3>
          Grade:
          ${grade}
        </h3>
      </div>
    `;

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });

  };

}
