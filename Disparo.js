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
  
    move() {
      this.y -= 8;
      if (this.y < 0) {
        this.ativo = false;
      }
    }
  
    display() {
      fill('yellow');
      ellipse(this.x+ cursorImg.width /2, this.y, 5, 10);
    }
  
    acertou(alvo) {
      return this.x > alvo.xNave && this.x < alvo.xNave + AlvoImg.width &&
             this.y > alvo.y && this.y < alvo.y + AlvoImg.height;
    }
  
  }