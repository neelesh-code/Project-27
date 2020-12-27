
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5
var roof1, rope1

function preload()
{
	
}

function setup() {
	createCanvas(1000, 875);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1= new Roof(500,200,500,50)

	bob1= new Bob(300,800,50);
	bob2= new Bob(400,800,50);
	bob3= new Bob(500,800,50);
	bob4= new Bob(600,800,50);
	bob5=new Bob(700,800,50);

	rope1= new Rope(bob1.body, {x:300,y:200});
	rope2= new Rope(bob2.body, {x:400,y:200});
	rope3= new Rope(bob3.body, {x:500,y:200});
	rope4= new Rope(bob4.body, {x:600,y:200});
	rope5= new Rope(bob5.body, {x:700,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

 roof1.display();



  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
}

function keyPressed(){

	if(keyCode === LEFT_ARROW){
		console.log("left arrow");
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-600, y: -320});
	}

	if (keyCode === RIGHT_ARROW) 
	{
	  Matter.Body.applyForce(bob5.body, bob5.body.position, {x:300, y:-180}); 
	}
}
