const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let correctAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Making a questions array to hold all of our questions and answers.
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

// Game function, start with first question, start with 0 score, and set questions array.
startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNextQuestion();
};

// creating a function to call the next question
getNextQuestion = () =>{
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;
    
   choices.forEach( choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number]; 
   });
   // gets rid of old question and get a new one
   availableQuestions.splice(questionIndex, 1);

   correctAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!correctAnswers) return;

        correctAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        getNextQuestion();

    });
});

startQuiz();






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
