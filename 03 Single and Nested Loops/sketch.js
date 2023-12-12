// Drawing Single and Nested Loops
// Derinsola Bolaji
// 25th September 

// Global Variables
let numSegments = 10; 
let segmentHeight;  
const GRID_SPACING = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
}

function gradient(){
  for(let i = 0; i < numSegments; i++){
    let y = i * segmentHeight;
    fill(y);
    rect(0,y,width, segmentHeight);
  }
}

function drawGrid(){
  for(let x = 0; x < width; x = x + GRID_SPACING){
    for(let y = 0; y < height; y + GRID_SPACING){
      fill(0);
      //circle(x,y,10);

      noCursor();
      line(mouseX,mouseY,x.y);
    }
  }
}

function draw() {
  gradient();
  drawGrid();
}


