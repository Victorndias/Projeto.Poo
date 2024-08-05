class Nave { //NAve ini
  
    constructor() {
      this.xNave = random(50, 850);
      this.y = 5;
    }
      move() {
      this.y++;
    }
      display() {
      image(AlvoImg, this.xNave, this.y);
    }
      reset() {
      this.xNave = random(50, 850);
      this.y = Math.random(0, 850);
    }
    verificaSaida() {
      if (this.y > height) {
        this.reset();
        vida--;
      }
    }
  }