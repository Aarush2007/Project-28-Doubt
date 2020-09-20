
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground,stone,boy,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var mangoBodyPosition,stoneBodyPosition;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree();
	ground = new Ground();
	boy = new Human();
	mango1 = new Mango(windowWidth-500,windowHeight-450,30,30);
	stone = new Stone();

	slingShot = new Launcher(stone.body,{x: windowWidth-1300,y:windowHeight-300});
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(12,173,222);

  tree.display();
  ground.display();
  boy.display();
  mango1.display(90,80);
  /*mango2.display(90,80);
  mango3.display(90,80);
  mango4.display(90,80);
  mango5.display(90,80);
  mango6.display(90,80);
  mango7.display(90,80);
  mango8.display(90,80);*/

  stone.display();
  slingShot.display();

  detectCollision(stone,mango1);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone,{x:windowWidth-1270,y:windowHeight-300});
    slingShot.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if (distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango,false);
  }
}



