//get the element identified by 'start-btn' and reassign it as a variable
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
//get element identified by 'question-container' and reassign it as a variable
var questionContainer = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answersElement = document.getElementById('answer-buttons')
var curentQuestionIndex, randomQuestions
var questionBank = [
    {
        question:"Commonly used data types DO NOT include?",
        answers: [
            // "strings",
            // "booleans",
            // "alerts",
            // "numbers",
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false }, 
        ]
    },
    {
        question:"String values must be enclosed within___when being assigned to variables?",
        answers: [
            // "commas",
            // "curly brackets",
            // "quotes",
            // "parenthesis",
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'parenthesis', correct: false }, 
        ]
        // correct: "quotes"
    },
    {
        question:"Arrays in JavaScript can be used to store_____?",
        answers: [
            // "numbers and strings",
            // "other arrays",
            // "booleans",
            // "all of the above",
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true }, 
        ]
        // correct: "all of the above"
    },
    {
        question:"The conditional in an if/else statement is enclosed with_____?",
        answers: [
            // "quotes",
            // "curly brackets",
            // "parenthesis",
            // "square brackets",
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'parenthesis', correct: true },
            { text: 'square brackets', correct: false }, 
        ]
        //correct: "parenthesis"
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            // "JavaScript",
            // "terminal/bash",
            // "for loops",
            // "console.log",
            { text: 'Javascript', correct: false },
            { text: 'terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: true}, 
        ]
        // correct: "console.log"
    },
];
var time = 60;
var score = 0;
var timeSet = document.getElementById("timer");

//start and next button event listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    curentQuestionIndex++;
    setNextQuestion();
})

// display timer
var timerId;
function startTimer() {
    timerId = setInterval(timer, 1000);
    timeSet.textContent = time;
}
function timer () {
    time--;
    timeSet.textContent = time
    if (time === 0) {
        //end quiz function
        inputScore();
    }
}

function startQuiz() {
    startTimer();
    startButton.classList.add('hide');
    //shuffles questions and randomizes question bank array upon start
    randomQuestions = questionBank.sort(() => Math.random - .5);
    curentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    //call Next Question Function
    setNextQuestion();
}

function setNextQuestion() {
    //display random question from questionBank array
    resetState();
    showQuestion(randomQuestions[curentQuestionIndex]);
}


// function that will display question from questionBank array
function showQuestion(question) {
    questionElement.innerText = question.question;
    //loop through answers and populate the answer-button element 
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        //take event in as a parameter
        button.addEventListener('click', selectAnswer);
        answersElement.appendChild(button);
        
    });


}
//reset state after every question
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answersElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if (randomQuestions.length > curentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    // add the next button after question is answered
    nextButton.classList.remove('hide');


}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
//input highscore
function inputScore() {

}

























// var startScreen = document.getElementById("startScreen");
// var gameScreen = document.getElementById("gameScreen");
// var endScreen = document.getElementById("endScreen");
// var startButton = document.getElementById("startButton");
// var firstQuestion = document.getElementById("firstQuestion");
// var firstAnswer = document.getElementById("firstAnswer");
// var secondQuestion = document.getElementById("secondQuestion");
// var secondAnswer = document.getElementById("secondAnswer");
// var thirdQuestion = document.getElementById("thirdQuestion");
// var thirdAnswer = document.getElementById("thirdAnswer");
// var fourthQuestion = document.getElementById("fourthQuestion");
// var fourthAnswer = document.getElementById("fourthAnswer");
// var fifthQuestion = document.getElementById("fifthQuestion");
// var fifthAnswer = document.getElementById("fifthAnswer");

// var currentQuestion = 0;
// var time = 60;
// var score = 0;
// var timeSet = document.getElementById("timer");
// var questionBank = [
//     {
//         question:"Commonly used data types DO NOT include?",
//         answers: [
//             "strings",
//             "booleans",
//             "alerts",
//             "numbers",
//         ],
//         correct: "alerts"
//     },
//     {
//         question:"String values must be enclosed within___when being assigned to variables?",
//         answers: [
//             "commas",
//             "curly brackets",
//             "quotes",
//             "parenthesis",
//         ],
//         correct: "quotes"
//     },
//     {
//         question:"Arrays in JavaScript can be used to store_____?",
//         answers: [
//             "numbers and strings",
//             "other arrays",
//             "booleans",
//             "all of the above",
//         ],
//         correct: "all of the above"
//     },
//     {
//         question:"The conditional in an if/else statement is enclosed with_____?",
//         answers: [
//             "quotes",
//             "curly brackets",
//             "parenthesis",
//             "square brackets",
//         ],
//         correct: "parenthesis"
//     },
//     {
//         question:"A very useful tool used during development and debugging for printing content to the debugger is:",
//         answers: [
//             "JavaScript",
//             "terminal/bash",
//             "for loops",
//             "console.log",
//         ],
//         correct: "console.log"
//     },
// ];

// // display timer
// var timerId;
// function startTimer() {
//     timerId = setInterval(timer, 1000);
//     timeSet.textContent = time;
// }
// function timer () {
//     time--;
//     timeSet.textContent = time
//     if (time === 0) {
//         //end quiz function
//         endScreen();
//     }
// }

// function displayQuestionsAnwers() {
//     gameScreen.innerHTML = "";
//     gameScreen.textContent = questionBank[currentQuestion].question;
//     for (let i = 0; i < questionBank[currentQuestion].answers.length; i++) {
//      var button = document.createElement("button");   
//      button.textContent = questionBank[currentQuestion].answers[i];
//      gameScreen.append(button);   
//      button.setAttribute("value", questionBank[currentQuestion].answers[i]);
//     }
// }


// // function checkAnswer() {
// //     if (this.value === questionBank[currentQuestion].answers)
// //     {
// //         console.log("correct");
// //     } else {
// //         console.log("incorrect");
// //     }
// //     currentQuestion++;
// //     displayQuestionsAnwers();
// //     if (currentQuestion === questionBank.length) {
// //         console.log("end quiz");
// //         //call end endScreen function
// //     } else {
// //         displayQuestionsAnwers();
// //     }

// // }

// console.log(questionBank[currentQuestion].question)
// startButton.addEventListener("click", function() {
//     gameScreen.classList.remove("hide");
//     startScreen.classList.add("hide");
//     displayQuestionsAnwers();
//     startTimer();
// });
