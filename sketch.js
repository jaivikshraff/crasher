var weight,speed;
var wall,car;

function setup(){
 createCanvas(1600,400);
  car = createSprite(300, 200, 50, 50);
  car.shapeColor="white"
  wall = createSprite(1400,200,60,200)
speed=random(50,90);
weight=random(400,1500);
car.velocityX = speed;
}

function draw() {
  background(0);  
  if(wall.x-car.x<(car.width-wall.width))
  {
    car.velocityX=0;
    var defomation = weight * speed* speed/22509
  if(defomation>180) 
  {
  car.shapeColor=color(255,0,0)
  }
  
  if(defomation<180 && defomation>100) 
  {
  car.shapeColor=color(230,230,0)
  }
  
  if(defomation<100) 
  {
  car.shapeColor=color(0,255,0)
  }
  
  }

  drawSprites();
}