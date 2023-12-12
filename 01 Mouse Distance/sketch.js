// Mouse Distance
// Derinsola Bolaji
// September 20, 2023
// arrays, mains, functions, scroll wheel, colors


// Global Variables
let colorArray = [];
let colorIndex = 0;


function createColors(){
  colorArray.push(color("red"));
  colorArray.push(200,100,255);
  colorArray.push("midnightblue");
}

function mouseWheel(event){
  print(event.delta);
  if(event.delta < 0){
    colorIndex += 1;
    if(colorIndex > colorArray.length-1){
      colorIndex = 0;
    }
  }
}

function mouseDistance(x1,y1,x2,y2){
  let a = Math.abs(x1-x2);
  let b = Math.abs(y1-y2);
  let c = Math.sqrt(a*a,b*b);
}


function drawModes(){
  fill(colorArray[colorIndex]);
  stroke(colorArray[colorIndex]);
  circle(width/2, height/2, 30);
  circle(mouseX, mouseY, 20);
  line(width/2, height/2, mouseX, mouseY);
  let d = mouseDistance(mouseX, mouseY, width/2, height/2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createColors();
}

function draw() {
  background(220);
  drawModes();
}
