// 08 Working with Images
// Derinsola Bolaji
// October 10th, 2023
// Working with images in variables and arrays

// Global Variables
let lionL, lionR; 
let pinImages = [];


function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i=0; i < 9; i++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  drawLion();
}

function drawLion(){
  if(mouseX < width/2){
    image(lionL, mouseX, mouseY, lionL.width*0.6, lionL.height*0.5);
  }
  else{
    image(lionR, mouseX, mouseY);
  }
}
