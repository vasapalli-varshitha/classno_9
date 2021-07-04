var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}


function draw() 
{
   background(30);
   box.shapeColor="green";

  if(keyDown(UP_ARROW)){
    box.velocityY=-3;
    box.shapeColor="red";
  }
  if(keyDown(DOWN_ARROW)){
    box.velocityY=3;
    box.shapeColor="pink";
  }
  if(keyDown(RIGHT_ARROW)){
   box.velocityX=3;
   box.shapeColor="blue";
  }
  if(keyDown(LEFT_ARROW)){
    box.velocityX=-3;
    box.shapeColor="yellow";
   }

  drawSprites();
}




