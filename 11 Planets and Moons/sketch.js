// Planets and Moons
// Derinsola Bolaji
// 17th October 2023
//
//Global Variables
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(50);
  myPlanet.display();
}

function mouseClicked(){
  myPlanet.createMoon();
}

class Planet{
  constructor(x,y){
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }
  createMoon(){
    this.moons.push(new Moon(this.x,this.y));
  }
  display(){
    circle(this.x,this.y,this.s);
    for(let m of this.moons){
      m.update();
    }
  }
}

class Moon{
  constructor(x,y){
    this.x = x; this.y = y;
    this.steps = 10; this.speed = 5;
  }
  update(){
    this.x += this.speed;     this.steps--;
    if(this.steps===0){
      this.speed *= -1; this.steps = 20;
    }
    circle(this.x, this.y,25);
  }
}