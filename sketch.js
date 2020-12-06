const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1, base2;
var polygon;
var slingshot;

function preload() {
    polygon = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // bases
    base1  = new Ground(600,height,1200,20);
    base2  = new Ground(600,height,1200,40);

    //blocks
    block1 = new block(810,180,300, PI/2);
    //block2 = new block()

    //polygon holder with sticks
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)

    //slingshot
    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    Engine.update(engine);
    strokeWeight(4);
    polygon.dislpay();
    base1.display();
    base2.display();
    block1.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
