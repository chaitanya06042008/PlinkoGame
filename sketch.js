const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world, particleArray;
particleArray=[]
plinko = []
function setup() {
  var canvas = createCanvas(620,800);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(310,780,620,20)
    division1 = new Ground(10,670,20,300)
    division2 = new Ground(160,670,20,300)
    division3 = new Ground(310,670,20,300)
    division4 = new Ground(460,670,20,300)
    division5 = new Ground(610,670,20,300)
    division6 = new Ground(10,670,20,300)
    for (i=50; i<=width;i+=50){
      plinko.push(new Plinko(i, 75, 15))
    }
    for (i=50; i<=width; i+=50){
      plinko.push(new Plinko(i, 175, 15))
    }
    for (i=50; i<=width; i+=50){
      plinko.push(new Plinko(i, 275, 15))
    }
    for (i=50; i<=width; i+=50){
      plinko.push(new Plinko(i, 375, 15))
    }



    //plinko = new Plinko(30, 100, 30)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine)
  
  background(0);  
  drawSprites();
  if(frameCount%60===0){
   // particle = new Particle(310, 0, 40)
    particleArray.push( new Particle(random(20, 600), 10, 10))
  }
  for(var i =0;i<particleArray.length; i++){
particleArray[i].display()
  }
  for(var i =0;i<plinko.length; i++){
    plinko[i].display()
      }
  ground.display();
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  
//particle.display()
}