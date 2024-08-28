class Nave {
  constructor(xNave, y) {
    this.xNave = random(50, 850);
    this.y = 0;
    this.raioColisao = 25;
  }

  verificarColisao() {
    // Calcula a distância entre a nave do jogador e a nave inimiga
    let distancia = dist(mouseX, mouseY, this.xNave, this.y);

    let raioNaveJogador = 25; 
    let raioTotal = this.raioColisao + raioNaveJogador;

    // Verifica se houve colisão
    if (distancia < raioTotal) {
      vida--;
      this.reset();
    }
  }

  move() {
    this.y++;
  }

  display() {
    image(AlvoImg, this.xNave, this.y);
  }

  reset() {
    this.xNave = random(50, 850);
    this.y = 0;
  }

  verificaSaida() {
    if (this.y > height) {
      this.reset();
      vida--;
    }
  }
}