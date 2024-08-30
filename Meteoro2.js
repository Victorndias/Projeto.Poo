class Meteoro2 extends Meteoro {
    constructor(x, y){
        super(x, y);
    }
    display() {
        image(meteorImg, this.xMeteoro, this.y);
    }
}