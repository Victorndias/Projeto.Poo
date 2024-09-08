class Nave3 extends Nave {
  constructor(x, y) {
    super(x, y);
    this.velocidade = 1;
    this.direcao = 1;

  }

  display() {
    image(Inimigo2Img, this.xNave, this.y);
  }
  move() {
    if (this.xNave < width && this.direcao === 1) {
      this.xNave += this.velocidade;
    } else if (this.xNave >= width) {
      this.direcao = -1;
    } else if (this.xNave <= 0) {
      this.direcao = 1;
    }
    this.xNave += this.direcao;
    this.y += this.velocidade;

  }
}