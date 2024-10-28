class Nave2 extends Nave {
  constructor(x, y) {
    super(x, y);
    this.velocidade = 0.5;
    this.direcao = 0.5;
  }

  display() {
    image(InimigoImg, this.xNave, this.y);
  }

  move(){
    if (this.xNave < width && this.direcao === 0.5) {
      this.xNave += this.velocidade;
    } else if (this.xNave >= width) {
      this.direcao = -0.5;
    } else if (this.xNave <= 0) {
      this.direcao = 0.5;
    }
    this.xNave += this.direcao;
    this.y += this.velocidade;
  }
}