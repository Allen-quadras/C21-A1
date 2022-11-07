const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  button1=createImg("right.png")
  button1.size(50,50)
  button1.position(40,100)
  button1.mouseClicked(h)

  button2=createImg("up.png")
  button2.size(50,50)
  button2.position(220,50)
  button2.mouseClicked(v)
  var options={
    restitution:0.9
  }
  ball=Bodies.circle(200,200,20,options)
World.add(world,ball)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20)
}
function h(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
}
function v(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01})
}

