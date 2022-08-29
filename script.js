//quiz questions 
var questions = [
  {
    Question: "Arrays in Javascript can be used to store ____.",
    Choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    Answer: "all of the above"
  },
  {
    Question: "The condition in an if / else statement is encloesd with ____.",
    Choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    Answer: "parentheses",
  },
  {
    Question: "A very useful tool used for development and debugging for printing content to the debugger is:",
    Choices: ["Jacascript", "terminal/bash", "console log", "for loops"],
    Answer: "console log",
  },
  {
    Question: "String values must be enclosed within ____ when being assigned to variables.",
    Choices: ["commas", "curly brackets", "quotes", "parentheses"],
    Answer: "quotes",
  },
  {
    Question: "Commonly used data types DO NOT include:",
    Choices: ["strings", "booleans", "alerts", "numbers"],
    Answer: "alerts"
  },
];

//string = data type
//array = collection of data types
// questions[1] questions[i]
//variables
var startChallenge = document.getElementById('#startChallenge');
var startButton = document.getElementById('#start-button');
var testQuestions = document.getElementById('#test-page');
var questions;
var choice1 = document.querySelector('choice1');
var choice2 = document.querySelector('choice2');
var choice3 = document.querySelector('choice3');
var choice4 = document.querySelector('choice4');
// TIMER variables
const Timer = document.getElementById('timer');
var clock; 
var timeStart = 100;
var timePenalty = 15;


//startQuiz function
function startQuiz() {
  startChallenge.classList.add('hide');
  test-page.classList.remove('hide');
  promptQuestions();
};

startButton.addEventListener("click", function(startQuiz) {
  document.querySelector('timer').textContent = timeStart;
  if (clock > 0){
    clock -= 1
    Timer.textContent = clock;
  } else {
    clearInterval(timer);
    endGame();
  }}
  );


function promptQuestions() {
  questions.textContent = questions[i].question;

  choice1.textContent = questions[i].choices[0];
  choice2.textContent = questions[i].choices[1];
  choice3.textContent = questions[i].choices[2];
  choice4.textContent = questions[i].choices[3];


  document.getElementById ("start").onclick = function () {
    alert("you must choose an answer to move forward")
  }

};


// WHEN I answer a question THEN I am presented with another question



// When the user answers a question, you can run something like this
//WHEN I answer a question incorrectly THEN time is subtracted from the clock
function gotQuestionWrong(){

    if (clock > 5){
        clock -= 5;
        timer.textContent = clock;
    } else {
        clock = 0;
        timerArea.textContent = clock;
        clearInterval(timer);
        endGame();
    }   
}

function check() {
    var correctAnswer = "c";
    var inputValue = document.getElementById("button").value;
  
    if(inputValue !== correctAnswer) {
      return false;
    };
  };







  // This is the function that is run every second
// As long as the clock is greater than 0, it'll subtract 1 and update the clock on the page
//clock Timer question
//-= decrementing by 1
//clock = clock -1
//timerArea.textContent is displaying the timer
//function startTimer(){
  //document.querySelector('timer').textContent = timeStart;
  //if (clock > 0){
     // clock -= 1
     // Timer.textContent = clock;
  //} else {
   //   clearInterval(timer);
  //    endGame();
  //}
 // gotQuestionWrong();
//}