var y = 5;
let cursorImg;
var disparoAtivo = false;
var xd;
var yd;
let lineX = 0;
let lineY = 0;
let vida = 3;
let pontuacao = 0;
var x;

function preload() {
  cursorImg = loadImage("nave.png");
}

function setup() {
  createCanvas(400, 400);
  x = random(50, 350);
  noCursor();
}

function draw() {
  background('rgb(1,1,13)');
  
  // Desenha o alvo
  fill('red');
  rect(x, y, 15, 50);
  y++;
  
  // Verifica se o disparo está ativo e desenha o disparo
  if (disparoAtivo) {
    fill('yellow');
    ellipse(xd, yd, 5, 10);
    yd = yd - 8;
    
    // Verifica se o disparo saiu da tela
    if (yd < 0) {
      disparoAtivo = false;
    } 
    // Verifica se o disparo acertou o alvo
    else if (xd > x && xd < x + 15 && yd > y && yd < y + 50) {
      disparoAtivo = false;
      pontuacao++;
      x = random(50, 350);
      y = 0;
    }
  }

  // Animação das estrelas
  push();
  stroke('white');
  line(lineX, lineY, lineX + 2, lineY - 30);
  lineX = random(width);
  lineY = random(height);
  pop();
  
  // Verifica se o alvo saiu da tela
  if (y > 400) {
    x = random(50, 350);
    y = 0;
    vida--;
  }
  
  // Desenha a imagem do cursor
  image(cursorImg, mouseX, mouseY);
  
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

function mousePressed() {
  if (!disparoAtivo) {
    disparoAtivo = true;
    yd = mouseY;
    xd = mouseX + cursorImg.width /2;
  }
}
