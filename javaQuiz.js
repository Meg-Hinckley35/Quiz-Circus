var quizContainer = document.getElementById('quiz');
var timer = document.querySelector('.timer');


function buildQuiz() {
    const output = [];
    myQuestions.forEach(
        (currentQuestion) => {
            const answers = [a, b, c, d];
            for (letter in currentQuestion.answers) {
                answers.push(
                    <label>
                        <input type="radio" name="questions${questionNumber}" value="${letter}"></input>
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>
                );
            }
            output.push(
                <div class="question"> ${currentQuestion} </div>,
            <div class="answers"> ${answers.join('')} </div>,
        );
}
    );
quizContainer.innerHTML = output.join('');
};

function showResults() { };

buildQuiz();

startButton.addEventListener('click', startQuiz);
startQuiz() {
    timer = 120;
};
const myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers'
        },
        correctAnswer: "c"
    },
    {
        question: "The condition in an if / else statement is enclosed with ________.",
        answers: {
            a: 'quotes',
            b: 'curly brackets',
            c: 'parenthesis',
            d: 'square brackets'
        },
        correctAnswer: "b"
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        answers: {
            a: 'numbers and strings',
            b: 'other arrays',
            c: 'booleans',
            d: 'all of the above'
        },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parenthesis'
        },
        correctAnswer: "c"
    },
    {
        question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        answers: {
            a: 'JavaScript',
            b: 'terminal/bash',
            c: 'for loops',
            d: 'console.log'
        },
        correctAnswer: "d"
    },
];



var timerEl = document.getElementById('countdown');
var clockEl = document.getElementById('clock');

var message = "Time's Up."

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' time remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' time remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 60000);
};

countdown();
submitButton.addEventListener('click', showResults);
