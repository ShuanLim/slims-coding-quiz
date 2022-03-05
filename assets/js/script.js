// timer counts down from 75 seconds
var seconds = 5;
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

  // the quiz stops when time expires
  if (seconds < 0) {
    stopQuiz();
  }
}

/* filler code to clear the time variable. Maybe write some code here to get the
  user's name, display their score, and display a highscores table.
*/
function stopQuiz() {
  clearTimeout(time);
  document.getElementById("timer").innerHTML = "0";
  alert("You ran out of time! Let's see how you did.");
}


