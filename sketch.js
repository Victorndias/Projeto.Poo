let cursorImg;
let AlvoImg;
let alvo;
let disparo;
let estrelas = [];
let vida = 3;
let pontuacao = 0;

function preload() {
  cursorImg = loadImage("nave.png");
  AlvoImg = loadImage("navets.png");
}

function setup() {
  createCanvas(900, 600);
  noCursor();
  alvo = new Alvo();
  disparo = new Disparo();

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

  alvo.verificaSaida();
  displayHUD();

  if (vida <= 0) {
    gameOver();
  }
}

function mousePressed() {
  if (!disparo.ativo) {
    disparo.ativar(mouseX, mouseY);
  }
}

class Alvo {
  constructor() {
    this.x = random(50, 850);
    this.y = 5;
  }

  move() {
    this.y++;
  }

  display() {
    image(AlvoImg, this.x, this.y);
  }

  reset() {
    this.x = random(50, 850);
    this.y = 0;
  }

  verificaSaida() {
    if (this.y > height) {
      this.reset();
      vida--;
    }
  }
}

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

  move() {
    this.y -= 8;
    if (this.y < 0) {
      this.ativo = false;
    }
  }

  display() {
    fill('yellow');
    ellipse(this.x+ cursorImg.width /2, this.y, 5, 10);
  }

  acertou(alvo) {
    return this.x > alvo.x && this.x < alvo.x + AlvoImg.width &&
           this.y > alvo.y && this.y < alvo.y + AlvoImg.height;
  }
}

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
}

function gameOver() {
  noLoop();
  fill('white');
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
}