// Code goes here

var canvasWidth = 300;
var canvasHeight = 200;
var canvasColor;

function setup () {
  createCanvas(canvasWidth,canvasHeight);
  canvasColor = ('white');
  background(canvasColor);
  }
  
function draw () {
//main divider lines
  stroke('black');
  line(0,0,300,0);
  line(299,0,299,200);
  line(300,199,0,199);
  line(0,200,0,0);
  line(20,0,20,200);
  line(40,0,40,200);
  line(60,0,60,200);
  line(80,0,80,200);
  line(100,0,100,200);
  line(120,0,120,200);
  line(140,0,140,200);
  line(160,0,160,200);
  line(180,0,180,200);
  line(200,0,200,200);
  line(220,0,220,200);
  line(240,0,240,200);
  line(260,0,260,200);
  line(280,0,280,200);
  line(300,0,300,200);
//sect. 1
  line(10,0,10,200);
//sect. 2
  stroke('yellow');
  line(20,100,40,100);
//sect. 3
  stroke('red');
  line(40,200,60,0);
//sect. 4
  stroke('blue');
  line(60,0,80,200);
//sect. 5
  line(90,0,90,200);
  stroke('yellow');
  line(80,100,100,100);
//sect. 6
  stroke('black');
  line(110,0,110,200);
  stroke('red');
  line(100,200,120,0);
//sect. 7
  stroke('black');
  line(130,0,130,200);
  stroke('blue');
  line(120,0,140,200);
//sect. 8
  stroke('red');
  line(140,200,160,0);
  stroke('yellow');
  line(140,100,180,100);
//sect. 9
  stroke('blue');
  line(160,0,180,200);
//sect. 10
  line(180,0,200,200);
  stroke('red');
  line(200,0,180,200);
//sect. 11
  line(220,0,200,200);
  stroke('yellow');
  line(200,100,220,100);
  stroke('black');
  line(210,0,210,200);
//sect. 12
  line(230,0,230,200);
  stroke('yellow');
  line(220,100,240,100);
  stroke('blue');
  line(240,0,220,200);
//sect. 13
  stroke('black');
  line(250,0,250,200);
  stroke('red');
  line(240,0,260,200);
  stroke('blue');
  line(260,0,240,200);
//sect. 14
  stroke('yellow');
  line(260,100,280,100);
  stroke('red');
  line(260,0,280,200);
  stroke('blue');
  line(280,0,260,200);
//sect. 15
  line(300,0,280,200);
  stroke('red');
  line(280,0,300,200);
  stroke('yellow');
  line(280,100,300,100);
  stroke('black');
  line(290,0,290,200);
}