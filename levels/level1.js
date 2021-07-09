let level1 = initLevel1();

function initLevel1() {
    return new Level(
        [new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 0),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 719),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 719 * 2),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 719 * 3),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 719 * 4)
        ],
        [
            //new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
            //new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),
            // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),
            //new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),

            //new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4), // für Puffer hehe :)
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4)
        ],
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken()
        ],
        bottles = [
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle()
        ],
        coins = [
            new Coin(1500, 200),
            new Coin(1550, 140),
            new Coin(1625, 100),
            new Coin(1700, 140),
            new Coin(1750, 200)
        ]
    );
}

const maximum_bottles_collectable = level1.bottles.length;
const maximum_coins_collectable = level1.coins.length;
