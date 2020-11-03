function bounceoff(Box1,Box2)
{

  if (Box1.x - Box2.x < Box2.width/2 + Box1.width/2
    && Box2.x - Box1.x < Box2.width/2 + Box1.width/2) {
  Box1.velocityX = Box1.velocityX * (-1);
  Box2.velocityX = Box2.velocityX * (-1);
}
if (Box1.y - Box2.y < Box2.height/2 + Box1.height/2
  && Box2.y - Box1.y < Box2.height/2 + Box1.height/2){
  Box1.velocityY = Box1.velocityY * (-1);
  Box2.velocityY = Box2.velocityY * (-1);
}

}