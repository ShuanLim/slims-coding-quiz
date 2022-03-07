const clockText = document.querySelector("#timer");
const scoreText = document.querySelector("#score");
const question = document.querySelector("#question");
const answers = Array.from(document.querySelectorAll(".choice-text"));

let questionCounter = 0;
let questionsPool = [];
let currentQuestion = {};
let acceptingAnswers = true;
let time = 75;

// timer counts down from 75 seconds
var seconds = 75;
var clock;

// the time function
function quizTimer() {
  // display the live countdown on the webpage
  document.getElementById("timer").innerHTML = '<h1 class="timer-main-text">Time: ' + seconds;

  seconds -= 1;

  /* after every 1000 milliseconds, call the quizTimer function again to force
    itself to decrement the seconds variable by 1, then setTimeout refreshes
    element of the page to a new instance of that timer.
  */
  clock = setTimeout("quizTimer()", 1000);

  // the quiz stops when time expires
  if (seconds < 0) {
    stopQuiz();
  }
};

// clear the timer variable.
function stopQuiz() {
  clearTimeout(clock);
  document.getElementById("timer").innerHTML = "Time: " + seconds;
}

let questions = [
    {
        question: "Commonly used data types DO Not Include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3,
    },
    {
        question:
            "The condition in an if / else statement is enclosed with __________.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "paranthesis",
        choice4: "square brackets",
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4,
    },
    {
        question: "Strings values must be enclosed with _____ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "paranthesis",
        answer: 3,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4,
    }
];

const MAX_QUESTIONS = 5;

startQuiz = () => {
    questionCounter = 0;
    questionsPool = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(questionsPool.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', time);

        return location.assign('./end.html');
    }

    questionCounter++;

    const questionsIndex = Math.floor(Math.random() * questionsPool.length);
    currentQuestion = questionsPool[questionsIndex];
    question.innerText = currentQuestion.question;

    answers.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    questionsPool.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

answers.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        if (selectedAnswer != currentQuestion.answer) {
          time -= 15;
          scoreText.innerText = "Score: " + time;
        }

        getNewQuestion();
    })
})

quizTimer();
startQuiz();
