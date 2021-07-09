class Chicken extends MovableObject {

    height = 50;
    width = 50;
    x = 300;

    world;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = this.x + Math.random() * 2500; // x = [300;800] because -> Math.random() gives number between 0 and 1
        this.y = 373;
        //this.y = 480 - this.height - 63;
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.15 + Math.random() * 1;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 175)
    }

    setUniqueX() {
        let x = 300 + Math.random() * 2500;
        if (this.world.level.enemies.length != 0) {
            this.world.level.enemies.forEach(chicken => {
                if (x < chicken.x || x > chicken.x + chicken.width) {
                    return x;
                } else {
                    return 0;
                };
            });
        } else {
            return 350;
        }
    }

}