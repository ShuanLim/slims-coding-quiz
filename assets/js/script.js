// timer counts down from 75 seconds
var seconds = 75;
var time;

// questions
var quizQuestions = document.querySelector("#answer-list")
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

  // the quiz stops when time expires
  if (seconds < 0) {
    stopQuiz();
  }
}


// quiz questions 

var totalQuestions = [];

function question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;

};


var question1 = newQuestion("Commonly used data types DO NOT Include:", ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"], 3);
var question2 = newQuestion("The condition in an if/else statement is enclosed with _______.", ["1. Parenthesis", "2. Curly Brackets", "3. Quotes", "4. Square Brackets"], 1);
var question3 = newQuestion("Arrays in JavaScript can be used to store _______.", ["1. Numbers And Strings", "2. Other Arrays", "3. Booleans", "4. All Of The Above"], 4);
var question4 = newQuestion("String values must be enclosed within _______ when being assigned to variables.", ["1. Curly Brackets", "2. Parenthesis", "3. Commas", "4. Quotes"], 2);
var question5 = newQuestion("A very useful tool used during development and debugging for printing content to the debugger is:", ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. console.log"], 4);




/* filler code to clear the time variable. Maybe write some code here to get the
  user's name, display their score, and display a highscores table.
*/
function stopQuiz() {
  clearTimeout(time);
  document.getElementById("timer").innerHTML = "0";
}
