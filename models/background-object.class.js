class BackgroundObject extends MovableObject {

    y = 0;
    width = 720;
    height = 480;

    constructor(imgPath, x) {
        super().loadImage(imgPath);
        this.x = x;
        this.y = 480 - this.height;
    }

}