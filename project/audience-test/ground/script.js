// ‘use strict’;

console.log("reading js");

//fetching build elements
var houser = document.getElementById("smoke1");
var housefr = document.getElementById("smoke2");
var houses = document.getElementById("smoke3");

// fetching questions
var b1full = document.getElementById("s1full");
var b2full = document.getElementById("s2full");
var b3full = document.getElementById("s3full");

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

// fetching email / download buttons
var email = document.getElementById("email");
var download = document.getElementById("download");

var timerId;

// create an array with all house elements: 0, 1, 2, 3
var allSmoke = [smoke1, smoke2, smoke3];

// create an array with all questions: 0, 1, 2, 3
var allQuestion = [s1full, s2full, s3full];

// indicates where in the array you are
var index = 0;

// overlay functions
infoIcon.addEventListener ("click", function(){
  infoOverlay.style.display="block";
});
close.addEventListener("click", function(){
  infoOverlay.style.display="none";
})

// roof appears when the window loads
window.addEventListener('load', function() {
    console.log("on load");
    timeId = setTimeout(showSmoke1, 0);
    shows1();
    backButton.className="hide";
});

//separate function to make the roof appear
function showSmoke1() {
    console.log('animating');
    houser.className = "animate";
}

function shows1() {
    s1full.className = "show, animate";
    console.log('animating');
}

// functions for next button -- for image to appear
function next() {
  //if i'm not at the end, the next item appears (if I am at the end, nothing happens)
    if (index < allSmoke.length-1) {
        index++;
        backButton.className="showButton";
        allSmoke[index].className = "animate";
        allQuestion[index - 1].className = "hide";
        allQuestion[index].className = "animate";

        // if it reaches the end, the next button disappears & submit button appears
        // problem: next button doesn't show again?
        if (index == allSmoke.length-1) {
          nextButton.className="hide";
          submitButton.className="showButton";
        }
        else if (index < allSmoke.length-1){
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

    if (index > 0){
    allSmoke[index].className = "unanimate";
    index--;
    allQuestion[index + 1].className = "hide";
    allQuestion[index].className = "animate";

    if (index < allSmoke.length-1){
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

//function for email and download buttons
email.addEventListener("click", alertmsg);
download.addEventListener("click", alertmsg);

function processForm() {

  form.className="hide";

  var s1 = document.f.s1.value;
  var s2 = document.f.s2.value;
  var s3 = document.f.s3.value;

  answers.innerHTML = "<h3>Do you allow for your whole self to be present with you?</h3><p>" + s1 + "</p><h3> How do you (re)generate a sense of safety for yourself?</h3><p>" + s2 + "</p><h3>What tools do you use to feel connected to yourself? your communities?</h3><p>" + s3;

  results.className="show";
  return false;
}

function gobackfunction() {
    form.className="show";
    results.className="hide";
    index=allSmoke.length-1;
}

function alertmsg() {
  alert("this feature isn't ready yet! come back later");
}
