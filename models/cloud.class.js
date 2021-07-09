class Cloud extends MovableObject {

    y = 0;
    height = 405;
    width = 720; 
    speed = 0.2;

    constructor(imgPath, x) {
        super().loadImage(imgPath);
        this.x = x;
        this.animate();
    }

    /**
     * animates the clouds moving left
     * static img that moves just left
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

}