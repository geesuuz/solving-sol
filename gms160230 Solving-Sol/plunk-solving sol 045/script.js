// Code goes here

var canvasWidth = 850;
var canvasHeight = 500;
var canvasColor;

function setup () {
  createCanvas(canvasWidth,canvasHeight);
  canvasColor = ('white');
  background(canvasColor);
}
  
function draw () {
  for (var row = 0; row < canvasHeight; row+=10)
  {stroke('black');
  line(0,row,850,row)}
}