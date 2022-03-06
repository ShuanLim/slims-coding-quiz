function quizStart(questions, quizContainer)

// questions for the quiz 
const quizQuestions = [{
  question: "Commonly used data types DO NOT Include:",
  answers: {
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers"
  },
  correctAnswer: "c"
},
{
  question: "The condition in an if / else statement is enclosed with ______:",
  answers: {
    a: "quotes",
    b: "curly brackets",
    c: "parenthesis",
    d: "square brackets"
  },
  correctAnswer: "c"
},
{
  question: "Arrays in JavaScript can be used to store ______:",
  answers: {
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above"
  },
  correctAnswer: "d"
},
{
  question: "String values must be enclosed within ______ when being assigned to variables.",
  answers: {
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parenthesis"
  },
  correctAnswer: "c"
},
{
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: {
    a: "JavaScript",
    b: "terminal/bash",
    c: "for loops",
    d: "console.log"
  },
  correctAnswer: "d"
,
}];


// timer counts down from 75 seconds
var seconds = 75;
var time;

// the time function
function quizTimer() {
  // display the live countdown on the webpage
  document.getElementById("timer").innerHTML = "Time: " + seconds;


  seconds -= 1;

  /* after every 1000 milliseconds, call the quizTimer function again to force
    itself to decrement the seconds variable by 1, then setTimeout refreshes
    element of the page to a new instance of that timer.
  */
  time = setTimeout("quizTimer()", 1000);

  // quiz stops when time expires
  if (seconds < 0) {
    stopQuiz();
  }
}




function stopQuiz() {
  clearTimeout(time);
  document.getElementById("timer").innerHTML = "0";
}
