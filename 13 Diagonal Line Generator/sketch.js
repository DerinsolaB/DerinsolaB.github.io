// 13 Diagonal Line Generator
// Derinsola Bolaji
// Date
//
// Global Variables
let spacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  drawLines();
}

function diagonalAscending(x,y,s){
  line( x - s / 2, y + s / 2, x + s/ 2, y - s / 2);
}

function diagonalDescending(x,y,s){
  line( x - s / 2, y - s / 2, x + s/ 2, y + s / 2);
}

function drawLines(){
  for(let x = 0; x < width; x += spacing){
    for(let y = 0;y < height; y += spacing){
      let choice = Math.floor(random(2));
      point(x,y);
      if(choice === 0)diagonalAscending(x,y,spacing);
      else diagonalDescending(x,y,spacing);
    }
  }
}

