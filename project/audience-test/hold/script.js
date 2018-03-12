// ‘use strict’;

console.log("reading js");

//fetching build elements
var hold1 = document.getElementById("hold1");
var hold2 = document.getElementById("hold2");
var hold3 = document.getElementById("hold3");
var hold4 = document.getElementById("hold4");

// fetching questions
var b1full = document.getElementById("h1full");
var b2full = document.getElementById("h2full");
var b3full = document.getElementById("h3full");
var b4full = document.getElementById("h4full");

// fetching form elements
var form = document.getElementById("form");
var answers = document.getElementById("answers");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

// fetching overlay elements
var infoIcon = document.getElementById('infoIcon')
var infoOverlay = document.getElementById("infoOverlay");
var close = document.getElementById("close");

//fetching buttons
var backButton = document.getElementById("backButton");
var nextButton = document.getElementById("nextButton");

// go back button
var goback = document.getElementById("goback");

var timerId;

// create an array with all house elements: 0, 1, 2, 3
var allHold = [hold1, hold2, hold3, hold4];

// create an array with all questions: 0, 1, 2, 3
var allQuestion = [h1full, h2full, h3full, h4full];

// indicates where in the array you are
var index = 0;

// overlay functions
infoIcon.addEventListener("click", function() {
    infoOverlay.style.display = "block";
});
close.addEventListener("click", function() {
    infoOverlay.style.display = "none";
})

// roof appears when the window loads
window.addEventListener('load', function() {
    console.log("on load");
    timeId = setTimeout(showHold1, 0);
    showh1();
    backButton.className = "hide";
});

//separate function to make the roof appear
function showHold1() {
    console.log('animating');
    hold1.className = "animate";
}

function showh1() {
    h1full.className = "show, animate";
    console.log('animating');
}

// functions for next button -- for image to appear
function next() {
    //if i'm not at the end, the next item appears (if I am at the end, nothing happens)
    if (index < allHold.length - 1) {
        index++;
        backButton.className = "showButton";
        allHold[index].className = "animate";
        allQuestion[index - 1].className = "hide";
        allQuestion[index].className = "animate";

        // if it reaches the end, the next button disappears & submit button appears
        // problem: next button doesn't show again?
        if (index == allHold.length - 1) {
            nextButton.className="hide";
            submitButton.className = "showButton";
        }
        else if (index < allHold.length-1){
          nextButton.className="show";
        }
        if (index < 0){
          backButton.classname = "show";
        }
    }
    console.log(index);
}

// functions for back button -- for image to disappear & go to previous image
function prev() {

    if (index > 0) {
        allHold[index].className = "unanimate";
        index--;
        allQuestion[index + 1].className = "hide";
        allQuestion[index].className = "animate";

        if (index < allHold.length-1){
          nextButton.className="show";
        }
        if (index == 0){
            backButton.className = "hide";
        } else if (index > 0){
          backButton.className = 'show';
        }
    }
    console.log(index);
}

//attaching event listeners to buttons and adding functions
backButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);

//form functions
document.f.onsubmit = processForm;
// function to go back to the questions and change your answers
goback.addEventListener("click", gobackfunction);

function processForm() {

    form.className = "hide";

    var h1 = document.f.h1.value;
    var h2 = document.f.h2.value;
    var h3 = document.f.h3.value;
    var h4 = document.f.h4.value;

    answers.innerHTML = "<h3>What do you hold close to you?</h3><p>" + h1 + "</p><h3> What are you still holding that you don’t need to hold onto anymore? </h3><p>" + h2 + "</p><h3>How do you need to be held right now?</h3><p>" + h3 + "</p><h3>How do you hold space for yourself? how do you hold space for others?</h3><p>" + h4;

    results.className = "show";
    return false;
}

function gobackfunction() {
    form.className = "show";
    results.className = "hide";
    index=allHold.length-1;
}
