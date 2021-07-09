class Bottle extends DrawableObject {

    IMAGES_BOTTLE_IN_SAND = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png',
    ];

    constructor() {
        let i = Math.round(Math.random() + 0.01);
        super().loadImage(this.IMAGES_BOTTLE_IN_SAND[i]);
        this.x = Math.random() * 2100 + 500;
        this.y = 355 + Math.random() * 5;
        this.height = 70;
        this.width = 70;
    }
}