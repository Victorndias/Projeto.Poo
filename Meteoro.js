class Meteoro { //Meteoro inimigo//
    constructor(xMeteoro, y) {
      this.xMeteoro = random(0, 850);
     this.y = random(0, 150);
     this.raioM = 25;
    }

    ColisaoMet(){
      let comparacao = dist(mouseX, mouseY, this.xMeteoro, this.y);
      let raioNaveJogado = 25;
      let AreaTotal = this.raioM + raioNaveJogado; 
      if(comparacao < AreaTotal){
        vida--;
        this.reset;
      }
    }

    move() {
      this.y++;
    }
    
    display() {
      image(meteoroImg, this.xMeteoro, this.y);
    }
    //reinicia e gerar uma posição aleatória//
    reset() {
      this.xMeteoro = random(0, 850);
     this.y = random(0, 150);
    }

    //verifica e reinicia o meteoro//
    verificaSaida() {
      if (this.y > height) {
        this.reset();
      }
    }
  }