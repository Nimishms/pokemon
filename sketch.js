var charizard,charizard1Img,charizard2Img,charizard3Img;
var charizard4Img,charizard5Img,charizard6Img,charizard7Img,charizard8Img,charizardImg;
var bgImg;
var script,scriptImg;
function preload(){
charizardImg = loadAnimation("charizard1.png","charizard2.png")
charizard1Img = loadAnimation("charizard1.png","charizard2.png")
charizard2Img = loadAnimation("charizard3.png","charizard4.png")
charizard3Img = loadAnimation("charizard5.png","charizard6.png")
charizard4Img = loadAnimation("charizaed7.png","charizard8.png")
bgImg = loadImage("loadingscreen.png")
//scriptImg = loadImage("pokemon.png");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  // script = createSprite()
  // script.addImage("script",scriptImg);
  // script.scale = 0.4
  charizard = createSprite(200,100)
  charizard.addAnimation("charizard",charizardImg)
  charizard.addAnimation("left",charizard2Img)
  charizard.addAnimation("right",charizard3Img)
  charizard.addAnimation("up",charizard4Img)
  charizard.addAnimation("down",charizard1Img)
}

function draw() {
  background(255,255,255); 
  
  if(keyDown("RIGHT_ARROW")){
    charizard.changeAnimation("right",charizard3Img)
    charizard.x = charizard.x + 10
    
      }
      if(keyDown("LEFT_ARROW")){
        charizard.changeAnimation("left",charizard2Img)
        charizard.x = charizard.x - 10


        
      }
      if(keyDown ("UP_ARROW")){
        charizard.changeAnimation("up",charizard4Img)
        charizard.y = charizard.y - 10
    
      }
      if(keyDown ("DOWN_ARROW")){
        charizard.changeAnimation("down",charizard1Img)
        charizard.y = charizard.y + 10
   
      }
  drawSprites();
}
function keyPressed(){
 
}
