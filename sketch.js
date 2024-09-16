//Variáveis//
let cursorImg;
let AlvoImg;
let meteoroImg;
let alvo;
let disparo;
let estrelas = [];
let vida = 3;
let pontuacao = 0
let laserImg;
let snd;
let InimigoImg;
let meteorImg;
let Inimigo2Img;
let laser;

//Função para carregar a imegem e deixar pronto pra uso//
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
}

function setup() {
  createCanvas(920,600);
  noCursor();
  //snd.loop();
  //criar um novo objetivo a partir dessa classe//
  nave = new Nave();
  disparo = new Disparo();
  meteoro = new Meteoro(); 
  nave2 = new Nave2();
  meteoro2 = new Meteoro2();
  nave3 = new Nave3();

  //for responsável por criar um lop e adiciona estrelas até chegar na quantidade desejada//
  for (let i = 0; i < 5; i++) {
    estrelas.push(new Estrela());
  }
  
}

function draw() {
  background('rgb(1,1,13)');
   
    // Verificar colisão entre o jogador e a nave inimiga
    nave.verificarColisao();
    nave2.verificarColisao();
    nave3.verificarColisao();
    
    meteoro.ColisaoMet();
    meteoro2.ColisaoMet();
  //move e desenhar na interface//
  nave.move();
  nave.display();
  nave2.move();
  nave2.display();
  nave3.move();
  nave3.display();
  
    meteoro.move();
    meteoro.display();
    meteoro2.move();
    meteoro2.display();

  if (disparo.ativo) {
    disparo.move();
    disparo.display();

    //if para verificar se acertou o alvo//
    if (disparo.acertou(nave)) {
      disparo.ativo = false;
      pontuacao++;
      nave.reset();
    }

    if (disparo.acertou(nave2)) {
      disparo.ativo = false;
      pontuacao++;
      nave2.reset();
    }

    if (disparo.acertou(nave3)) {
      disparo.ativo = false;
      pontuacao++;
      nave3.reset();
    }

    if (disparo.acertouMet(meteoro)) {
      disparo.ativo = false;
      meteoro.reset();
    }

    if (disparo.acertouMet(meteoro2)) {
      disparo.ativo = false;
      meteoro2.reset();
    }

  }

  for (let estrela of estrelas) {
    estrela.display();
    estrela.update();
  }

//verifica a saída dos meteoros 
   meteoro.verificaSaida();
   meteoro2.verificaSaida();
  
  //Verifica se o alvo saiu da tela ou não//
  nave.verificaSaida();
  nave2.verificaSaida();
  nave3.verificaSaida();

  //Objetivo é desenhar na interface//
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

// Desenha Game Over na tela//
function gameOver() {
  noLoop();
  fill('red');
  textSize(45);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
}