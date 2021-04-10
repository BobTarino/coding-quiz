var startScreen = document.getElementById("startScreen");
var gameScreen = document.getElementById("gameScreen");
var endScreen = document.getElementById("endScreen");
var startButton = document.getElementById("startButton");
// var questionDisplay = document.getElementById("questionDisplay");
// var answerDisplay = document.getElementById("answerDisplay");
var currentQuestion = 0;
var time = 60;
var score = 0;
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
        question:"String values must be enclosed within___when being assigned to variables?",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis",
        ],
        correct: "quotes"
    },
    {
        question:"Arrays in JavaScript can be used to store_____?",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        correct: "all of the above"
    },
    {
        question:"The conditional in an if/else statement us enclosed with_____?",
        answers: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets",
        ],
        correct: "parenthesis"
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log",
        ],
        correct: "console.log"
    },
];
// display timer
var timerId;
function startTimer() {
    timerId = setInterval(timer, 1000);
    timeSet.textContent = time;
}
function timer () {
    time--;
    timeSet.textContent = time
    if (time <= 0) {
        //end quiz function
        endScreen();
    }
}

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

//console.log(questionBank[currentQuestion].question)
startButton.addEventListener("click", function() {
    gameScreen.classList.remove("hide");
    startScreen.classList.add("hide");
    displayQuestionsAnwers();
    startTimer();
});
