// Multi Colored Grid
// Derinsola Bolaji
// 12th October 2023
//
// Global Variables
let rows, columns, squareSize;
let colors = [];
let colorIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareSize = 30; // Set an initial square size
  columns = floor(width / squareSize);
  rows = floor(height / squareSize);
  createColorScheme();
  drawGrid();
  noLoop();
}

function draw(){
  if (keyIsPressed === true){
    createColorScheme();
    drawGrid();
  }
}

function drawGrid(){
  background(120);
  colorIndex = 0;
  for (let x = 0; x < columns * squareSize; x += squareSize) {
    for (let y = 0; y < rows * squareSize; y += squareSize) {
      fill(colors[colorIndex]);
      rect(x, y, squareSize, squareSize);
      colorIndex = (colorIndex + 1) % colors.length;
    }
  }
}

function mousePressed(){
  if (mouseButton === LEFT){
    squareSize = calculateSquareSize(-5);
  }
  else if (mouseButton === RIGHT){
    squareSize = calculateSquareSize(5);
  }
  drawGrid();
}

function calculateSquareSize(number){
  let newSquareSize = squareSize + number;
  if (newSquareSize < 10){
    newSquareSize = 10;
  }
  rows = floor(height / newSquareSize);
  columns = floor(width / newSquareSize);
  createColorScheme();
  return newSquareSize;
}

function createColorScheme(){
  colors = [];
  for (let i = 0; i < rows * columns; i++){
    colors.push(color(random(150), random(214), random(70)));
  }
}

function keyPressed() {
  if (keyIsPressed){
    createColorScheme();
    drawGrid();
  }
}
