

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = "white"
    base1= createSprite(width/2+200,620+29,200,20);
	base1.shapeColor = "yellow"
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width / 2,height-26, width, 10, {isStatic:true});
	World.add(world, ground);
	base2= new dust(width/2+100,620-10,20,100)
	base3= new dust(width/2+300,620-10,20,100)
	base4= new dust(width/2+200,649+13 ,200,25)
	//base5= new dust(200,650,200,20)
	p1= new paper(200,670)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  base1.display()
  base2.display()
  base3.display()
  //base5.display()
  p1.display()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(p1.body,p1.body.position,{x:60,y:-50});
	   

   }
   }