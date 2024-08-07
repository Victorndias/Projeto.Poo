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