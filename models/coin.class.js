class Coin extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/8.Coin/Moneda3.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 64;
    }

    shiny(){
        
    }

    moving() {
        let a = this.up();
        let b;
        setTimeout(() => {
            clearInterval(a);
            b = setInterval(() => {
                this.y += 0.5;
            }, 10);
        }, 1000);
        setTimeout(() => {
            clearInterval(b);
            this.moving();
        }, 2000);
    }

    up() {
        return setInterval(() => {
            this.y -= 0.5;
        }, 10)
    }

}