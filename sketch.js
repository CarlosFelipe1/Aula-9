var cubo;

function setup() {
  createCanvas(600,600);
  cubo = createSprite(300, 300, 30, 30)
  cubo.shapeColor = color("white")
}

function draw() 
{
  background(30);
   if (keyIsDown (UP_ARROW)) {
    background("darkred")
   }

   if (keyIsDown (DOWN_ARROW)) {
    background("darkblue")
   }

   if (keyIsDown (RIGHT_ARROW)) {
    background("darkgreen")
   }
   
   if (keyIsDown (LEFT_ARROW)) {
    background("purple")
   }

  drawSprites();
}




