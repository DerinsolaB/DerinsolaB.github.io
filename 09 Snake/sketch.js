// 09 Snake
// Derinsola Bolaji
// 11th October 2023
//
//Global Variables
let points = []; //snake coordinates
let speed = 6;  //snake speed
let snakeLength = 10;
let snakeLocation; //a point for where the head is 
let foodLocation;

function setup() {
  createCanvas(windowWidth, windowHeight);
  snakeLocation = new Point(width/2, height/2);
  foodLocation = new Point(random(100,200),random(100,200));
  
  initSnake();
}

function initSnake(){
  for(let i = 0; i < snakeLength; i++){
    points.push(createPoint());
  }
}
function bigSnake(){
  fill(255,0,0);
  strokeWeight(1);
  rect(foodLocation.x, foodLocation.y, 20,20);
  strokeWeight(15);
  if(dist(snakeLocation.x, snakeLocation.y, foodLocation.x, foodLocation.y )< 40){
    points.unshift(points[0]);
    points.unshift(points[0]);
    points.unshift(points[0]);
  }
}

function createPoint(){
  if(keyCode===UP_ARROW) snakeLocation.y-= speed;
  else if(keyCode===DOWN_ARROW) snakeLocation.y += speed;
  else if(keyCode===LEFT_ARROW) snakeLocation.x -= speed;
  else if(keyCode===RIGHT_ARROW) snakeLocation.x += speed;
  return new Point(snakeLocation.x, snakeLocation.y);
}

function draw() {
  background(220);
  moveAndDisplay();
  bigSnake();
}

function moveAndDisplay(){
  for(let i = 0; i < points.length-1; i++){
    let cur = points[i];
    let next = points[i+1];
    let aplha = map(i,0,points.length-1,0,255);
    stroke(0,aplha);
    line(cur.x, cur.y, next.x, next.y);
  }
  points.splice(0,1);
  points.push(createPoint());
}

class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}