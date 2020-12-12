const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
 world = engine.world;

 var ground_options = {
   isStatic : true
 }

  ground = Bodies.rectangle(200,380,400,10,ground_options);
  World.add(world,ground);
  
  var ball_options ={
    restitution : 0.8
  }
  ball =Bodies.circle(200,50,30,ball_options);
  World.add(world,ball);
}

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,30);
}