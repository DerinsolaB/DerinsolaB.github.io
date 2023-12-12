// Objects Demo Two
// Derinsola Bolaji
// Friday 13th October 2023
// OOP Recap + object - object interactions
//Global Variables
let points = [];
let reach = 150;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(let p of points){
    p.move();
    p.display();
    p.connectPoints(points);
  }
}

function mouseClicked(){
  //trigger on a full press/release mouse interaction
  points.push(new MovingPoint(mouseX, mouseY));
}

class MovingPoint{
  constructor(x,y){
    this.x = x; this.y = y; this.s = 20;
    this.c =color(random(255), random(255), random(255));
    this.xTime = random(10); this.yTime = random(10);
    this.timeShift = 0.01; this.maxSpeed = 5;
  }
  //Class functions
  display(){
    fill(this.c);
    noStroke();
    let d = dist(mouseX,mouseY, this.x,this.y);
    if(d < reach){
      this.s = map(d,0,reach,60,20);
    }
    else{
      this.s = 20;
    }
    circle(this.x,this.y,this.s);
  }

  connectPoints(pointArray){
    //check if any other points are nearby. If so,
    //connect with a line.
    //this.x  this.y
    stroke(this.c);
    for(let p of pointArray){
      if(p !== this){ //make sure p is not equal to itself
        let d = dist(this.x, this.y,p.getX(), p.getY());
        if(d <reach){
          line(this.x, this.y, p.getX(), p.getY());
        }
      }
    }
  }

  getX(){return this.x};
  getY(){return this.y};

  move(){
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed,0,1,-this.maxSpeed,this.maxSpeed);
    this.xTime += this.timeShift;
    this.x += xSpeed;

    //wrap around code
    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width;
  }
}
