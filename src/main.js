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

    const backSessionBtn = document.createElement("button");
    backSessionBtn.id = "btnBackSession";
    backSessionBtn.textContent = "Retour";
    backSessionBtn.addEventListener("click", () => {
        quizContainer.innerHTML = "";
        quizOptions.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    quizContainer.appendChild(backSessionBtn);

    questionsList.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        const questionText = document.createElement("p");
        questionText.innerHTML = `<strong>Question ${index + 1} :</strong> ${q.question}`;
        questionElement.appendChild(questionText);

        if (q.image) {
            const img = document.createElement("img");
            img.src = `./assets/${q.image}`; 
            img.alt = "Illustration de la question";
            img.classList.add("question-image");
            questionElement.appendChild(img);
        }

        const answersContainer = document.createElement("div");
        answersContainer.classList.add("answers");

        q.options.forEach((option, optionIndex) => {
            const inputId = `q${index}a${optionIndex}`; // Générer un id unique

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${index}`;
            input.value = option;
            input.id = inputId; // Assigner l'id

            const label = document.createElement("label");
            label.setAttribute("for", inputId); // Lier le label à l'input
            label.textContent = option;

            answersContainer.appendChild(input);
            answersContainer.appendChild(label);
        });

        questionElement.appendChild(answersContainer);
        quizContainer.appendChild(questionElement);
    });

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Valider";
    submitBtn.id = "validateBtn";
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
    const title = document.querySelector("h1");
    const backIcon = btnBack.querySelector("svg path");

    function changeBackground(color, bgColor, textColor) {
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

        title.style.color = textColor;
        backIcon.setAttribute("fill", textColor);
    }

    btnQuizz.addEventListener("click", () => {
        buttonsBox.style.display = "none";
        quizOptions.style.display = "flex";
        quizContainer.innerHTML = "";
    });

    btnBack.addEventListener("click", () => {
        quizOptions.style.display = "none";
        buttonsBox.style.display = "block";
        quizContainer.innerHTML = "";
        changeBackground(0xaee370, 0xfcf8f1, "#cfeca6");
    });

    function startQuiz(difficulty, color, bgColor, textColor) {
        document.body.style.overflow = "auto"; // Autoriser le scroll
        quizOptions.style.display = "none";
        displayQuiz(getRandomQuestions(difficulty));
        changeBackground(color, bgColor, textColor);
    }

    document.getElementById("btnEasy").addEventListener("click", () => {
        startQuiz("easy", 0x6fe374, 0xf1fcf1, "#71e376");
    });

    document.getElementById("btnMedium").addEventListener("click", () => {
        startQuiz("medium", 0xe3e06f, 0xfcfbf1, "#e6e27d");
    });

    document.getElementById("btnHard").addEventListener("click", () => {
        startQuiz("hard", 0xe36f6f, 0xfcf1f1, "#e68080");
    });
});