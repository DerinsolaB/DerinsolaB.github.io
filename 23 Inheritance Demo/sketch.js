// Inheritance
// Derinsola Bolaji
// Date
//
// Global Variables
let objects =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i < 10; i++){
    objects.push(new AnimatedObject(random(width),random(height)));
  }
  
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}

class AnimatedObject{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 1;
  }
  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

  display(){
    strokeWeight(4);
    point(this.x, this.y);
  }
}