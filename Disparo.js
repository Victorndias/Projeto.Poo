class Disparo {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.ativo = true;
    }
  
    ativar(x, y) {
      this.x = x;
      this.y = y;
      this.ativo = true;
    }
  
    //velocidade do disparo//
    move() {
      this.y -= 8;
      if (this.y < 0) {
        this.ativo = false;
      }
    }
    
    //Cor, tamanho e deixar centralizado o disparo da nave//
    display() {
      fill('yellow');
      ellipse(this.x+ cursorImg.width /2, this.y, 5, 10);
    }

    //Trecho responsável por verificar se acertou ou o alvo// 
    acertou(alvo) {
      return this.x > alvo.xNave/2 && this.x < alvo.xNave + AlvoImg.width/2 &&
             this.y > alvo.y && this.y < alvo.y + AlvoImg.height/2;
    }
  }