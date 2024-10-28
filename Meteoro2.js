class Meteoro2 extends Meteoro {
  constructor(x, y) {
    super(x, y);
    this.velocidadeX = random(-1, 1); 
    this.velocidadeY = 1; 
  }

  move() {
    this.xMeteoro += this.velocidadeX * 1.5; 
    this.y += this.velocidadeY * 1.5; 
    this.angulo += 0.1; 
  }
}