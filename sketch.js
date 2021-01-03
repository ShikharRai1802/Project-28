
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1000,950,50,50);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  tree.display();

  drawSprites();
 
}



