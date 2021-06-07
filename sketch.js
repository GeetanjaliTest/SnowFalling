const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var snowflakes = [];

function preload() {
    backgroundImg = loadImage("snow3.jpg");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;



}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    if(frameCount%5===0){
      snowflakes.push(new snow(random(10,750),10,10)) 
     }

     for (var i = 0; i <snowflakes.length; i++) {
      snowflakes[i].display();   
    }
  
}