// 13 Diagonal Line Generator
// Derinsola Bolaji
// Date
//
// Global Variables
let sqaureSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);  rectMode(CENTER);
  noFill();   noLoop();
}

function drawSquares(){
  let s  = sqaureSize;
  for(let x = s / 2; x < width - s / 2; x += s){
    for(let y = s / 2; y < height; y += s ){
      push();
      translate(x,y);
      let rAmount = map(y,0,height, 1, 45);
      let offset = map(y,0,height,0,45)
      rotate(radians(random(-rAmount,rAmount)));
      square((random(-offset,offset)random(-offset,offset),s));
      pop();
    }
  }
}

function draw(){
  background(220);
  drawSquares();
}
 