var startScreen = document.getElementById("startScreen");
var gameScreen = document.getElementById("gameScreen");
var endScreen = document.getElementById("endScreen");
var startButton = document.getElementById("startButton");
// var questionDisplay = document.getElementById("questionDisplay");
// var answerDisplay = document.getElementById("answerDisplay");
var currentQuestion = 0;
var time = 60;
var timeSet = document.getElementById("timer");
var questionBank = [
    {
        question:"Commonly used data types DO NOT include?",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers",
        ],
        correct: "numbers"
    },
    {
        question:"Why are we doing this to ourselves?",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers",
        ],
        correct: "numbers"
    },
    {
        question:"Commonly used data types DO NOT include?",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers",
        ],
        correct: "numbers"
    },
];

var timerId;
function startTimer() {
    timerId = setInterval(timer, 1000);
    timeSet.textContent = time;
}
//startTimer();

function displayQuestionsAnwers() {
    gameScreen.innerHTML = "";
    gameScreen.textContent = questionBank[currentQuestion].question;
    for (let index = 0; index < questionBank[currentQuestion].answers.length; index++) {
     var button = document.createElement("button");   
     button.textContent = questionBank[currentQuestion].answers[index];
     gameScreen.append(button);   
     button.setAttribute("value", questionBank[currentQuestion].answers[index]);
    }
    

}
function checkAnswer() {
    if (this.value === questionBank[currentQuestion].answers)
    {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
    currentQuestion++;
    displayQuestionsAnwers();
    if (currentQuestion === questionBank.length) {
        console.log("end quiz");
        //call end endScreen function
    } else {
        displayQuestionsAnwers();
    }
    

}
function timer () {
    time--;
    timeSet.textContent = time
    if (time <= 0) {
        //end quiz function
        endScreen();
    }
}

//console.log(questionBank[currentQuestion].question)
startButton.addEventListener("click", function() {
    gameScreen.classList.remove("hide");
    startScreen.classList.add("hide");
    displayQuestionsAnwers();
    startTimer();
});
