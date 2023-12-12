// External Libraries
// Derinsola Bolaji
// December 1 2023

// Global Variables
let scribble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();
  strokeWeight(4);
}

function draw() {
  background(220);
  scribble.scribbleEllipse(mouseX, mouseY, 120, 80);
}
