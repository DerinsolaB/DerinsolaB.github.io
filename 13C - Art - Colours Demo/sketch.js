// Colours Demo
// Derinsola Bolaji
// Date
//
// Global Variables
let rectWidth = 50; let rectHeight = 10;
let colors = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  drawRGB(width*0.1);
  drawISB(width*0.4);
  drawCustom(width*0.7);
  noStroke();
}

function drawCustom(x){
  colorMode(colors);
  for(let y=0; y < height; y += rectHeight){
    fill[colors[index]];
    rect(x,y,rectWidth,rectHeight);
  }
}

function drawISB(x){
  colorMode(HSB);
  for(let y=0; y < height; y += rectHeight){
    fill(y,360,360);
    rect(x,y,rectWidth,rectHeight);
  }
}

function drawRGB(x){
  colorMode(RGB);
  for(let y=0; y < height; y += rectHeight){
    fill(random(255),random(255),random(255));
    rect(x,y,rectWidth, rectHeight);
  }
}