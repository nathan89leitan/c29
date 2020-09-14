function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(800,10,400,1)
  stand = new Ground(100,10,400,30)
  box1 = new Box(40,40,300,40)
  box2 = new Box(40,40,340,40)
  box3 = new Box(40,40,380,40)
  box4 = new Box(40,40,420,40)
  box5 = new Box(40,40,320,80)
  box6 = new Box(40,40,360,80)
  box7 = new Box(40,40,400,80)
  box8 = new Box(40,40,340,120)
  box9 = new Box(40,40,380,120)
  box10 = new Box(40,40,260,160)

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{})

  imageMode(CENTER)
}

function draw() {
  background(255,255,255);  
  ground.display();
  stand.display();
  box1.display();
  box2.display();
  box4.display();
  box3.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display(); 
  box9.display();
  box10.display();
  drawSprites();
}
function mouseReleased(){
  SlingShot.fly();
  gameState="launch"
}

function keyPressed(){
  if(keyCode===32 && polygon.body.speed<1){
      polygon.trajectory=[];
      Matter.Body.setPosition(polygon.body,{x:200,y:50})
      slingshot.attach(polygon.body)
      gameState="onSling"
      }
}