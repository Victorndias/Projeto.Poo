//Variáveis//
let cursorImg;
let AlvoImg;
let alvo;
let estrelas = [];
let disparo;
let vida = 3;
let pontuacao = 0;

//Função para carregar a imegem e deixar pronto pra uso//
function preload() {
  cursorImg = loadImage("nave.png");
  AlvoImg = loadImage("navets.png");
}

function setup() {
  createCanvas(900, 600);
  noCursor();
  alvo = new Alvo();
  disparo = new Disparo();

  //for responsável por criar um lop e adiciona estrelas até chegar na quantidade desejada//
  for (let i = 0; i < 5; i++) {
    estrelas.push(new Estrela());
  }
}

function draw() {
  background('rgb(1,1,13)');

  alvo.move();
  alvo.display();

  if (disparo.ativo) {
    disparo.move();
    disparo.display();

    //Para verificar se a nave inimiga foi destruida e pontua//
    if (disparo.acertou(alvo)) {
      disparo.ativo = false;
      pontuacao++;
      alvo.reset();
    }
  }

  for (let estrela of estrelas) {
    estrela.display();
    estrela.update();
  }

  //Verifica se o alvo saiu da tela ou não//
  alvo.verificaSaida();
  //O objetivo mostra algumas coisa na interface//
  displayHUD();

  //IF para observar se a vida ficou menor ou igual a 0//
  if (vida <= 0) {
    gameOver();
  }
}

//função para verificar se o mouse foi pressionado, se sim a ação é efetuado//
function mousePressed() {
  if (!disparo.ativo) {
    disparo.ativar(mouseX, mouseY);
  }
}

//Classe Alvo//
class Alvo {
  constructor() {
    //Gerar uma possicão aleatória no eixo x//
    this.x = random(50, 850);
    this.y = 5;
  }

  //parte responsável pelo movimento da nave//
  move() {
    this.y++;
  }

  display() {
    image(AlvoImg, this.x, this.y);
  }

  reset() {
    //Gerar uma possicão aleatória no eixo x//
    this.x = random(50, 850);
    this.y = 0;
  }

  //Verifica se o objeto saiu das dimessão e diminui -1 na vida//
  verificaSaida() {
    if (this.y > height) {
      this.reset();
      vida--;
    }
  }
}

//Classe Disparo//
class Disparo {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.ativo = false;
  }

  ativar(x, y) {
    this.x = x;
    this.y = y;
    this.ativo = true;
  }

  //velocidade do disparo//
  move() {
    this.y -= 8;
    if (this.y < 0) {
      this.ativo = false;
    }
  }

  //Cor, tamanho e deixar centralizado o disparo da nave//
  display() {
    fill('yellow');
    ellipse(this.x+ cursorImg.width /2, this.y, 5, 10);
  }

  //Trecho responsável por verificar se acertou ou o alvo// 
  acertou(alvo) {
    return this.x > alvo.x && this.x < alvo.x + AlvoImg.width &&
           this.y > alvo.y && this.y < alvo.y + AlvoImg.height;
  }
}

//Classe Estrela//
class Estrela {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }

  update() {
    this.x = random(width);
    this.y = random(height);
  }

  display() {
    push();
    stroke('white');
    line(this.x, this.y, this.x + 1, this.y - 15);
    pop();
  }
}

function displayHUD() {
  // Desenha a imagem do cursor//
  image(cursorImg, mouseX, mouseY);

  // Desenha a barra de vida//
  fill('red');
  rect(10, 10, vida * 30, 20);
  noFill();
  stroke('white');
  rect(10, 10, 90, 20); // Moldura da barra de vida//

  // Desenha a pontuação//
  fill('white');
  textSize(16);
  text("Pontuação: " + pontuacao, 10, 50);
}

// Desenha Game Over na tela//
function gameOver() {
  noLoop();
  fill('white');
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
}