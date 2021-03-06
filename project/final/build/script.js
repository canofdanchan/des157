// ‘use strict’;

console.log("reading js");

//fetching build elements
var houser = document.getElementById("houser");
var housefr = document.getElementById("housefr");
var houses = document.getElementById("houses");
var houseb = document.getElementById("houseb");
var housefl = document.getElementById("housefl");

// fetching questions
var b1full = document.getElementById("b1full");
var b2full = document.getElementById("b2full");
var b3full = document.getElementById("b3full");
var b4full = document.getElementById("b4full");
var b5full = document.getElementById("b5full");

// fetching form elements
var form = document.getElementById("form");
var answers = document.getElementById("answers");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

// fetching overlay elements
var infoIcon = document.getElementById('infoIcon')
var infoOverlay = document.getElementById("infoOverlay");
var infoClose = document.getElementById("infoClose");

var viewintro = document.getElementById("viewintro")
var introOverlay = document.getElementById("introOverlay");
var startNclose = document.getElementById("startNclose");
var all = document.getElementById("all");

//fetching buttons
var backButton = document.getElementById("backButton");
var nextButton = document.getElementById("nextButton");

// go back button
var goback = document.getElementById("goback");

// fetching email / download buttons
var email = document.getElementById("email");
var download = document.getElementById("download");

var timerId;

// create an array with all house elements: 0, 1, 2, 3
var allHouse = [houser, housefr, houses, houseb, housefl];

// create an array with all questions: 0, 1, 2, 3
var allQuestion = [b1full, b2full, b3full, b4full, b5full];

// indicates where in the array you are
var index = 0;

// overlay functions
//info
infoIcon.addEventListener("click", function() {
    infoOverlay.style.display = "block";
});
infoClose.addEventListener("click", function() {
    infoOverlay.style.display = "none";
})
//intro
viewintro.addEventListener("click", function() {
    introOverlay.style.display = "block";
    all.style.display = "none";
});
startNclose.addEventListener("click", function() {
    introOverlay.style.display = "none";
    all.style.display = "block";
})

// roof appears when the window loads
window.addEventListener('load', function() {
    console.log("on load");
    timeId = setTimeout(showRoof, 0);
    showb1();
    backButton.className = "hide";
});

//separate function to make the roof appear
function showRoof() {
    console.log('animating');
    houser.className = "animate";
}

function showb1() {
    b1full.className = "show, animate";
    console.log('animating');
}

// functions for next button -- for image to appear
function next() {
    //if i'm not at the end, the next item appears (if I am at the end, nothing happens)
    if (index < allHouse.length - 1) {
        index++;
        backButton.className = "showButton";
        allHouse[index].className = "animate";
        allQuestion[index - 1].className = "hide";
        allQuestion[index].className = "animate";

        // if it reaches the end, the next button disappears & submit button appears
        // problem: next button doesn't show again?
        if (index == allHouse.length - 1) {
            nextButton.className = "hide";
            submitButton.className = "showButton";
        } else if (index < allHouse.length - 1) {
            nextButton.className = "show";
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
        allHouse[index].className = "unanimate";
        index--;
        allQuestion[index + 1].className = "hide";
        allQuestion[index].className = "animate";

        if (index < allHouse.length - 1) {
            nextButton.className = "show";
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

//function for email and download buttons
email.addEventListener("click", alertmsg);
download.addEventListener("click", alertmsg);

function processForm() {

    form.className = "hide";

    var b1 = document.f.b1.value;
    var b2 = document.f.b2.value;
    var b3 = document.f.b3.value;
    var b4 = document.f.b4.value;
    var b5 = document.f.b5.value;

    answers.innerHTML = "</h2><h3>Name everything that you are currently building. How are they doing?</h3><p>" + b1 + "</p><h3> What is the purpose behind what you are building?</h3><p>" + b2 + "</p><h3>How are you building towards healing, and away from harm?</h3><p>" + b3 + "</p><h3>What tools do you have to offer?<br><span>What can you give & what can you teach?</span></h3><p>" + b4 + "</p><h3>What do you still need to build?<br><span>Building is not an independent process. Consider the forms of support you have.</span></h3>" + b5;

    results.className = "show";
    return false;
}

function gobackfunction() {
    form.className = "show";
    results.className = "hide";
    index = allHouse.length - 1;
}

function alertmsg() {
  alert("this feature isn't ready yet! come back later");
}
