function preload(){
  //pre-load images
pathImage=loadImage("path.png");
Jaxonrunning=loadAnimation("Runner-1.png","Runner-2.png")
}



function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200)
path.addImage("P",pathImage);
path.scale=1.2;
Jaxon=createSprite(200,360,30,30);
Jaxon.addAnimation("J",Jaxonrunning);
Jaxon.scale=0.1;
boundary= createSprite(50,50,15,705);
boundary.visible=false;
boundary=createSprite(350,360,15,725);
boundary.visible= false;
}

function draw() {
  background(0);
  path.velocityY=4;
  if (path.y>400) {
  path.y=height/2;
  }
  drawSprites()
 
}
