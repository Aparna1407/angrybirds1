const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground, ball;

function setup() {
 var canvas= createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var options={
  isStatic:true
}
ground=Bodies.rectangle(100,300,300,10,options);

World.add(world,ground);

console.log(ground);
var ball_options={
  restitution:1
}
ball=Bodies.circle(100,20,50,ball_options);
World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,300,50);
ellipse(ball.position.x,ball.position.y,10,10);
}