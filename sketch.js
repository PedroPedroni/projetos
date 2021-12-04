var btn_brown;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  btn_brown = createButton("BROWN");
  btn_brown.position(100,50);
  btn_brown.mousePressed(brown_bg);
  
  
  btn_blue = createButton("BLUE");
  btn_blue.position(250,50);
  btn_blue.mousePressed(blue_bg);
  
}

function draw() {
  background(r,g,b);
}


function brown_bg()
{
  r = 150;
  g = 100;
  b =0;
}

function blue_bg()
{
  r = 0;
  g = 0;
  b =250;
}