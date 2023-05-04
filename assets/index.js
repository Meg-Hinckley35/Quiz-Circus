const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

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
    // this will tell us what question number we are on out of how many
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

   // this will run through the questions based on their location in our question array 
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;
    
   // this will loop through the answer choices based on their given number
   choices.forEach( choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number]; 
   });
   // gets rid of old question and get a new one
   availableQuestions.splice(questionIndex, 1);
   // correct answers are given the value of true
   correctAnswers = true;
};
// this code will listen for a click on the choices
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!correctAnswers) return;
        // here we target what is clicked and read its data number
        correctAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // this code will give a class of 'correct' if the data number is true and 'incorrect' if the data number is false
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect';
            // this will give points to correct answers
            if(classToApply === 'correct') {
                incrementScore(CORRECT_POINTS);
            };

        // we are adding the class here    
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () =>{
            // now we remove the class after 1000 milliseconds
        selectedChoice.parentElement.classList.remove(classToApply);
        getNextQuestion();
        }, 1000);
        
        // this will count and keep track of our score
       incrementScore = num => {
        score += num;
        scoreText.innerText = score;
       };

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
