// Balloon Tree
// Derinsola Bolaji
// 6th December 2023

// Global Variables
let scale = 15;
let balloonNumber;
let tree = 2;
let seed;

function setup() {
  seed = random(1,10000);
  createCanvas(610, 610);
}

function draw() {
  //setting the random seed
  randomSeed(seed);
  background(220);
  //calling drawTree()
  drawTree(width / 2, height * 0.9, 90, 6);
}

function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  let moveTree = map(mouseX, 0, width, 0, 21);
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle)) * depth * scale); 
    //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle)) * depth * scale); 
    //using trigratios. Get shorter based on depth
    strokeWeight(depth);
    drawLine(x1, y1, x2, y2, depth);
    drawLeaf(x2,y2,depth);
    //for a 3-branch tree:
    drawTree(x2, y2, angle - moveTree, depth - 1);
    drawTree(x2, y2, angle + moveTree, depth - 1);
    drawTree(x2, y2, angle, depth - 1); 
  }
}

function drawLeaf(x,y,d){
  //drawing the balloons on each branch 
  if(d<tree){
    let v = 6-d;
    fill(random(255), random(255),random(255));
    ellipse(x,y,random(v*2, v*4));
  }
}

function keyPressed(){
//setting x key to place balloons at each depth
  if(key === "x") tree++;
  //setting z key to remove placed balloons from each depth
  else if(key === "z") tree--;
}