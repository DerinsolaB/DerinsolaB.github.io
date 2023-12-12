// 17 Recman Sequence 
// Derinsola Bolaji
// 14th November 2023
//
//Global Variables
let cX = 0;
let sequence = [];
let stepAmount = 1;
let currentValue = 0;
let largest = 0;
let arclist = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);   noFill();
}

function addSequence(){
  let backwards = currentValue - stepAmount;
  if(backwards > 0 && !sequence.includes(backwards)){
    arclist.push(new rArc(currentValue,backwards, sequence.length%2));
    sequence.push(backwards);
    currentValue = backwards;
    stepAmount++;
  }
  else{
    let forwards = currentValue + stepAmount;
    arclist.push(new rArc(currentValue,forwards,sequence.length%2));
    sequence.push(forwards);
    currentValue = forwards;
    stepAmount++;
    if(currentValue > largest) largest = currentValue;
  }
}


function draw() {
  background(0);
  translate(0,height/2);
  addSequence();
  //scaleAmount = lerp(scaleAmount, width/largest,0.05);
  scale(renderArcs);
  renderArcs();
}

function renderArcs(){
  for(let r of arclist){
    r.display();
  }
}

class rArc{
  constructor(start,end,direction){
    this.start =start; this.end = end;
    this.direction = direction;
  }
  display(){
    let diameter = abs(this.start - this.end);
    let x = (this.start + this.end)/2;
    strokeWeight(0.5);
    if(this.direction === 0){
      arc(x,0,diameter,diameter,0,PI);
    }
    else{
      arc(x,0,diameter,diameter,PI,0);
    }
  }
}
