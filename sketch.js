var x = 300;
var y = 200;
var x2 = 150;
var y2 = 150;
var x3 = 100;
var y3 = 300;
var speedx = 4;
var speedy = 6;
var kiaraBlue = 50;
var kiaraGreen = 255;
var kiaraRed = 50;


function setup(){
   createCanvas(700,500);
   background(255);
   kiaraBlue = random(0,255);
   kiaraGreen = random(0,255);
   kiaraRed = random(0,255);
}

function draw(){
  triangle(x,y,x2,x3,75,75);
  fill(kiaraBlue,0,kiaraRed,40);
  strokeWeight(4);
  stroke(0,10);
  move();
}


function move(){
    y = y + speedy;
    x = x + speedx;
    y2 = y2 + 5;
    x2 = x2 + 10;
    y3 = y3 + 15;
    x3 = x3 + 20;
    kiaraBlue = random(0,255);
    kiaraGreen = random(0,255);
    kiaraRed = random(0,255);
    
}


