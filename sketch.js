var y = 5;
let cursorImg;
var disparoAtivo = false;
var xd;
var yd;
let lineX = 0;
let lineY = 0;
let vida = 3;
let pontuacao = 0;

function preload(){
  cursorImg = loadImage("nave.png");
}
function setup() {
  createCanvas(400, 400);
  x = random(50,350);
  noCursor();
}

function draw() {
  background('rgb(1,1,13)');
  
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

      //animação da velocidade das estrelas no fundo//
      push();
      stroke('white');
      line(lineX, lineY, lineX +2, lineY -30);
      lineX = random(width);
      lineY = random(height);
      pop();
  
  if(y > 400){
    x = random(50,350);
    y= 0;
  }
   
  image(cursorImg,mouseX,mouseY);
  
  // Desenha a barra de vida
  fill('red');
  rect(10, 10, vida * 30, 20);
  noFill();
  stroke('white');
  rect(10, 10, 90, 20); // Moldura da barra de vida

  // Desenha a pontuação
  fill('white');
  textSize(16);
  text("Pontuação: " + pontuacao, 10, 50);

  // Verifica se a vida chegou a 0
  if (vida <= 0) {
    noLoop();
    fill('white');
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
  }
}
