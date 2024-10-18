class Nave3 extends Nave {
  constructor(x, y) {
    super(x, y);
  }

  display() {
    image(Inimigo2Img, this.xNave, this.y);
  }
}