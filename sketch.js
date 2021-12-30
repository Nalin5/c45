const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var backgroundImg;

function preload() {
backgroundImg = loadImage("Background.jpg");
}

function setup() {

  createCanvas(3000,1200);
   createSprite(800, 850, 800, 50);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  drawSprites();
}