const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
constBody = Matter.Body

var engine, world;
var tower;
var ground;

function preload(){
  bgImg = loadImage("assets/background.gif")
}
function setup(){
  createCanvas(1200,600);

  engine = Engine.create()
  world = engine.world;

  //ground = new Ground(600, 580, 1200, 20);
  tower = new Tower(120, 340, 180, 330)

  cannon = new Cannon(130, 100, 200, 200)
}

function draw(){
  background(bgImg);
  
  Engine.update(engine);

  //ground.display()
  tower.display()
  cannon.display();
}

