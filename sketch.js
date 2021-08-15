var backgroudImg,backgroud
var boy,boy_running
var stone,stoneImg
var tiger,tiger_running
var stonesGroup
var END=0
var PLAY=1
var gameState=PLAY
var score;
function preload(){
backgroudImg=loadImage("empty-background-nature-park-scenery_1308-50073.jpg")
boy_running=loadAnimation("boys 1.png","boys2.png","boys3.png","boys4.png");
tiger_running=loadAnimation("tiger1.png","tiger1.png","tiger2.png","tiger2.png")
stoneImg=loadImage("stone.png")
}

function setup() {
 createCanvas(500,400)
 
backgroud=createSprite(350,200,20,20)
backgroud.scale=2
backgroud.addImage("scenery",backgroudImg)
backgroud.velocityX=-3
boy=createSprite(200,350,20,20)
boy.addAnimation("boy running",boy_running)
boy.scale=0.5
tiger=createSprite(10,350,20,20)
tiger.addAnimation("tiger running",tiger_running)
tiger.scale=0.5
 
stonesGroup = new Group();



}

function draw() {
background(0);

if(backgroud.x < 0){
    backgroud.x=backgroud.width/2
}
  spawnstones();  
drawSprites();
}
function spawnstones()
{
 if(frameCount % 100 === 0){
   stone = createSprite(400,165,10,40);
     stone.addImage("stoneImg")
     stone.velocityX=-3
     
     stone.y = Math.round(random(10,60))

     stonesGroup.add(stone)


 }






}