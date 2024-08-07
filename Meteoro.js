class Meteoro { //Meteoro inimigo//
    constructor() {
      this.xMeteoro = random(40, 850);
     this.y = random(0, 150);
    }
    move() {
      this.y++;
    }
    
    display() {
      image(meteoroImg, this.xMeteoro, this.y);
    }
    //reinicia e gerar uma posição aleatória//
    reset() {
      this.xMeteoro = random(40, 850);
     this.y = random(0, 150);
    }

    //verifica e reinicia o meteoro//
    verificaSaida() {
      if (this.y > height) {
        this.reset();
      }
    }
  }