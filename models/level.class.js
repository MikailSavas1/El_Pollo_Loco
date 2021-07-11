class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    level_end_x;
    endboss;

    constructor(clouds, backgroundObjects, enemies, bottles, coins) {
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.bottles = bottles;
        this.coins = coins;
        this.level_end_x = 2800;
        this.endboss = new Endboss(this.level_end_x);
    }
}