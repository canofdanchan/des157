console.log ("this is a script.js comment");

function setup(){
  var myCanvas = createCanvas (800,250);
  myCanvas.parent ('my-sketch');
  background(255, 229, 243);
}

function draw(){
  stroke (175, 135, 231);
  strokeWeight(3);
  line (mouseX,mouseY,pmouseX,pmouseY);
}
