// Local Storage and p5.sound Library
// Derinsola Bolaji
// Nov 27, 2023

// Global Variables
let ball;   let totalBounces = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width/2,height/2);
}

function draw() {
  textSize(30);  textAlign(CENTER);
  
  background(220);
  ball.move();   ball.display();

  text(totalBounces, width/2, height/2);
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-6,6), random(-6,6));
  }
  display(){
    circle(this.pos.x, this.pos.y, 30);
  }
  move(){
    this.pos.add(this.vel);
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
      totalBounces++;
    }
    if(this.pos.y<0||this.pos.y>height){
      this.vel.y *= -1;
      totalBounces++;
    }
  }
}