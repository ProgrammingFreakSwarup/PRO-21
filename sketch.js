var car,weight,speed,speedy;
var wall;
var theta=60;
var defnm
var thk;
var p1,p2,p3,p4,p5;
function setup() {
  createCanvas(1000,200);
  wall=createSprite(750, 100, thk, 150);
  
  p1=createSprite(735,30,30,20);

  p2=createSprite(720,120,20,80);
  p3=createSprite(785,50,20,20);
  p4=createSprite(765,150,50,20);
  p5=createSprite(760,100,40,20);

  p1.shapeColor="black"
  p2.shapeColor="black"
  p3.shapeColor="black"
  p4.shapeColor="black"
  p5.shapeColor="black"
  weight=random(22,58);
  carty=createSprite(60,100,60,10);
  carty.shapeColor="grey"
  car=createSprite(90, 100, 20, 20,20,20);
  fill("white")
  car.draw = function() { ellipse(0,0,20,20) }

  car.velocityX=random(223,321);

  speed=car.velocityX
  thk=random(22,83);
  
}

function draw() {
  background("black");  
  carty.x=car.x-30;
  carty.y=car.y;
  drawSprites();
 
  isTouching();

}
 function isTouching(){
if(wall.x-car.x<=(car.width+wall.width)/2){
  car.velocityX=0;
  car.velocityY=0;
  defnm=Math.round(0.5*speed*speed*weight/(thk*thk*thk));
  if(defnm>10){
    wall.shapeColor="red";
  
  }
  
  if(defnm<=10){
    wall.shapeColor="lime";
  }
}
 }



