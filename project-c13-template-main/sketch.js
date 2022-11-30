var garden,rabbit;
var gardenImg,rabbitImg;
var orangeL,redL,apple

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  var select_sprites= Math.round(random(1,3));
   
     if (frameCount % 20 == 0) {
       if (select_sprites == 1) {
        createApples();
       }
       else if (select_sprites == 2) {
        createOrange();
       }else {
        createRed();
       }
     }
     
     rabbit.x = World.mouseX;
 


  edges= createEdgeSprites();
  rabbit.collide(edges);




  drawSprites();
  
}
//eu não faço ideia do por que não esta caindo
function createApples() {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.veIocityY=2;
  apple.lifetine = 150;
}
function createOrange() {
  orangeL = createSprite(random(50,350),40,10,10)
  orangeL.addImage(orangeImg);
  orangeL.scale=0.08;
  orangeL.veIocityY=2;
  orangeL.lifetine = 150;
}
function createRed() {
  redL = createSprite(random(50,350),40,10,10)
  redL.addImage(redImg);
  redL.scale=0.06;
  redL.veIocityY=2;
  redL.lifetine = 150;
}