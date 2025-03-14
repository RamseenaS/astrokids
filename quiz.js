const quizData = [
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What is the largest planet in our Solar System?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], answer: "Jupiter" },
    { question: "How many moons does Earth have?", options: ["1", "2", "5", "0"], answer: "1" },
    { question: "Who was the first person to walk on the Moon?", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"], answer: "Neil Armstrong" },
    { question: "What is the name of the galaxy we live in?", options: ["Andromeda", "Whirlpool", "Milky Way", "Sombrero"], answer: "Milky Way" },
    { question: "Which planet has the most rings?", options: ["Mars", "Saturn", "Neptune", "Uranus"], answer: "Saturn" },
    { question: "What is the Sun primarily made of?", options: ["Iron", "Oxygen", "Helium & Hydrogen", "Carbon"], answer: "Helium & Hydrogen" },
    { question: "Which is the smallest planet in the Solar System?", options: ["Mercury", "Mars", "Venus", "Pluto"], answer: "Mercury" },
    { question: "What is the name of NASA’s most famous space telescope?", options: ["Voyager", "Hubble", "Kepler", "James Webb"], answer: "Hubble" },
    { question: "How long does Earth take to orbit the Sun?", options: ["365 days", "24 hours", "30 days", "10 years"], answer: "365 days" },
    { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { question: "What force keeps planets in orbit around the Sun?", options: ["Magnetism", "Gravity", "Electricity", "Friction"], answer: "Gravity" },
    { question: "What is the name of the first satellite launched into space?", options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Hubble"], answer: "Sputnik 1" },
    { question: "Which planet is known for its Great Red Spot?", options: ["Mars", "Neptune", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "What is the coldest planet in the Solar System?", options: ["Earth", "Neptune", "Pluto", "Uranus"], answer: "Neptune" },
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");

function loadQuiz() {
    let quizHTML = "";
    quizData.forEach((q, index) => {
        quizHTML += `
            <div class="question">
                <p><strong>${index + 1}. ${q.question}</strong></p>
                <div class="options">
                    ${q.options.map(option => `
                        <label data-index="${index}" data-option="${option}">
                            <input type="radio" name="question${index}" value="${option}"> ${option}
                        </label>
                    `).join("")}
                </div>
            </div>
        `;
    });
    quizContainer.innerHTML = quizHTML;
}

function calculateScore() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        const options = document.querySelectorAll(`[data-index="${index}"]`);
        
        options.forEach(optionLabel => {
            optionLabel.classList.remove("correct", "wrong"); // Reset classes
            const option = optionLabel.getAttribute("data-option");

            if (option === q.answer) {
                optionLabel.classList.add("correct"); // Highlight correct answer
            }

            if (selected && selected.value === option) {
                if (option === q.answer) {
                    score += 2; // Correct answer
                } else {
                    optionLabel.classList.add("wrong"); // Wrong answer
                }
            }
        });
    });

    scoreDisplay.innerText = `${score}/30`;
    resultContainer.style.display = "block";
}

submitButton.addEventListener("click", calculateScore);
restartButton.addEventListener("click", () => {
    document.getElementById("quiz-form").reset();
    resultContainer.style.display = "none";
    loadQuiz();
});

loadQuiz();
