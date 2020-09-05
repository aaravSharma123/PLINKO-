const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World


var engine,world


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 200;

var ground;
var divisions;
var particles;

function setup() {
  createCanvas(800,600);
  engine = Engine.create()
  world = engine.world
  
  //division = new Divisions(100,400,10,40);
  ground = new Ground(400,595,800,10)
  for(var i=75;i<=width;i=i+75){
  plinkos.push(new Plinko(i,75))
  }
  for(var i=50;i<=width-10;i=i+75){
  plinkos.push(new Plinko(i,165))
  }
  for(var i=75;i<=width;i=i+75){
  plinkos.push(new Plinko(i,255))
  }
  for(var i=50;i<=width-10;i=i+75){
  plinkos.push(new Plinko(i,345))
  }
}

function draw() {
  background(0);  
 Engine.update(engine)
  
if(frameCount%30===0){
particles.push(new Particle(random(width/2-30,width/2+30),10,10))
}

for(var i=0;i<particles.length;i++){
particles[i].display();
}


  for(var k = 0; k<=width;k = k+80 ){
  divisions.push(new Divisions(k,height-divisionHeight/2,10, divisionHeight))
}
 
 ground.display();
 
 
 for(var i = 0;i<divisions.length;i++){
  divisions[i].display()
 }
 
 for(var i = 0;i<plinkos.length;i++){
   plinkos[i].display()
 }
 
  drawSprites();
}