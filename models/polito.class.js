class Pollito extends MovableObject {
    width = 40;
    height = 40;
    y = 400;
    speed = 0.2;
    isDead = false;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_b†sico/Versi¢n_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_b†sico/Versi¢n_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_b†sico/Versi¢n_pollito/3.Paso_izquierdo.png'
    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_b†sico/Versi¢n_pollito/4.Muerte.png'
    ];

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_b†sico/Versi¢n_pollito/1.Paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 0;
        this.speed = 0.05 + Math.random() * 0.25;
        this.animate();

    };
    animate() {

        setInterval(() => {

            this.moveLeft();

        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead) {
                this.animateMovement(this.IMAGES_DEAD);
            } else {
                this.animateMovement(this.IMAGES_WALKING);
            }
        }, 200);
    }
}