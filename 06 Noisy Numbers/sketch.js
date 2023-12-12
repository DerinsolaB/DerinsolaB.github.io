// Project Title
// Your Name
// Date
//
//Global Variables
let segL = 10;
let ballY = 200;
let ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function segmentLine(){
  strokeWeight(5);
  let x =0;
  while (x <width){
    line(x,height/2,x = segL, height);
    x +=  segL;
  }
}

function rectangleOnLine(){
  rectMode(CORNERS);
  strokeWeight(20);
  stroke(0);
  rect(width/10,height/2,width/2,height/4);
}

function moveBall(){
  circle(width*0.7,ballY,30);
}

function draw() {
  background(220);
  segmentLine();
  rectangleOnLine();
  moveBall();
}
