var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object1 = createSprite(200, 500, 70, 90);
  object1.shapeColor = "pink";
  object1.debug = true;
  object2 = createSprite(700, 500, 60, 80);
  object2.shapeColor = "purple";
  object2.debug = true;
  object2.velocityX = -5;
  object1.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect,fixedRect);
  bounceoff(object2,object1);
  drawSprites();
}

