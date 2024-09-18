class Meteoro3 extends Meteoro {
    constructor(x, y){
        super(x, y);
    }
    display() {
        image(meteor3Img, this.xMeteoro, this.y);
    }
}