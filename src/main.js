import { questions } from "./questions.js";

let currentQuestions = [];

function getRandomQuestions(difficulty) {
    let selectedQuestions = [...questions[difficulty]];
    selectedQuestions.sort(() => Math.random() - 0.5);
    return selectedQuestions.slice(0, 20);
}

function displayQuiz(questionsList) {
    currentQuestions = questionsList;
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    questionsList.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        let optionsHTML = "";
        q.options.forEach((option) => {
            optionsHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${option}">
                    ${option}
                </label><br>
            `;
        });

        questionElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
            ${optionsHTML}
        `;
        quizContainer.appendChild(questionElement);
    });

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Valider";
    submitBtn.addEventListener("click", checkAnswers);
    quizContainer.appendChild(submitBtn);
}

function checkAnswers() {
    const selectedAnswers = document.querySelectorAll("input[type=radio]:checked");
    let score = 0;

    selectedAnswers.forEach((answer) => {
        const questionIndex = parseInt(answer.name.replace("q", ""), 10);
        const correctAnswer = currentQuestions[questionIndex].answer;
        if (answer.value === correctAnswer) {
            score++;
        }
    });

    alert(`Votre score : ${score}/${currentQuestions.length}`);
}

let effect = VANTA.NET({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xaee370,
    backgroundColor: 0xfcf8f1,
    points: 20.0,
    maxDistance: 27.0,
    spacing: 17.0,
});

document.addEventListener("DOMContentLoaded", () => {
    const btnQuizz = document.getElementById("btnQuizz");
    const btnCours = document.getElementById("btnCours");
    const buttonsBox = document.getElementById("buttonsBox");
    const quizOptions = document.getElementById("quizOptions");
    const btnBack = document.getElementById("btnBack");
    const quizContainer = document.getElementById("quiz");

    btnQuizz.addEventListener("click", () => {
        buttonsBox.style.display = "none";
        quizOptions.style.display = "flex";
        quizContainer.innerHTML = ""; // Nettoie l'ancien quiz si relancé
    });

    btnBack.addEventListener("click", () => {
        quizOptions.style.display = "none";
        buttonsBox.style.display = "block";
        quizContainer.innerHTML = ""; // Nettoie le quiz au retour
    });

    function changeBackground(color, bgColor) {
        effect.destroy();
        effect = VANTA.NET({
            el: "#background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: color,
            backgroundColor: bgColor,
            points: 20.0,
            maxDistance: 27.0,
            spacing: 17.0,
        });
    }

    document.getElementById("btnEasy").addEventListener("click", () => {
        displayQuiz(getRandomQuestions("easy"));
        changeBackground(0x6fe374, 0xf1fcf1);
    });

    document.getElementById("btnMedium").addEventListener("click", () => {
        displayQuiz(getRandomQuestions("medium"));
        changeBackground(0xe3e06f, 0xfcfbf1);
    });

    document.getElementById("btnHard").addEventListener("click", () => {
        displayQuiz(getRandomQuestions("hard"));
        changeBackground(0xe36f6f, 0xfcf1f1);
    });

  btnBack.addEventListener("click", () => {
      changeBackground(0xaee370, 0xfcf8f1);
  });
});