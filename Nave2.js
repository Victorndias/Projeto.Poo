class Nave2 extends Nave {
  constructor(x, y) {
    super(x, y);
  }

  display() {
    image(InimigoImg, this.xNave, this.y);
  }
}