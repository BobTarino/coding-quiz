var startScreen = document.getElementById("startScreen");
var gameScreen = document.getElementById("gameScreen");
var endScreen = document.getElementById("endScreen");
var startButton = document.getElementById("startButton");
var questionDisplay = document.getElementById("questionDisplay");
var answerDisplay = document.getElementById("answerDisplay");
var currentQuestion = 0;
var questionBank = [
    {
        question:"Commonly used data types DO NOT include?",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers",
        },
        correct: "d"
    },
    {
        question:"Commonly used data types DO NOT include?",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers",
        },
        correct: "d"
    },
    {
        question:"Commonly used data types DO NOT include?",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers",
        },
        correct: "d"
    }
];

function displayQuestionsAnwers() {
    questionDisplay.textContent = questionBank[currentQuestion].question;
}
console.log(questionBank[currentQuestion].question)
startButton.addEventListener("click", function() {
    gameScreen.classList.remove("hide");
    startScreen.classList.add("hide");
    displayQuestionsAnwers();
});
