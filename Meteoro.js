class Meteoro { //Meteoro inimigo//
  constructor(xMeteoro, y) {
    this.xMeteoro = random(0, 850);
    this.y = random(0, 150);
    this.raioM = 20;
    this.angulo = 0; 
  }

  ColisaoMet(){
    let comparacao = dist(mouseX, mouseY, this.xMeteoro, this.y);
    let raioNaveJogado = 25;
    let AreaTotal = this.raioM + raioNaveJogado; 
    if(comparacao < AreaTotal){
      vida--;
      this.reset();
    }
  }

  move() {
    this.y++;
    this.angulo += 0.05; 
  }
  
  display() {
    push();  
    translate(this.xMeteoro, this.y);  
    rotate(this.angulo);  
    imageMode(CENTER);  
    image(meteoroImg, 0, 0); 
    pop();  
  }

  reset() {
    this.xMeteoro = random(0, 850);
    this.y = random(0, 150);
  }

  verificaSaida() {
    if (this.y > height) {
      this.reset();
    }
  }
}