class Meteoro3 extends Meteoro {
  constructor(x, y){
      super(x, y);
      this.y = random(600, 600);
  }
  
  move(){
    this.xMeteoro++;
    this.angulo -= 0.08;
  }
}