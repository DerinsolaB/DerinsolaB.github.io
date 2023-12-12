// 03 Perlin Noise (Terrain Generation)
// Derinsola Bolaji
// 9th November 2023
// Global Variables
let terrain = [];
let rectWidth = 1; 
let noiseIncrease = 0.01;
let startPanning = 0;
let highestPointX = 0;
let highestPointY = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  //calling functions to work on setup
  generateTerrain();
  findHighestPoint();
}

function generateTerrain(){
  terrain = [];
  let numRectangles = floor(width / rectWidth);
  let noiseNumber = startPanning;
  for (let i = 0; i < numRectangles; i++) {
    let rectHeight = map(noise(noiseNumber), 0, 1, 0, height);
    terrain.push(rectHeight);
    noiseNumber += noiseIncrease;
  }
  startPanning +=  noiseIncrease;
}

function drawTerrain(){
  //creating the terrain/rectangles
  for (let i = 0; i < terrain.length; i++){
    fill("Gray");
    rect(i*rectWidth, height, rectWidth, - terrain[i]);
  }
}

function drawFlag(x,y){
  //creating the flag
  rect(x - 1, y - 30, 1, 30); 
  fill(255,0,0);
  triangle(x - 1, y - 19, x - 1, y - 30, x + 10, y - 25);
}

function findHighestPoint(){
  //finding the highest point in the terrain 
  let maxHeight = -1;
  for (let i = 0; i < terrain.length; i++) {
    if (terrain[i] > maxHeight) {
      maxHeight = terrain[i];
      highestPointX = i * rectWidth + rectWidth/2;
      highestPointY = height - terrain[i];
    }
  }
}

function averageHeight(){
  let sumOfHeights = 0;
  //calculating average heights of terrain
  for(let i=0; i < terrain.length; i++){
    sumOfHeights += terrain[i];
  }
  let average = sumOfHeights/terrain.length;
  average = height - average;
  fill(255,0,0);
  rect(0,average,windowWidth,8);
}

function keyPressed(){ 
  // Decreasing the rectangle width on left arrow 
  if (key === "ArrowLeft"){
    if(rectWidth > 1) rectWidth -= 1;
    generateTerrain();
    findHighestPoint();
  }
  else if (key === "ArrowRight"){
    // Increasing the rectangle width on right arrow click
    rectWidth += 1;
    generateTerrain();
    findHighestPoint();
  }
}

function draw(){
  background(220);
  //calling functions to draw
  generateTerrain();
  drawTerrain();
  findHighestPoint();
  averageHeight();
  drawFlag(highestPointX, highestPointY);
} 