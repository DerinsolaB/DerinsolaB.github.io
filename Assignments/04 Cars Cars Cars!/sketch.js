// Objects and Classes Intro
// Derinsola Bolaji
// November 2, 2023

// Global Variables
let westBound = [];
let eastBound = [];
let vehicleNumber = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  drawRoad();

  // Initializing vehicles in both directions
  for (let i = 0; i < vehicleNumber; i++) {
    let randColor = color(random(255), random(255), random(255));
    // represents the westbound direction
    westBound.push(new Vehicle(width / 2, 0, randColor));
    // represents the eastbound direction
    eastBound.push(new Vehicle(width / 2, 1, randColor));
  }
}

function draw() {
  drawRoad();
  // Move and perform actions for vehicles in both directions
  for (let current of westBound) {
    current.action();
    current.display();
  }
  for (let current of eastBound) {
    current.action();
    current.display();
  }
}

function drawRoad() {
  // Drawing the road background
  fill("lightgreen");
  rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
  fill(0);
  rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight - 200);
  // Drawing the road demarcation
  for (let i = 0; i < 400; i++) {
    fill("yellow");
    rect(i * 60, height / 2, 40, 10);
  }
}

class Vehicle {
  // Class constructor and properties
  constructor(x, dir, c) {
    // setting the dir (direction)
    this.dir = dir;
    this.x = x;
    this.y = 0; // Initialize y to 0, it will be updated based on direction
    // variable for the vehicle color
    this.c = c;
    this.number1 = round(random(0, 4));

    // Set initial y positions based on direction
    if (this.dir === 0) {
      this.y = random(height * 0.55 - 310, height * 0.85 - 320);
    } else if (this.dir === 1) {
      this.y = random(height * 0.55, height * 0.85);
    }

    this.size = 20;
    this.speed = random(2, 10);
  }

  // Calling class methods
  move() {
    // Move the vehicle based on its direction
    if (this.dir === 0) {
      this.x -= this.speed;
      if (this.x < 0) {
        this.x = width;
      }
    } else if (this.dir === 1) {
      this.x += this.speed;
      if (this.x > width) {
        this.x = 0;
      }
    }
  }

  speed_up() {
    // Increasing the speed of the vehicle while restricted
    this.speed += random(2, 5);
    if (this.speed > 30) {
      this.speed = 20;
    }
  }

  speed_down() {
    // Decreasing the speed of the vehicle while restricted
    this.speed -= random(2, 5);
    if (this.speed < 10) {
      this.speed = 20;
    }
  }

  changeColor() {
    // Changing the vehicle color
    this.c = color(random(0, 250), random(0, 250), random(0, 250));
  }

  action() {
    // Perform actions for the vehicle
    this.move();
    // Randomly change speed or color
    if (random() < 0.01) {
      this.speed_down();
    }
    if (random() < 0.01) {
      this.changeColor();
    }
    if (random() < 0.01) {
      this.speed_up();
    }
  }

  display() {
    // Rendering the vehicle position and color on screen
    rectMode(CENTER);
    fill(this.c);

    // Displaying the vehicles
    if (this.number1 >= 2 && this.dir === 1) {
      square(this.x, this.y, this.size + 20);
    } else {
      square(this.x, this.y, this.size);
    }
  }
}
