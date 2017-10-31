// Code goes here

var canvasWidth = 500;
var canvasHeight = 20000;
var canvasColor;

function setup () {
  createCanvas(canvasWidth,canvasHeight);
  canvasColor = ('red');
  background(canvasColor);
}

function draw () {
for (var row = 0; row < canvasHeight; row+=2)
  {stroke('black');
  line(0,row,500,row)}
}

