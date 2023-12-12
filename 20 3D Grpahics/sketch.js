// 3D Grpahics
// Derinsola Bolaji
// Date
//
// Global Variables


function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  // rotateY(frameCount);
  // box(150);
  angle = map(mouseX,0,mouseY,width,-120,120);
  for(let i=0; i < 360; i += 45){
    push();
    rotateY();
    boxes(30);
    pop();
  }
}

function boxes(size){
  if(size > 3){
    rotateZ(angle);
    translate(size*1.5);
    box(size);
    box(size*0.8);
  }
}