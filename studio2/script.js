console.log("reading js");

// laptop variables
var laptopFolder = document.getElementById("laptopFolder");
var laptopOverlay = document.getElementById("laptopOverlay");
var laptopClose = document.getElementById("laptopClose");

//phone variables
var phoneFolder = document.getElementById("phoneFolder");
var phoneOverlay = document.getElementById("phoneOverlay");
var phoneClose = document.getElementById("phoneClose");

//pen variables
var penFolder = document.getElementById("penFolder");
var penOverlay = document.getElementById("penOverlay");
var penClose = document.getElementById("penClose");

// laptop functions
laptopFolder.addEventListener("click", function(){
  laptopOverlay.style.display="block";
});
laptopFolder.addEventListener("mouseover", function(){
  laptopFolder.style.cursor="pointer";
});
laptopClose.addEventListener("click", function(){
  laptopOverlay.style.display="none";
});

//phone functions
phoneFolder.addEventListener("click", function(){
  phoneOverlay.style.display="block";
});
phoneFolder.addEventListener("mouseover", function(){
  phoneFolder.style.cursor="pointer";
});
phoneClose.addEventListener("click", function(){
  phoneOverlay.style.display="none";
});

//pen functions
penFolder.addEventListener("click", function(){
  penOverlay.style.display="block";
});
penFolder.addEventListener("mouseover", function(){
  penFolder.style.cursor="pointer";
});
penClose.addEventListener("click", function(){
  penOverlay.style.display="none";
});
