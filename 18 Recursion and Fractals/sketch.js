// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function circleInCircle(x,y,d){
  if(d>10){
    circle(x,y,d);
    let den = map(mouseX,0,width,1.01,1.5);
    circleInCircle(x,y,d/den);
  }
}

function cantor(x,y,len,depth){
  if(depth>0){
    strokeWeight(8);
    line(x,y,x+len,y);
    let newY = y+20;
    cantor(x,newY,len/3,depth-1);
    cantor(x+len*2/3,newY,len/3,depth-1);
  }
}

function circleInFractal(x,y,d){
  if(d>2){
    circle(x,y,d);
    circleInFractal(x-d/2,y,d/2);
    circleInFractal(x+d/2,y,d/2);
    circleInFractal(x,y+d/2,d/2);
  }
}

function draw() {
  background(220);
  //circleInCircle(width/2, height/2,width);
  //cantor(0,200,4000,0);
  circleInFractal(900/2,900/2,3000);
}

