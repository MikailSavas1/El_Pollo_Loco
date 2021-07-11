class Character extends MovableObject {

    height = 235;
    width = 119;
    y = 195;
    x = 80; // x!=0 , damit bisschen Abstand und Platz hat zur linken Seite

    keyboard = new Keyboard();
    speed = 5;

    world;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ]
    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png'
    ]
    IMAGES_DEATH = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png'
    ];
    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];

    IMAGES_NO_ACTION = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
    ];

    IMAGES_SLEEPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png'
    ];

    walking_sound = new Audio('audio/running.mp3');
    collect_bottle_sound = new Audio('audio/collect_bottle.mp3');
    coin_sound = new Audio('audio/collect_coin.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    jump_sound = new Audio('audio/jump.mp3');
    throw_sound = new Audio('audio/throw.mp3');
    audio_sound_count = 0;

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.applyGravity();
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEATH);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_NO_ACTION);
        this.loadImages(this.IMAGES_SLEEPING);
        this.animate();
        this.collect();
        setInterval(() => {
            this.pepeThrowsBottle();
        }, 10);
    }

    animate() {
        setInterval(() => {
            // the physical movement!
            if (this.keyboard.RIGHT && this.x < (this.world.level.level_end_x - this.width)) { // - width, damit er nicht rausgehen kann, da x2 > xEnde
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                if (this.audio_sound_count != 1) {
                    this.jump_sound.play();
                    this.audio_sound_count++;
                    setTimeout(() => {
                        this.audio_sound_count--;
                    }, 1050);
                }
            }

            /**
             * Einschränkung von Kamerabewegung -> Am Anfang und Ende:
             * 1. x >= startPosition, hier ist startPosition von Pepe 80, läuft Pepe nach rechts, gilt die Bedigung und die Kamera wird mit bewegt.
             * 2. x < level_end_x => Problem die Kamerabewegung folgt bis zur endPosition (level_end_x, z.B. 2800) mit der Kamera. 
             * Er sollte jedoch schon davor die Kamerabewegung unterlassen, damit die endPosition auch der aller letzter Punkt ist 
             * -> bei Keiner Bedingung wandert die Kamerabewegung trotzdem die (volle Canvas/context Breite - startPosition) von Pepe, die Sicht von Pepe, 
             * weil die Bediengung bis zum endPosition gilt & zufreift und so mitwandert selbst zum letzten Punkt und so über den Endpunkt die Map anzeigt. 
             * Um das zu unterlassen, müssen wir der endPosition dem Wert abziehen sodass die Bewegung gesoppt wird bzw. die Bedingung nicht mehr gilt und somit keine Kamerabewegung verursacht
             *  720 entspricht der canvas/context Breite abzüglich der 80 entsprechend der Charakter Positionierung.
             *  => Effekt Ende
             * */
            if (this.x > 80 && this.x < (this.world.level.level_end_x - (720 - 80))) {
                /**
                 * example char to right 100 result
                 * camera_x translates the context canvas to the left 100
                 * darws the moveable objects including rhe unmoveable
                 * translates back 100
                 * each movement unmovable char moves counter the cxt translate
                 * 1.st umovable char changes his x pos
                 * 2 nd passed the nagative x to camera_x
                 * 3 rd ctx is translated by camera_x
                 */
                this.world.camera_x = -this.x + 80;
                // 1. camera_x: x<0 => weil ctx nach links verschoben werden soll. 
                // 1.2 negatives this.x weil x positiv ist (position von charakter auf x achse), um camera bewegnung zu haben 
                // 2. + 80 fixe Verschiebung in x-Richtung; der Context wird mit einem fixen Wert von 80 Einheiten nach rechts verschoben -> damit sein Arsch nicht dran klebt
            }
        }, 1000 / 60);

        this.walking_sound.pause();
        // just the animations of movement -.-
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEATH);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                if (this.audio_sound_count != 1) {
                    this.hurt_sound.play();
                    this.audio_sound_count++;
                    setTimeout(() => {
                        this.audio_sound_count--;
                    }, 1050);
                }
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (this.keyboard.RIGHT || this.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
                this.walking_sound.play();
            } else {
                this.playAnimation(this.IMAGES_NO_ACTION);
            }
        }, 1000 / 12);
    }

    wallet = 0;
    bottles_inventory = 0;

    collectBottle() {
        for (let i = 0; i < this.world.level.bottles.length; i++) {
            let bottle = this.world.level.bottles[i];
            if (this.isColliding(bottle, 0, -80, 0, 0)) {
                this.bottles_inventory++;
                this.collect_bottle_sound.currentTime = 0;
                this.collect_bottle_sound.play();
                this.world.statusBars[2].setPercentage(this.calcPercentage(this.bottles_inventory, maximum_bottles_collectable));
                this.world.level.bottles.splice(i, 1);
            }
        }
    }

    collectCoin() {
        for (let i = 0; i < this.world.level.coins.length; i++) {
            let coin = this.world.level.coins[i];
            if (this.isColliding(coin, -20, -50, -8, 150)) {
                this.wallet++;
                this.coin_sound.currentTime = 0;
                this.coin_sound.play();
                this.world.level.coins.splice(i, 1);
                this.world.statusBars[1].setPercentage(this.calcPercentage(this.wallet, maximum_coins_collectable));
            }
        }
    }

    calcPercentage(w, g) {
        return (w / g) * 100;
    }

    collect() {
        setInterval(() => {
            this.collectBottle();
            this.collectCoin();
        }, 10);
    }

    pepeThrowsBottle() {
        if (!this.isTrowing()) {
            if (this.keyboard.T && !this.otherDirection && this.bottles_inventory != 0) {
                this.startThrow();
                let bottle = new ThrowableObject(this.x, this.y);
                this.world.throwableObjects.push(bottle);
                this.throw_sound.currentTime = 0;
                this.throw_sound.play();
                this.bottles_inventory--;
                this.world.statusBars[2].setPercentage(this.calcPercentage(this.bottles_inventory, maximum_bottles_collectable));
            }
        }
    }

    last_throw = 0;

    startThrow() {
        this.last_throw = new Date().getTime();
    }

    isTrowing() {
        let timePassed = new Date().getTime() - this.last_throw; // Difference of time in ms
        timePassed = timePassed / 1000;
        return timePassed < 1.05;
    }

}

