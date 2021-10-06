
var manImg,bgImg
var man






function preload(){

    manImg = loadAnimation("MAN 1.png","MAN 2 (2).png","MAN 4.png","MAN 3.png")
    bgImg = loadImage("BACKGROUND CAVE.JPG")
}

function setup(){
 createCanvas(windowWidth,windowHeight)
    ground = createSprite(displayWidth/2-50,displayHeight/2-60,20,20);
  ground.addImage("bgImg",bgImg);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  ground.scale = 3
  
  boy = createSprite(119,428,20,20)
  boy.addAnimation("manImg",manImg);
  boy.scale = 1.5

  invisibleGround = createSprite(353,531,6000,10);
  invisibleGround.visible = false;
}

function draw(){
    background(0)
    if (ground.x < 0){
        ground.x = ground.width/2;
      }
      text(mouseX+"x" +mouseY+"y",mouseX-10,mouseY);
      if(keyDown("space")) {
        boy.velocityY = -10;
      }
      boy.velocityY = boy.velocityY + 0.8
      boy.collide(invisibleGround);
    drawSprites()
}

