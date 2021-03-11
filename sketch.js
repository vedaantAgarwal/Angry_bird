const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, pig1, pig2, log1, log2, log3, log4, bird1, backgroundImage;

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(930, 395, 60, 60);
    box2 = new Box(1070, 395, 60, 60);
    pig1 = new Pig(1000, 395);
    //PI(radian)=180 degree
    log1 = new Log(1000, 300, 200, PI / 2);
    box3 = new Box(930, 210, 60, 60);
    box4 = new Box(1070, 210, 60, 60);
    pig2 = new Pig(1000, 200);
    log2 = new Log(1000, 175, 200, PI / 2);
    box5 = new Box(1000, 165, 60, 60);
    log3 = new Log(965, 155, 115, PI / 4);
    log4 = new Log(1035, 155, 115, -PI / 4);
    bird1 = new Bird(100, 100);
    ground = new Ground(600, height, 1200, 20);
}
function preload() {
    backgroundImage = loadImage("sprites/bg.png");
}

function draw() {
    background(backgroundImage);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    bird1.display();
    box5.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
}