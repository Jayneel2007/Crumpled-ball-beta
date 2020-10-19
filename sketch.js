
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,700,2000,20);
	dustbin1 = new Dustbin(800,600,100, PI/-2)


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  ground.display();
  dustbin1.display();
 
}



