// State Variables and Fading
// Derinsola Bolaji
// Date

//Global Variables
let mouseSlide;

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState;
}

function updateMouseState(){
  if(mouseX > width/2){
    mouseSlide = "right";
  }
  else{
    mouseSlide = "left";
  }
  print(mouseSlide);
}

function draw() {
  background(220);
  updateMouseState();
  renderSquare();
}

function renderSquare(){
  rect(0,0, width/2, height);
  rect(width,2,0,width/2,height);
}

let fillValue = 0;
if(mouseSlide === "right"){
  fill(0);
}
else{
  while (fillValue < 225){
    fill(fillValue);
    fillValue = 10;
  }
}
