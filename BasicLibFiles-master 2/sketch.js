var player, playerImage;
var obstacles, obImage, ob2Img;
var gems, gemImage;
var goal; 

var PLAY=1;
var END=0;
var gameState = PLAY;      
var obstaclesGroup;
var gemsGroup   
var score;     






function preload() {



}
function setup() {

createCanvas(800,800);
//console.log(displayWidth)
//console.log(displayHeight)
player=createSprite(400,700, 50,50)

goal = createSprite(400,150,80,20)
goal.visible = false
  score = 0;
  gemsGroup = new Group();
  obstaclesGroup = new Group();
}
function draw() {
  background("pink");



  text("Score: " + score, 750,50)
  
if (gameState==PLAY){
  for(var i = 0; i< gemsGroup.length; i++){
    if(player.isTouching(gemsGroup.get(i))){
      gemsGroup.get(i).destroy();
      score= score+1
    }
  }
  if (keyDown(RIGHT_ARROW)){
    player.x=player.x+5
    //player.velocityY=0
    }
  
     if (keyDown(LEFT_ARROW)){
      player.x = player.x-5
      //player.velocityY=0
      }
  
  
    if (keyDown(UP_ARROW)){
      player.y=player.y-5
      //player.velocityY=0
      }
  
  
    if (keyDown(DOWN_ARROW)){
      player.y=player.y+5
      //player.velocityY=0
      }

      if(score < 20){
      spawnGems();
      obstaclesSpawn();
      }
      if(score >= 20){
        goal.visible = true;
if(player.isTouching(goal)){
  gameState = "win";
}
      }

      for(var i = 0; i< obstaclesGroup.length; i++){
        if(player.isTouching(obstaclesGroup.get(i))){
          obstaclesGroup.get(i).destroy();
          gameState=END;
        }
  
}

}

else if(gameState == END){ 

text("GAME OVER" ,400,400)
  
}

else{
  text("YOU WIN" ,400,400)
}




  drawSprites();
}

function spawnGems(){
if(frameCount %150 ===0){
var gem = createSprite(random(50,750),random(50,750),20,20)

gemsGroup.add(gem)
gem.lifetime = 100
}
}

function obstaclesSpawn(){
  if(frameCount %150 ===0){
  var obstacle = createSprite(random(50,750),random(50,750),20,20)
 
  obstaclesGroup.add(obstacle)
  obstacle.lifetime = 100
  }
  }

