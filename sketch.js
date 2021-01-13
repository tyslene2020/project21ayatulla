var canvas;
var music,edges;
var box, block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(120,550,150,20);
    block1.shapeColor="violet";
    block2=createSprite(310,550,150,20);
    block2.shapeColor="green";
    block3=createSprite(490,550,150,20);
    block3.shapeColor="red";
    block4=createSprite(670,550,150,20)
    block4.shapeColor="yellow";
    //create box sprite and give velocity
box=createSprite(random(10,800),10,10,10);
box.velocityY=5;
box.velocityX=4;
//music.play();

edges=createEdgeSprites();

}

function draw() {
    background(0);
    if(box.isTouching(edges[0]) || box.isTouching(edges[1]) || box.isTouching(edges[2]) || box.isTouching(edges[3])){
        box.bounceOff(edges[0]);
        box.bounceOff(edges[1]);
        box.bounceOff(edges[2]);
        box.bounceOff(edges[3]);

    }
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor = "violet";
        music.play();
    }

    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor = "green";
        music.play();
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = "yellow";
        music.play();
    }
    

drawSprites();

    //add condition to check if box touching surface and make it box
}
