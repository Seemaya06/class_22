const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object1;
var object2;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create(); //
  world = engine.world;

  object1 = Bodies.rectangle(100,100,50,50);
  World.add(world,object1)

  object2 = Bodies.rectangle(200,200,50,50);
  World.add(world,object2)
 


  
}

function draw() {
  background(0,0,0);  
  rectMode(CENTER)
  rect(object1.position.x,object1.position.y,50,50);
  rect(object2.position.x,object2.position.y,50,50);
  
}