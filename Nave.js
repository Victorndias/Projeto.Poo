class Nave { //Nave inimiga//
    constructor() {
      //Gerar uma possicão aleatória no eixo x//
      this.xNave = random(50, 850);
      this.y = 0;
    }
    //parte responsável pelo movimento da nave//
      move() {
      this.y++;
    }
    //mostrar na interface//
      display() {
      image(AlvoImg, this.xNave, this.y);
    }
      //reinicia e gera um número aleatório//
      reset() {
      this.xNave = random(50, 850);
      this.y = Math.random(0, 850);
    }

    //verifica se a nave já saiu da tela e se sim diminui a vida do play//
    verificaSaida() {
      if (this.y > height) {
        this.reset();
        vida--;
      }
    }
  }