// Code goes here

var canvasWidth = 500;
var canvasHeight = 500;
var canvasColor;

function setup () {
  createCanvas(canvasWidth,canvasHeight);
  canvasColor = ('white');
  background(canvasColor);
}

function draw(){
  line(0,(canvasHeight/2),canvasWidth,(canvasHeight/2));
  for (var row = 0; row < canvasHeight; row+=10){
  strokeWeight(5)
  line(0,row,canvasWidth,row);
  }
  rect(0,250,500,250)
  for (var col = 0; col < canvasWidth; col+=10){
    strokeWeight(5)
    line(col,(canvasHeight/2),col,canvasHeight)
  }
}