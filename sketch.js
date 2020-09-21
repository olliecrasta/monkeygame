var back,ground,score;
var bananaI,obstacleI,obstacleG,backA,score,playerA,player;

var bananaG;

function preload(){
bananaI= loadImage("banana.png");
 obstacleI=loadImage("stone.png");
  backA = loadImage("jungle.jpg");
 playerA=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}
function setup() {
  createCanvas(400, 400);
  back=createSprite(200,200,600,600);
  back.addImage("back",backA);
 //back.x=back.width/2;
  back.scale= 0.55;
  ground = createSprite(200,350,400,20);
  
  ground.visible=false;
  
  player = createSprite(100,300,20,50);
  player.addAnimation("player",playerA);
  player.scale=0.12;
  
  bananaG = new Group();
  obstacleG = new Group();
 score = 0
}
    
function draw() {
  background(220);
  if(keyDown("space")){
     player.velocityY = -10; 
    
  }
  player.velocityY +=2;
  player.collide(ground);
  spawnBanana();
  spawnObstacle();
  if(player.isTouching(bananaG )){
   player.scale = player.scale +0.02         ; 
    score += 2;
    bananaG.destroyEach();
   
  }
   if(player.isTouching(obstacleG )){
   player.scale = 0.12;         ; 
    score -= 1 ;
    obstacleG.destroyEach();
   
  }
  drawSprites();
  fill("white");
  text.size=26;  
  text(score,350,350);
}

function spawnBanana(){
  if(frameCount%100 ===0){
  var banana = createSprite(400,Math.round(random(100,300)),10,10);
  banana.velocityX = -3;
    banana.scale=0.05; 
     banana.addImage(bananaI);                         banana.lifetime = 133;
    bananaG.add(banana);
  }

  
}
  
  function spawnObstacle(){
  if(frameCount%180 ===0){
  var obstacle = createSprite(400,Math.round(random(300,400)),10,10);
  obstacle.velocityX = -3;
    obstacle.scale=0.2            ; 
     obstacle.addImage(obstacleI);                         obstacle.lifetime = 133;
    obstacleG.add(obstacle);
  }

  
}