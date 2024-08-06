class Meteoro { //Meteoro in
    constructor() {
      this.xMeteoro = random(40, 850);
     this.y = random(0, 150);;
    }
    move() {
      this.y++;
    }
    display() {
      image(meteoroImg, this.xMeteoro, this.y);
    }
    reset() {
      this.xMeteoro = random(40, 850);
     this.y = random(0, 150);;
    }
    verificaSaida() {
      if (this.y > height) {
        this.reset();
      }
    }
  }