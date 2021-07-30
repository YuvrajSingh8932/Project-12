var jaxon,jaxon_running;
var track,right_boundary,left_boundary,trackImage;
var coin,coinImage;
function preload() {
  jaxon_running=loadAnimation("Runner-1.png","Runner-2.png");
  trackImage=loadImage("path.png");
  coinImage=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  track=createSprite(200,200);
  track.addImage(trackImage);
  track.velocityY=5;
  track.y=track.height/30;
  jaxon=createSprite(180,340,50,70);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale=0.1;
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3;
  right_boundary=createSprite(0,300,100,600);
  left_boundary=createSprite(390,300,80,600);
 right_boundary.visible=false;
left_boundary.visible=false;
}

function draw() {
  track.velocityY=5;
  jaxon.x=World.mouseX;
  if(track.y>400) {
  track.y=height/2 ;
 
  
}
  jaxon.collide(left_boundary);
  jaxon.collide(right_boundary);
  edges=createEdgeSprites();
  jaxon.collide(edges[3]);
drawSprites();
}


