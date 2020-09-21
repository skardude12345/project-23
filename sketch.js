var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, friction:7, isStatic:true});
	World.add(world, packageBody);
	
	rec1 = Bodies.rectangle(300, 610, 20, 100, {isStatic: true});
	World.add(world, rec1);

	rec2 = Bodies.rectangle(400, 650, 200, 20, {isStatic: true});
	World.add(world, rec2);

	rec3 = Bodies.rectangle(500, 610, 20, 100, {isStatic: true});
	World.add(world, rec3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if (keyDown(DOWN_ARROW)){
	Body.setStatic(packageBody, false);
  }

  rectMode(CENTER);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  rec1rect = rect(rec1.position.x, rec1.position.y, 20, 100);
  rec2rect = rect(rec2.position.x, rec2.position.y, 200, 20);
  rec3rect = rect(rec3.position.x, rec3.position.y, 20, 100);
  


  drawSprites();
  
}





