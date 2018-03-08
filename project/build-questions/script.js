//QUESTIONS:
// 1. hiding buttons on first and last questions
// 2. hiding the first question that pops up (bc it's not in the array)
// 3. (not as big concern) why it's not animating anymore?

// ‘use strict’;

console.log("reading js");

var b1full = document.getElementById("b1full");
var b2full = document.getElementById("b2full");
var b3full = document.getElementById("b3full");
var b4full = document.getElementById("b4full");
var b5full = document.getElementById("b5full");

//fetching buttons
var backButton = document.getElementById("backButton");
var nextButton = document.getElementById("nextButton");

var ohNo = document.getElementById("ohNo");

// create an array with all questions: 0, 1, 2, 3
var allQuestion = [b1full, b2full, b3full, b4full, b5full];

var timerId;

// indicates where in the array you are
// starts at -1 bc the first number it has to go to is 0 (bc arrays start counting at 0, not 1)
var buildIndex = 0;

// var results = document.getElementById("results");
// var answers = document.getElementById("answers");
// var form = document.getElementById("form");

// roof appears when the window loads
window.addEventListener('load', function() {
    console.log("on load");
    showb1();
});

function showb1() {
    b1full.className = "show", "animateBuild";
    console.log('animating');
}

function nextBuild() {
    if (buildIndex < allQuestion.length - 1) {
        buildIndex++;
        allQuestion[buildIndex - 1].className = "hide";
        allQuestion[buildIndex].className = "show", "animateBuild";
    }
    console.log(buildIndex);
}

// functions for back button -- for image to disappear
function prevBuild() {
    if (buildIndex > 0) {
        buildIndex--;
        allQuestion[buildIndex + 1].className = "hide";
        allQuestion[buildIndex].className = "show", "animateBuild";
    }
    console.log(buildIndex);
}

//function to disable buttons on first & last question
// function disable (){
//   if (buildIndex >= 0) {
//       backButton.className = "show";
//   // } else if (buildIndex = -1){
//   //     backButton.className = "hide";
//   // }
// }

//attaching event listeners to buttons and adding functions
// disable();
backButton.addEventListener("click", prevBuild);
nextButton.addEventListener("click", nextBuild);

document.f.onsubmit = processForm;

function processForm() {
  form.className="hide";

  var b1 = document.f.b1.value;
  var b2 = document.f.b2.value;
  var b3 = document.f.b3.value;
  var b4 = document.f.b4.value;
  var b5 = document.f.b5.value;

  answers.innerHTML = "<h3>1What is most important to build for you?</h3><p>" + b1 + "</p><h3> 2What tools do you build with?</h3><p>" + b2 + "</p><h3>3Why are you building these things?</h3><p>" + b3 + "</p><h3>4What do you still need to build?</h3><p>" + b4 + "</p><h3>5What do you need help building?</h3>";

  results.className = "show";
  return false;
}

function ohNofunction() {
  form.className="show";
  results.className="hide";
}

ohNo.addEventListener("click", ohNofunction);
