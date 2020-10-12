const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var base;
var block1,block2,block3,block4,block5,block6;
var polygon , polygonImage;
var sling;
var score ;
var bgColor;

function preload(){
  polygonImage = loadImage("hexagon.png");
}

function setup() {
  createCanvas(1300,600);
 
  bgColor = "white";

  score = 0;

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(650,500,1300,20);

  base = new Ground(1000,250,400,15);

  block1 = new Block(900,200,80,80);
  block2 = new Block(985,200,80,80);
  block3 = new Block(1070,200,80,80);
  block4 = new Block(942.5,120,80,80);
  block5 = new Block(1027.5,120,80,80);
  block6 = new Block(980,40,80,80);

  
  polygon = Bodies.circle(200,200,50,{friction : 1});
  World.add(world,polygon);

  sling = new Rope(polygon,200,100);

  Engine.run(engine);


}

function draw() {
  getBackGroundColor();
  background(bgColor);  
  
  Engine.update(engine);
  ground.display();

  base.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();

  //console.log(block1.body.speed);

  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,50,50);

  sling.display();

//console.log(score);
  text("Score : "+score,200,200);
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(polygon);

  }
}
async function getBackGroundColor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var time = responseJson.datetime.slice(11,13);
  console.log(time);
  if(time > 6 && time < 18 ){
      bgColor = "Blue";
  }else{
      bgColor = "lightBlue";
  }
}