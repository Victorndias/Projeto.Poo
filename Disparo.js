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
  
  //Posição e centralizado o disparo da nave//
  display() {
    image(laserImg, this.x+ cursorImg.width /3, this.y+ cursorImg.height/2, 25, 25);
  }

  //Trecho responsável por verificar se acertou ou não o alvo// 
  acertou(alvo) {
    return this.x > alvo.xNave/2 && this.x < alvo.xNave + AlvoImg.width/2 &&
           this.y > alvo.y && this.y < alvo.y + AlvoImg.height/2;
  }

  acertouMet(meteoro) {
    return this.x > meteoro.xMeteoro/2 && this.x < meteoro.xMeteoro + meteoroImg.width/2 &&
           this.y > meteoro.y && this.y < meteoro.y + meteoroImg.height/2;
  }    
}