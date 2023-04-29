const question = document.getElementById("question");
const choices = Array.from(document.getElementByClassName("choice-text"));

let currentQuestion = {};
let correctAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: 'strings',
        choice2: 'booleans',
        choice3: 'alerts',
        choice4: 'numbers',
        correctAnswer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed with ________.",
        choice1: 'quotes',
        choice2: 'curly brackets',
        choice3: 'parenthesis',
        choice4: 'square brackets',
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        choice1: 'numbers and strings',
        choice2: 'other arrays',
        choice3: 'booleans',
        choice4: 'all of the above',
        answer: 4
    },
    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        choice1: 'commas',
        choice2: 'curly brackets',
        choice3: 'quotes',
        choice4: 'parenthesis',
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: 'JavaScript',
        choice2: 'terminal/bash',
        choice3: 'for loops',
        choice4: 'console.log',
        correctAnswer: 4
    }, 
]


// Constants
const CORRECT_POINTS = 10;
const MAX_QUESTIONS = 5;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

}


// startButton.addEventListener('click', startQuiz);
// startQuiz() {
//     timer = 120;
// };




// var timerEl = document.getElementById('countdown');
// var clockEl = document.getElementById('clock');

// var message = "Time's Up."

// function countdown() {
//     var timeLeft = 60;

//     var timeInterval = setInterval(function () {
//         if (timeLeft > 1) {
//             timerEl.textContent = timeLeft + ' time remaining';
//             timeLeft--;
//         } else if (timeLeft === 1) {
//             timerEl.textContent = timeLeft + ' time remaining';
//             timeLeft--;
//         } else {
//             timerEl.textContent = '';
//             clearInterval(timeInterval);
//             displayMessage();
//         }
//     }, 60000);
// };

// countdown();
// submitButton.addEventListener('click', showResults);
