// Code goes here

var canvasWidth = 500;
var canvasHeight = 500;
var canvasColor;

function setup () {
  createCanvas(canvasWidth,canvasHeight);
  canvasColor = ('black');
  background(canvasColor);
  }

function draw () {
//vertical lines
for (var col = 0; col < canvasWidth; col+=25)
  {stroke('red');
  line((col-(canvasWidth/2)),0,(col-(canvasWidth/2)),canvasHeight);
  line((canvasWidth/2)+col,(canvasHeight/2),(canvasWidth/2)+col,canvasHeight);
}
//horizontal lines
for (var row = 0; row < canvasHeight; row+=25)
  {stroke('cyan');
  line(250,row,500,row);
  line(0,(canvasHeight/2)+row,(canvasWidth/2),(canvasHeight/2)+row);

//diagonal lines 1
  stroke('yellow');
  line(row,0,canvasWidth,(canvasHeight-row));
  line((canvasWidth/2)-row,0,canvasWidth-row,(canvasHeight/2));
  line(row,(canvasHeight/2)+col,(canvasWidth/2)+row,canvasHeight+col);
  line((canvasWidth/2),(canvasHeight/2)+col,(canvasWidth-row),canvasHeight);
  /*line(0,0,500,500);
  line(25,0,500,475);
  line(50,0,500,450);
  line(75,0,500,425);
  line(100,0,500,400);
  line(125,0,500,375);
  line(150,0,500,350);
  line(175,0,500,325);
  line(200,0,500,300);
  line(225,0,500,275);
  line(250,0,500,250);
  line(275,0,500,225);
  line(300,0,500,200);
  line(325,0,500,175);
  line(350,0,500,150);
  line(375,0,500,125);
  line(400,0,500,100);
  line(425,0,500,75);
  line(450,0,500,50);
  line(475,0,500,25);
  line(0,25,225,250);
  line(0,50,200,250);
  line(0,75,175,250);
  line(0,100,150,250);
  line(0,125,125,250);
  line(0,150,100,250);
  line(0,175,75,250);
  line(0,200,50,250);
  line(0,225,25,250);*/
  line(250,275,475,500);
  line(250,300,450,500);
  line(250,325,425,500);
  line(250,350,400,500);
  line(250,375,375,500);
  line(250,400,350,500);
  line(250,425,325,500);
  line(250,450,300,500);
  line(250,475,275,500);
//diagonal lines 2
  stroke('green');
  line(0,25,25,0);
  line(0,50,50,0);
  line(0,75,75,0);
  line(0,100,100,0);
  line(0,125,125,0);
  line(0,150,150,0);
  line(0,175,175,0);
  line(0,200,200,0);
  line(0,225,225,0);
  line(0,250,250,0);
  line(0,275,275,0);
  line(0,300,300,0);
  line(0,325,325,0);
  line(0,350,350,0);
  line(0,375,375,0);
  line(0,400,400,0);
  line(0,425,425,0);
  line(0,450,450,0);
  line(0,475,475,0);
  line(0,500,500,0);
  line(275,250,500,25);
  line(300,250,500,50);
  line(325,250,500,75);
  line(350,250,500,100);
  line(375,250,500,125);
  line(400,250,500,150);
  line(425,250,500,175);
  line(450,250,500,200);
  line(475,250,500,225);
  line(25,500,250,275);
  line(50,500,250,300);
  line(75,500,250,325);
  line(100,500,250,350);
  line(125,500,250,375);
  line(150,500,250,400);
  line(175,500,250,425);
  line(200,500,250,450);
  line(225,500,250,475);
  }
  //main divider lines
  stroke(255);
  strokeWeight(5)
  line((canvasWidth/2),0,(canvasHeight/2),canvasHeight);
  line(0,(canvasHeight/2),canvasWidth,(canvasHeight/2));
}
