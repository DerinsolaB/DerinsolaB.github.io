// Repositioning Rectangles
// Derinsola Bolaji
// 2
//
// Global Variables
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let mouseOver = false;
let pickedUp = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2, y = height/2;
  rWidth = 200, rHeight = 100; 
}

function updateEdgePositions(){
  rLeft = x - rWidth/2; rRight = x + rWidth/2;
  rTop = y - rHeight/2; rBottom = y + rHeight/2;
}

function drawRectangle(){
  updateEdgePositions();
  print(rLeft, rBottom, rRight, rBottom);
  if(mouseX > rLeft && mouseX < rRight && 
  mouseX > rTop && mouseY < rBottom){
    mouseOver = true;
    fill(170,190,50);
  }
  else{
    mouseOver = false;
    rect(x,y,rWidth,rHeight);
    fill(35,70,125);
  }
  if(pickedUp){
    x = mouseX;
    y = mouseY;
  }

  rect(x,y,rWidth,rHeight);
}

function mousePressed(){

}

function draw() {
  background(220);
  drawRectangle();
}
