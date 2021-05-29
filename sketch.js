
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,dustbinObj1,groundObject,paperObject;
var engine,world;
var dustBin,dustBinImg;

function preload(){
	dustBinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600,700);

	dustBin = createSprite(1200,545,200,213);
	dustBin.addImage(dustBinImg);
	dustBin.scale = 0.72;

	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1200,650);
	paperObject = new Paper(250,665,40,40);
}

function draw() {
  background(230);

  Engine.update(engine);
 
  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:150,y:-100});
   }
}
