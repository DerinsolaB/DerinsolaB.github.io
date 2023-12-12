// 05 Puzzle Game
// Derinsola Bolaji
// November 24th, 2023
// Global Variables
let score;
let grid =
  [[0, 255, 0, 255, 255],
  [255, 255, 0, 255, 255],
  [255, 255, 255, 0, 255],
  [0, 0, 0, 255, 0]
  ];
const NUM_ROWS = 4; const NUM_COLS = 5;
let rectWidth = 50; let rectHeight = 50;
let col, row;
let flipPattern = "cross";


function setup() {
  createCanvas(rectWidth * NUM_COLS, rectHeight * NUM_ROWS);
  randomArrangment();
  textAlign(CENTER);
}


function draw() {
  col = getCurrentX(); row = getCurrentY();
  background(220);
  //calling functions to be drawn
  renderGrid();
  print(col, row);
  winStatus();
  drawOverlay();
}


function drawOverlay() {
  fill(0, 255, 0, 140);
  //setting the overlay boundaries to the grid
  col = constrain(col, 0, NUM_COLS - 1);
  row = constrain(row, 0, NUM_ROWS - 1);
  if (flipPattern === "cross") {
    // drawing an overlay for the clicked rectangle
    rect(col * rectWidth, row * rectHeight, rectWidth, rectHeight);
    // drawing an overlay for the rectangles that would be affected in a cross pattern
    if (row < 3) rect(col * rectWidth, (row + 1) * rectHeight, rectWidth, rectHeight);
    if (col > 0) rect((col - 1) * rectWidth, row * rectHeight, rectWidth, rectHeight);
    if (row > 0) rect(col * rectWidth, (row - 1) * rectHeight, rectWidth, rectHeight);
    if (col < NUM_COLS - 1) rect((col + 1) * rectWidth, row * rectHeight, rectWidth, rectHeight);
  } else if (flipPattern === "square") {
    // drawing an overlay for the clicked rectangle
    rect(col * rectWidth, row * rectHeight, rectWidth, rectHeight);
    // drawing an overlay for the rectangles that would be affected in a square pattern
    for (let i = col - 1; i <= col + 1; i++) {
      for (let j = row - 1; j <= row + 1; j++) {
        if (i >= 0 && i < NUM_COLS && j >= 0 && j < NUM_ROWS) {
          rect(i * rectWidth, j * rectHeight, rectWidth, rectHeight);
        }
      }
    }
  }
}


function keyPressed() {
  //changing pattern when space bar is pressed
  if (keyCode === 32) {
    if (flipPattern === "cross") {
      flipPattern = "square";
    }
    else {
      flipPattern = "cross";
    }
  }
}


function mousePressed() {
  if (mouseX < width && mouseY < height) {
    if (keyIsPressed && keyCode === SHIFT) {
      flip(col, row);
    }
    else {
      if (flipPattern === "cross") {
        //setting cross pattern
        if (row < 3) flip(col, row + 1);
        if (col > 0) flip(col - 1, row);
        if (row > 0) flip(col, row - 1);
        if (col < NUM_COLS - 1) flip(col + 1, row);
        flip(col, row);
      }
      else if (flipPattern === "square") {
        //setting square patte rn
        for (let i = col - 1; i <= col + 1; i++) {
          for (let j = row - 1; j <= row + 1; j++) {
            if (i >= 0 && i < NUM_COLS && j >= 0 && j < NUM_ROWS) {
              flip(i, j);
            }
          }
        }
      }
    }
  }
}



function flip(x, y) {
  //setting flip
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}


function getCurrentX() { //return the current column mouse is in
  let constrainX = constrain(mouseX, 0, width - 1);
  return int(constrainX / rectWidth);
}


function getCurrentY() { //return the current row mouse is in
  let constrainY = constrain(mouseY, 0, height - 1);
  return int(constrainY / rectHeight);
}


function randomArrangment() {
  //creating a random arrangment of colors on the grid
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      if (random(100) < 50) {
        grid[y][x] = 0;
      }
      else {
        grid[y][x] = 255;
      }
    }
  }
}


function renderGrid() {
  //creates a 2D grid of squares
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}


function winStatus() {
  //setting condition for winning
  let winCondition = grid[0][0];
  let winCondition2 = grid[255];
  let won = true;
  //checking for the same colors to declare game won
  for (let i = 0; i < NUM_COLS; i++) {
    for (let j = 0; j < NUM_ROWS; j++) {
      if (grid[j][i] !== winCondition || winCondition2) {
        won = false;
        break;
      }
    }
    if (!won) {
      break;
    }
  }
  //writing the won text
  if (won) {
    createCanvas(windowWidth, windowHeight);
    textSize(35);
    fill(0);
    textFont("Times New roman"); textStyle(BOLD)
    text("Congratulations! You Won!", windowWidth / 2, windowHeight / 2);
  }
}



