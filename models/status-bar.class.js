class StatusBar extends DrawableObject {

    IMAGES;

    x = 15;
    width = 187;
    height = 50;

    percentage;

    constructor(images, initValue, x, y) {
        super();
        this.IMAGES = images;
        this.loadImages(this.IMAGES);
        this.setPercentage(initValue);
        this.x = x;
        this.y = y;
    }

    /**
     * sets certain image depending on a percentage
     * @param {integer} percentage - the depending value
     */
    setPercentage(percentage) { // setPercentage(75);
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()]; // getting certain path
        this.img = this.imageCache[path];
    }

    /**
     * depending on the percentage returns an index
     * because we only got 20 steps status bars -> e.g. 40% statusbar filled
     * @returns {integer} - index number of IMAGES array
     */
    resolveImageIndex() {
        let p = this.percentage;
        if (p == 100) {
            return 5;
        } else if (p >= 80) {
            return 4;
        } else if (p >= 60) {
            return 3;
        } else if (p >= 40) {
            return 2;
        } else if (p >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}