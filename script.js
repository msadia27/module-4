var 
// WHEN I answer a question THEN I am presented with another question

document.getElementById ("start").onclick = function () {
    alert("you must choose an answer to move forward")
}

function check() {
    var correctAnswer = "c";
    var inputValue = document.getElementById("button").value;
  
    if(inputValue !== correctAnswer) {
      return false;
    };
  };
//WHEN I answer a question incorrectly THEN time is subtracted from the clock