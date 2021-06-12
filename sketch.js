const Engine= Matter.Engine
const Bodies= Matter.Bodies
const World= Matter.World
const Constraint= Matter.Constraint


function setup() {
  createCanvas(1200,400);
  
  engine= Engine.create()
  world= engine.world

  Engine.run (engine)

  
}
function draw() {
  background(0);  
  

}

