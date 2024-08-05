let cursorImg;
let AlvoImg;
let meteoroImg;
let alvo;
let disparo;
let estrelas = [];
let vida = 3;
let pontuacao = 0;

function preload() {
  meteoroImg = loadImage("Meteor1.png");
  cursorImg = loadImage("nave.png");
  AlvoImg = loadImage("navets.png");
}

function setup() {
  createCanvas(920,600);
  noCursor();
  meteoro = new Meteoro();
  meteoro2 = new Meteoro();
  meteoro3 = new Meteoro();
  meteoro4 = new Meteoro();

  nave = new Nave();

  disparo = new Disparo();

  for (let i = 0; i < 5; i++) {
    estrelas.push(new Estrela());
  }
}

function draw() {
  background('rgb(1,1,13)');

  nave.move();
  nave.display();
  meteoro.move();
  meteoro.display();
  meteoro2.move();
  meteoro2.display();
  meteoro3.move();
  meteoro3.display();
  meteoro4.move();
  meteoro4.display();

  if (disparo.ativo) {
    disparo.move();
    disparo.display();
    
    if (disparo.acertou(nave)) {
      disparo.ativo = false;
      pontuacao++;
      nave.reset();
    }
  }

  for (let estrela of estrelas) {
    estrela.display();
    estrela.update();
  }

  meteoro.verificaSaida();
  nave.verificaSaida();

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

class Meteoro { //Meteoro ini

  constructor() {
    this.xMeteoro = random(40, 850);
   this.y = random(0, 150);;
  }
  move() {
    this.y++;
  }
  display() {
    image(meteoroImg, this.xMeteoro, this.y);
  }
  reset() {
    this.xMeteoro = random(40, 850);
   this.y = random(0, 150);;
  }
  verificaSaida() {
    if (this.y > height) {
      this.reset();
    }
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
  textSize(15);
  text("Pontuação: " + pontuacao, 10, 50);
}

function gameOver() {
  noLoop();
  fill('red');
  textSize(45);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
}