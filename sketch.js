const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground1;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new ground(500,490,1000,20);
    box1 = new box(600, 350, 70, 70);
    box2 = new box(760, 350, 70, 70);
    pig1 = new pig(680, 350);
    log1 = new log(680, 280, 230, PI/2)
    box3 = new box(600, 170, 70, 70);
    box4 = new box(760, 170, 70, 70);
    pig2 = new pig(680, 200);
    log2 = new log(680, 150, 230, PI/2)
    box5 = new box(680, 50, 70, 70)
    log3 = new log(610, 10, 130, PI/11)
    log4 = new log(780, 10, 130, -PI/11)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}