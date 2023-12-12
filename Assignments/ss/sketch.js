// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function mystery(x, y){
  if(x===0) return y;
  return mystery(x-1, x+y);
}
 

console.log(mystery(4,3));