class ThrowableObject extends MovableObject {

    IMAGES_ROTATION = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_SPLASH = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];

    height = 65;
    width = 65;

    isCracked = false;
    cracked_sound = new Audio('audio/cracked_bottle.mp3');

    the_throw;

    constructor(x, y) {
        super().loadImage('img/6.botella/1.Marcador.png');
        this.loadImages(this.IMAGES_ROTATION);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x + 70;
        this.y = y + 50;
        this.applyGravity();
        this.throw();
        this.animate();
    }

    throw() {
        this.speedY = 19;

        this.the_throw = setInterval(() => {
            this.x += 8.5;
        }, 15);
    }

    animate() {

        setInterval(() => {
            if (this.isCracked || !this.isAboveGround()) {
                this.splashSalsaTabasco();
            } else {
                this.playAnimation(this.IMAGES_ROTATION);
            }

        }, 90);
    }

    isCollidingFromUp(mo) {
        return this.x >= mo.x &&  // x1
            this.x + this.width <= mo.x + mo.width && // x2
            this.y + this.height > mo.y && // y1
            this.y < mo.y + mo.height; // y2
    }

    splash_audio_sound_count = 0;
    splashSalsaTabasco() {
        if (this.splash_audio_sound_count != 1) {
            this.cracked_sound.play();
            this.splash_audio_sound_count++
        }
        clearInterval(this.gravitation);
        clearInterval(this.the_throw);
        this.playAnimation(this.IMAGES_SPLASH);
        setTimeout(() => {
            this.height = 0;
            this.width = 0;
        }, 500);
    }
}