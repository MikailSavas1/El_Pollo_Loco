class Pollito extends MovableObject {
    width = 65;
    height = 65;
    y = 360;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_b†sico/Versi¢n_pollito/4.Muerte.png'
    ];

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = Math.random() * 2500;
        this.speed = 0.01 + Math.random() * 1.75;
        this.animate();
    };

    animate() {

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 175);
    }
}