var y = 5;
let cursorImg;
var disparoAtivo = false;
var xd;
var yd;

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

    //toda vez que o for pressionado é ativado//
    if(mouseIsPressed && ! disparoAtivo){
      disparoAtivo = true;
      yd = mouseY;
      xd = mouseX;
    }

    //tamanho e velocidade do disparo//
    if(disparoAtivo){
      ellipse(xd, yd, 5, 10);
        yd = yd -8;
        if(yd < 0){
          disparoAtivo = false;
        }
      }
  
  if(y > 400){
    x = random(50,350);
    y= 0;
  }
   
  image(cursorImg,mouseX,mouseY);
}
