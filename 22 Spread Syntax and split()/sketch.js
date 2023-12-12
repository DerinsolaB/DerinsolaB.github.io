// Load Strings 
// Derinsola Bolaji
// Date
//
// Global Variables
let textFile;

function setup() {
  createCanvas(windowWidth, windowHeight);
  processText();
}

function preLoad(){
  textFile = loadStrings();
}

function processText(){
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  let splitChars = textFile[1].split("");
  print(splitChars);
}

function draw() {
  background(220);
}
