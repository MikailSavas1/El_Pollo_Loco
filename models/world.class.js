class World {

    ctx;
    canvas;
    camera_x = 0; // Verschiebung des Context in x-Richtung
    clearRect = new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0);

    level = level1;

    character = new Character();

    // StatusBars

    IMAGES_HEALTH_BAR = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];
    
    IMAGES_COIN_BAR = [
        'img/7.Marcadores/Barra/Marcador moneda/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/20_  copia.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/40_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/60_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100_ copia 2.png'
    ];
    
    IMAGES_BOTTLE_BAR = [
        'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'
    ];
    
    IMAGES_HEALTH_BAR_ENDBOSS = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];

    statusBars = [
        new StatusBar(this.IMAGES_HEALTH_BAR, 100, 15, 0),
        new StatusBar(this.IMAGES_COIN_BAR, 0, 15, 45),
        new StatusBar(this.IMAGES_BOTTLE_BAR, 0, 15, 90)
    ];

    endboss_healt_bar = new StatusBar(this.IMAGES_HEALTH_BAR_ENDBOSS, 100, this.level.endboss.x, this.level.endboss.y - 40);

    throwableObjects = [];

    constructor(canvas) {
        /*
        The canvas context is an object with properties and methods that you can use to render graphics inside the canvas element. 
        The context can be 2d or webgl (3d). Each canvas element can only have one context. 
        If we use the getContext() method multiple times, it will return a reference to the same context object.
        */
        this.ctx = canvas.getContext('2d');
        // <canvas> is an HTML element which can be used to draw graphics via scripting (usually JavaScript).
        this.canvas = canvas; // our canvas in index.html; coordinate system; for our clearing our in drawOurWorld()

        this.setWorld();
        this.drawOurWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    drawOurWorld() {

        //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // ---------- Space for fixed Objects ---------- 
        this.addObjectToMap(this.clearRect);
        // ---------- Space for fixed Objects End ----------
        
        this.ctx.translate(this.camera_x , 0);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0); // Back


        this.ctx.translate(this.camera_x, 0); // Forwards
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);

        // ---------- Space for fixed Objects ---------- 
        this.addObjectsToMap(this.statusBars);
        // ---------- Space for fixed Objects End ---------- 

        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.character);
        this.addObjectToMap(this.endboss_healt_bar);
        this.ctx.translate(-this.camera_x, 0);

        /**
         * so häufig aufgerufen wie die Grafikkarte hergibt; 10 - 15 fps bei schlechter; 25 - 60 fps bei guter
         */
        requestAnimationFrame(() => {
            this.drawOurWorld();
        });

    }

    /**
     * Adds the SINGLE Object into the canvas/context/game/map.
     * @param {object} object 
     */
    addObjectToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }

        /* Drawing Reactangle for CollisionDetection
        if (object instanceof Character) {
            object.drawReactangle(this.ctx);
        }*/

        object.draw(this.ctx);
        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    /**
     * Adds n objects to map from array
     * @param {array} array - an array of n objects
     */
    addObjectsToMap(array) {
        array.forEach(object => {
            this.addObjectToMap(object);
        });
    }

    flipImage(object) {
        this.ctx.save(); // speichert den aktuellen Status von dem canvas/context -> save() & restore() specihert alten Stand, damit deer nicht verloren geht sodass neue Änderungen alte nicht beeinfk#lussen können
        // Innerhalb des save() und restore() gelten Wirkungen und Veränderungen nur für den inneren Teil!
        this.ctx.scale(-1, 1); // Faktor -1 x-Achse
        this.ctx.translate(-object.width, 0); // Verschiebt den context Rechteck -> um object.width z.B. 80 nach rechts! Wegen der Spiegelung
        object.x = - object.x; // damit das Object genau an der seöben Stelle war wie zuvor
    }

    flipImageBack(object) {
        object.x = - object.x; // reseting x nach Spiegelung
        this.ctx.restore();
    }

    /**
     * This function is called, when a world object is created.
     * Ever then it checks every Second, whether our main character PEPE isColliding with each Enemy in the world.
     * If yes, character is hit and calls the function hit()
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy, 0, -40, 0, 0)) {
                this.character.hit();
                this.statusBars[0].setPercentage(this.character.energy);
            };
        });
        if (this.character.isColliding(this.level.endboss, 0, 0, 0, 0)) {
            this.character.hit();
            this.statusBars[0].setPercentage(this.character.energy);
        };
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 500);
        setInterval(() => {
            this.checkEndbossIsHit();
        }, 120);
    }

    checkEndbossIsHit() {
        this.throwableObjects.forEach(throwableBottle => {
            if (throwableBottle.isColliding(this.level.endboss, 0, -10, -120, 0) && !throwableBottle.isCracked || throwableBottle.isCollidingFromUp(this.level.endboss) && !throwableBottle.isCracked) {
                this.level.endboss.hit();
                throwableBottle.isCracked = true;
                this.endboss_healt_bar.setPercentage(this.level.endboss.energy);
            }
        });
    }
}