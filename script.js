//quiz questions 
var questions = [
  {
    Question: "Arrays in Javascript can be used to store ____.",
    Choices: {
      a: "numbers and strings",
      b: "other arrays", 
      c: "booleans", 
      d: "all of the above"
    },
    Answer: "all of the above"
  },
  {
    Question: "The condition in an if / else statement is encloesd with ____.",
    Choices: {
      a: "quotes", 
      b: "curly brackets", 
      c: "parentheses", 
      d: "square brackets"
    },
    Answer: "parentheses",
  },
  {
    Question: "A very useful tool used for development and debugging for printing content to the debugger is:",
    Choices: {
      a: "Javascript", 
      b: "terminal/bash", 
      c: "console log", 
      d: "for loops"
    },
    Answer: "console log",
  },
  {
    Question: "String values must be enclosed within ____ when being assigned to variables.",
    Choices: {
      a: "commas", 
      b: "curly brackets", 
      c: "quotes", 
      d: "parentheses"
    },
    Answer: "quotes",
  },
  {
    Question: "Commonly used data types DO NOT include:",
    Choices: {
      a: "strings", 
      b: "booleans", 
      c: "alerts", 
      d: "numbers"
    },
    Answer: "alerts"
  },
];

//string = data type
//array = collection of data types
// questions[1] questions[i]
//variables
var startChallenge = document.getElementById('startChallenge');
var startButton = document.getElementById('startButton');
var testQuestions = document.getElementById('testPage');
var questions = document.getElementById('Question');
var questionIndex
var choice1 = document.querySelector('choice1');
var choice2 = document.querySelector('choice2');
var choice3 = document.querySelector('choice3');
var choice4 = document.querySelector('choice4');

let Timer = document.getElementById('Timer');
var clock; 
var timeStart = 100;
var timePenalty = 15;

startButton.addEventListener('click', function() {
  
  Timer.textContent = clock;
  document.getElementById('Timer').textContent = timeStart;
  if (clock > 0){
    clock -= 1
  } else {
    clearInterval(clock);
    
  }
  startChallenge.classList.remove('testQuestions');
  startButton.classList.add('testQuestions');
  
  questionIndex = 0
  promptQuestions(questionIndex);

  document.getElementById ("start").onclick = function () {
    alert("you must choose an answer to move forward")
  }
  //startQuiz();
  }
  );

//startQuiz function
//function startQuiz() {
  //promptQuestions();
  //startButton.classList.add('hide');
//};

function promptQuestions() {
  testQuestions.textContent = questions[i].Question;

  choice1.textContent  = questions[i].Choices;
  choice2.textContent  = questions[i].Choices;
  choice3.textContent  = questions[i].Choices;
  choice4.textContent  = questions[i].Choices;
};

// When the user answers a question, you can run something like this
//WHEN I answer a question incorrectly THEN time is subtracted from the clock
function gotQuestionWrong(){

    if (clock > 5){
        clock -= 5;
        Timer.textContent = clock;
    } else {
        clock = 0;
        timerArea.textContent = clock;
        clearInterval(Timer);
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