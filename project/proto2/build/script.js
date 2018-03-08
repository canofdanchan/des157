// ‘use strict’;

console.log("reading js");

//fetching build elements
var houser = document.getElementById("houser");
var housefr = document.getElementById("housefr");
var houses = document.getElementById("houses");
var houseb = document.getElementById("houseb");
var housefl = document.getElementById("housefl");

// fetching questions
// var b1full = document.getElementById("b1full");
var b1full = document.getElementById("b1full");
var b2full = document.getElementById("b2full");
var b3full = document.getElementById("b3full");
var b4full = document.getElementById("b4full");
var b5full = document.getElementById("b5full");

//fetching buttons
var backButton = document.getElementById("backButton");
var nextButton = document.getElementById("nextButton");

var timerId;

// create an array with all house elements: 0, 1, 2, 3
var allHouse = [housefr, houses, houseb, housefl];

// create an array with all questions: 0, 1, 2, 3
var allQuestion = [b2full, b3full, b4full, b5full];

// indicates where in the array you are
// starts at -1 bc the first number it has to go to is 0 (bc arrays start counting at 0, not 1)
var buildIndex = -1;

// roof appears when the window loads
window.addEventListener('load', function() {
    console.log("on load");
    timeId = setTimeout(showRoof, 0);
    //my form thingies aren't showing up???
    showb1();
});

//separate function to make the roof appear
function showRoof() {
    console.log('animating');
    houser.className = "show";
}

function showb1() {
    b1full.className = "show";
    console.log('animating');
}

// functions for next button -- for image to appear
function nextBuild() {
    if (buildIndex < allHouse.length-1) {
        buildIndex++;
        allHouse[buildIndex].className = "show";
        allQuestion[(buildIndex-1)].className = "none";
        allQuestion[buildIndex].className = "show";
    }
    console.log(buildIndex);
}

// functions for back button -- for image to disappear
function prevBuild() {
    if (buildIndex >= 0){
    allHouse[buildIndex].className = "hide";
    // allQuestion[buildIndex].className = "hide";
    // allQuestion[buildIndex+1].className = "none";
    buildIndex--;
  }
  console.log(buildIndex);
}

//
// function showQuestion() {
//   if (houseIndex < allHouse.length-1) {
//     houseIndex++;
// }
//
// function question(n) {
//     if (n >= allHouse.length) {
//         houseIndex = 0;
//     }
//     if (n < 0) {
//         houseIndex = allHouse.length;
//     }
//     allHouse[houseIndex].className = "show";
// }

// function to disable the buttons when no more corresponding images will appear
function disable() {
    if (houseIndex <= -1) {
        backButton.disabled = true;
        backButton.classname = "disabled";
    }
    if (houseIndex >= 3) {
        nextButton.disabled = true;
        nextButton.classname = "disabled";
    }
}

//attaching event listeners to buttons and adding functions
backButton.addEventListener("click", prevBuild);
nextButton.addEventListener("click", nextBuild);
// disable();
