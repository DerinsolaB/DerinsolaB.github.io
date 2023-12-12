//Primitive Paint
//Derinsola Bolaji
//2nd October 2023
//
//Global Variables
let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;
let number6 = 0;
let number7 = 0;
let number8 = 0;
let number9 = 0;
let extraCanvas;
let shape = "square";
let decrease;

function setup() {
//Creating Canvas
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
  background(220);
  rectMode(CENTER);
  extraCanvas.rectMode(CENTER);
  newColor();
}


//calling built-in global variable "name" in a function
function name(){
//Writing my name in the top corner of the screen
  textSize(32);
  textFont("Times New Roman");
  text("Derinsola", 13, 36);
}

function newColor(){
  number1=Math.floor(Math.random() * 255);
  number2=Math.floor(Math.random() * 255);
  number3 = Math.floor(Math.random() * 255);
  fill(number1,number2,number3);
  extraCanvas.fill(number1,number2,number3);
}

function keyPressed(){
//Creating the output for when keys are pressed
  if(key === "a"){
    shape = "rect";
  }
  else if(key === "s"){
    shape = "ellipse";
  }
  else if(key === "d"){
    shape = "square";
  }
  else if (key === "w"){
    newColor();
  }
}

function mousePressed(){
  //response to the mouse being pressed
  if(shape === "rect"){
    extraCanvas.rect(mouseX,mouseY,200,100);
  }
  else if(shape === "ellipse"){
    extraCanvas.ellipse(mouseX,mouseY,100,100);
  }
  else if(shape === "square"){
    extraCanvas.square(mouseX,mouseY,100);
  }
  newColor();
}

function drawOverlay(){
  //function to check for the shape to be placed
  if(shape === "rect"){
    rect(mouseX,mouseY,200,100);
  }
  else if(shape === "ellipse"){
    ellipse(mouseX,mouseY,100,100);
  }
  else if(shape === "square"){
    square(mouseX,mouseY,100);
  }
}

function mouseMoved(){
  //setting the shapes to be drawn and follow the mouses movement
  rect(mouseX,mouseY,200,100);
  clear();
}

function clearCanvas(){
//Creating response to the space bar being pressed
  if (keyCode === 32 && keyIsPressed){  
    extraCanvas = createGraphics(windowWidth, windowHeight);
    background(220);
  }
}

function pickNumber(){
//Creating rectangle and randomly selecting colors

  if (number7 < 50){
    number4 = Math.floor(Math.random() * 255);
    number5 = Math.floor(Math.random() * 255);
    number6 = Math.floor(Math.random() * 255);
    fill(number4,number5,number6);
    rect(windowWidth/2, windowHeight/2,number8,number9);
    number8 = number8 + 2;
    number9 = number9 + 1;
    number7 = number7 + 1;
  }
  else if (number7 >= 50){
    number8 = 100;
    number9 = 50;
    number7 = 0;
  }
}

function draw() {
//Calling functions to run in output
  background(200);
  clearCanvas();
  name();
  pickNumber();
  image(extraCanvas,0,0);
  fill(number1,number2,number3);
  drawOverlay();
}