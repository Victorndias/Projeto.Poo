// Variáveis globais
let cursorImg;
let AlvoImg;
let meteoroImg;
let alvo;
let disparo;
let estrelas = [];
let vida = 3;
let pontuacao = 0;
let laserImg;
let snd;
let InimigoImg;
let meteorImg;
let Inimigo2Img;
let laser;
let meteor3Img;
let naves = [];
let meteoros = []; 

function preload() {
  soundFormats('mp3','wav');
  snd = loadSound('sons/efeito.mp3');
  laser = loadSound('sons/laser.wav');
  meteoroImg = loadImage("images/Meteor1.png");
  cursorImg = loadImage("images/nave.png");
  AlvoImg = loadImage("images/navets.png");
  laserImg = loadImage("images/laser.png");
  InimigoImg = loadImage("images/sPlayer_0.png");
  meteorImg = loadImage("images/Meteor2.png");
  Inimigo2Img = loadImage("images/navets3.png");
  meteor3Img = loadImage("images/Meteor3.png"); 
}

function setup() {
  createCanvas(920,600);
  noCursor();
  snd.loop();

  naves.push(new Nave());
  naves.push(new Nave2());
  naves.push(new Nave3());

    meteoros.push(new Meteoro());
    meteoros.push(new Meteoro2());
    meteoros.push(new Meteoro3());

  // Adicionar estrelas
  for (let i = 0; i < 5; i++) {
    estrelas.push(new Estrela());
  }

  disparo = new Disparo();

}

function draw() {
  background('rgb(1,1,13)');

  // Iteração para todas as naves
  for (let nave of naves) {
    nave.move();
    nave.display();
    nave.verificarColisao();
    nave.verificaSaida();
  }

  // Iteração para todos os meteoros
  for (let meteoro of meteoros) {
    meteoro.move();
    meteoro.display();
    meteoro.verificaSaida();
    meteoro.ColisaoMet();
  }

  // Atualização das estrelas
  for (let estrela of estrelas) {
    estrela.display();
    estrela.update();
  }

  // Verifique se o disparo acertou alguma nave
  if (disparo.ativo) {
    disparo.move();
    disparo.display();

    for (let nave of naves) {
      if (disparo.acertou(nave)) {
        disparo.ativo = false;
        pontuacao++;
        nave.reset();
      }
    }
    
    for (let meteoro of meteoros) {
      if (disparo.acertouMet(meteoro)) {
        disparo.ativo = false;
        meteoro.reset();
      }
    }
  }

  displayHUD();
  
  if (vida <= 0) {
    gameOver();
  }
}

// Função para verificar se o mouse foi pressionado e efetuar a ação
function mousePressed() {
  if (!disparo.ativo) {
  disparo.ativar(mouseX, mouseY);
  }
  if (mouseButton === LEFT) {
  laser.play();
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

// Desenha Game Over na tela
function gameOver() {
  noLoop();
  fill('red');
  textSize(45);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
}