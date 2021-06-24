const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world; 
var ball; 
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options = {
    isStatic:true
  }
  ground=Bodies.rectangle (200,350,400,20,options);
  World.add(world,ground);
  console.log(ground);
  var options2 = {
    restitution: 2
  }
 
ball=Bodies.circle (200,200,50,options2);
  World.add(world,ball);

}

function draw() {
  background(0);  
Engine.update(engine);


  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);



}

