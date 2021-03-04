var canvas;
var music;
var s1,s2,s3,s4,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    var s1 = createSprite(100,600,175,50);
    s1.shapeColor = "green";
    var s2 = createSprite(300,600,175,50);
    s2.shapeColor = "purple";
    var s3 = createSprite(500,600,175,50);
    s3.shapeColor = "magenta";
    var s4 = createSprite(700,600,175,50);
    s4.shapeColor = "blue";


    //create ball sprite and give velocity
    var ball = createSprite(random(50,750),200,35,35);
    ball.shapeColor = "white";
    ball.velocityY = 5;
}

function draw() {
    background(0);
    //create edgeSprite
    //createEdgeSprites();
    //ball.bounceOff(edges);
    ball.bounceOff(s1);
    ball.bounceOff(s2);
    ball.bounceOff(s3);
    ball.bounceOff(s4);

    

drawSprites();

    //add condition to check if ball touching surface and make it ball
    
     
    if(s1.isTouching(ball) && ball.bounceOff(s1)){ 
        ball.shapeColor = rgb(0,0,255); 
        music.play(); } 
        
    if(s2.isTouching(ball)){ 
        ball.shapeColor = rgb(255,128,0); 
        ball.velocityX = 0; 
        ball.velocityY = 0; 
        music.stop(); }



}
