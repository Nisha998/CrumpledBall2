
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustBin;
var Ball;

var edge1, edge2, edge3;

function preload()
{	
dustBin = loadImage("Images/dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball = new Paper(100, 250);
	edge1 = new Dustbin(1050,650,180,15);
	edge2 = new Dustbin(970,565,20,180);
	edge3 = new Dustbin(1130,565,20,180);
	
	var ground_options = {
		isStatic:true
	}
	ground = Bodies.rectangle(600, 680, 1200, 20, ground_options);
	World.add(world, ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  drawSprites();

  edge1.display();
  edge2.display();
  edge3.display();
  Ball.display();
  image(dustBin, 950, 470, 200, 200);
  
  keyPressed();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(Ball.body, Ball.body.position, {x: 130, y:-145});
	}
}

