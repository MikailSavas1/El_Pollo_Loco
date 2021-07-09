class DrawableObject {

    x;
    y;
    img;
    height;
    width;

    imageCache = {};
    currentImage = 0;

    /**
     * The image of the object is initialized by an image.
     * Is usually called when a new object(s), example the character, is created (in the constructor). 
     * So that the object can be able to be represented & shown with his img in the context.
     * @param {string} path this is the image path to the source of the image
     */
    loadImage(path) {
        this.img = new Image(); // document.getElementById('image') <---> <img id="image" src>
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach(path => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }
    
    /**
     * An object calls the function for example a chicken: chicken.draw(...).
     * Draws & puts the image of the object into the 2d context.
     * @param {string} context the place where the image is put & seen => coordinate system!
     */
    draw(context) {
        context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}