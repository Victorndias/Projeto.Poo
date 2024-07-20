var y = 5;
let cursorImg;

function preload(){
  cursorImg = loadImage("nave.png");
}
function setup() {
  createCanvas(400, 400);
  x = random(50,350);
  noCursor();
}

function draw() {
  background('blue');
  
  rect(x,y,15,50);
    y++;
  
  if(y > 400){
    x = random(50,350);
    y= 0;
  }
   
  image(cursorImg,mouseX,mouseY);
}
