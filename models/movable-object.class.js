class MovableObject extends DrawableObject {

    otherDirection = false;

    speed;
    speedY = 0;
    acceleration = 2;

    energy = 100;
    lastHit = 0;

    gravitation;

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Applies movable Object, in this case the character is mentiont, high speedY, that applyGravirty() is driven
     * That makes the Object jump because the applyGravity() fuinction, where the y of the object gets changed by the speedY.
     */
    jump() {
        this.speedY = 30;
    }

    /**
     * This function applies the movable object gravity
     * There are 2 conditions: 
     * 1. if the object is above the ground (so y is less the line -> y < yStayingOnGround) 
     * 2. Or the SpeedY is higher than 0
     * Gravitations Modelliereung -> die strecke y nimmt quadratische zu/ab bei Bewegung, da SpeedY linear sich zur Beschleunigung ändert & sich y, die Strecke abzüglich des SpeedY ergibt, d.h. bei Fall: je kleiner die Änderung bzw. SpeedY wird, desto kleiner die Strecke, die überwindet wird bzw. ungleiche / keine konsant gleich bleibende gleiche Änderungsstrecke-> hat den quadratischen Effekt da die Änderung von DeltaY nicht konstant bleibt => Parabel!
     */
    applyGravity() {
        this.gravitation = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY; // -= weil v neagtiv ist. - * - ergibt +, somit y -> infinity
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y < 365;
        } else {
            return this.y < 190;
        }
    }

    /**
     * Plays the animation. 
     * This one is used when an array of images has to be run down to produce the animation effect.
     * Really important is the fact, that the function is working with array. So a sequancy of changing the images within the array, that the animation effect is produced.
     * For example walking, jumping of an object.
     * @param {array} images - this is the array of the images; if they were path string's then u would have to consider the fact.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // Division mit Rest! | Rechenoperator | wie Division nur return Wert ist der Rest
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Here we check, whether the movable Object, that is calling the function, is colliding with an other object in the canvas
     * example: character.isColliding(chicken)
     * The function drawRectangle() helps us to visuallize the collision
     * We consider 4 important points/coordinates of the objects
     * There are 4 conditions, when it comes to collision
     * This one refers to walking straight forward of an enemy/object. 
     * @param {object} mo - the other object
     * @param {*} mo 
     * @param {integer} z - z1, z2, z3, z4 manipulate the certain points -> to cut unnecessary empty img spaces for clean collision detection
     * @returns {boolean} 
     */
    isColliding(mo, z1, z2, z3, z4) {
        return this.x + z1 < mo.x &&  // x1
            this.x + this.width + z2 > mo.x && // x2
            this.y + this.height + z3 > mo.y && // y1
            this.y + z4 < mo.y + mo.height; // y2
    }

    /**
     * if the movable object is hit, then his energy gets lower by 20
     * lastHit gets initialized by a date in ms
     * if energy is under 0, then init static 0, so energy -12 cant be possible.
     */
    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    /**
     * This is like setInterval only more elegant.
     * Calculates the Difference of 2 point of times and changes it to seconds
     * As long as the timePassed is under 1.05 seconds this function returns true, otherwise false.
     * To understand it on our project: this function belongs to the hurtAnimation.
     * So the Animations of IMAGES_HURT is played then only 1second after the character is colliding with other object.
     * After 1 second this function returns false and the animation wont be played anymore.
     * As soon as the character collides with an other object because of the functions checkCollisions() & hit()
     * Them setting new Date, that follows if a low Difference of timePassed => the character is hurt.
     * @returns {boolean} - at the end the duration of the animation
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference of time in ms
        timePassed = timePassed / 1000;
        return timePassed < 1.05;
    }

    /**
     * Draws a blue reactangle for a certain object to help & visualizing for the detect-collision 
     * @param {string} context - the place where reactangle is drawn
     */
    drawReactangle(context) {
        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "blue";
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
    }

    fallingIntoDeath() {
        this.speedY = 15;
        clearInterval(this.gravitation);
        setInterval(() => {
            if (this.y < 480) {
                this.y -= this.speedY; // -= weil v neagtiv ist. - * - ergibt +, somit y -> infinity
                this.speedY -= 1;
            }
        }, 1000 / 30);
    }

}
