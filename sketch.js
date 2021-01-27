function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,100,100);
  fixedRect.shapeColor="green";
  movingRect=createSprite(205,210,100,100); 
  movingRect.shapeColor="green";
  fixedRect.velocityX=2;
  gameObject=createSprite(100,200,100,100);
  gameObject.velocityX=2
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  
  drawSprites();
  BounceOff(gameObject,movingRect);
}
s