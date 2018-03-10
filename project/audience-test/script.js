// ‘use strict’;

console.log("reading js");

//fetching description elements
var build = document.getElementById("build");
var hold = document.getElementById("hold");
var ground = document.getElementById("ground");

var bDescrip = document.getElementById("bDescrip");
var hDescrip = document.getElementById("hDescrip");
var gDescrip = document.getElementById("gDescrip");

var aboutpage = document.getElementById("aboutpage");
var resourcepage = document.getElementById("resourcepage");

var timerId;

//timeout for all descriptions
window.addEventListener ('load', function(){
  console.log("on load");
  timerId = setTimeout(bShowDescrip, 0);
  timerId = setTimeout(hShowDescrip, 1500);
  timerId = setTimeout(gShowDescrip, 3000);
});

//separate functions for showing all descriptions
function bShowDescrip (){
  console.log('animating');
  bDescrip.className = "animateDescrip";
}
function hShowDescrip (){
  console.log('animating');
  hDescrip.className = "animateDescrip";
}
function gShowDescrip (){
  console.log('animating');
  gDescrip.className = "animateDescrip";
}
