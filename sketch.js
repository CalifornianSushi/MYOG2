
var bg;
var pc1;
var obstacle1;
var obstacle2;
var obstacle3;

function preload() {
  bg = loadImage("background.jpeg");
  pc1 = loadImage("pc.png");
  obstacle1 = loadImage("pixil-frame-0.png");
  obstacle2 = loadImage("knife.png");
  obstacle3 = loadImage("redball.png");
  obstacle4 = loadImage("");
}

function setup() {
 createCanvas(800,400);

  // PC
  character = createSprite(150,300,50,50);
  character.addImage(pc1);
  character.scale = 0.6;

  // NPC First Obstacle
  obstacle01 = createSprite(100,100,50,50);
  obstacle01.addImage(obstacle1);
  obstacle01.scale = 0.8;

  // NPC Second Obstacle
  obstacle02 = createSprite(100,200,50,50)
  obstacle02.addImage(obstacle2);
  obstacle02.scale = 2;

  // NPC Third Obstacle 
  obstacle03 = createSprite(300,200,50,50);
  obstacle03.addImage(obstacle3);
  obstacle03.scale = 2;
}

function draw() {
  background(bg);  
  drawSprites();
}