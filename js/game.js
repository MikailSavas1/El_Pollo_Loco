/**
 * // <canvas> is an HTML element, which can be used to draw graphics.
 * The place where the magic happens
 */
let canvas;

/**
 * Our world the main part of our programm like a metropole New York, where the whole part of the programm is happening.
 * World -> everything nicely & clean/clear overview over the project/the world, where our game is happening, to see.
 */
let world;

window.addEventListener("keydown", (e) => {
    let keypressed = e['code'];

    if (keypressed == 'ArrowUp') {
        world.character.keyboard.UP = true;
    }
    if (keypressed == 'ArrowRight') {
        world.character.keyboard.RIGHT = true;
    }
    if (keypressed == 'ArrowDown') {
        world.character.keyboard.DOWN = true;
    }
    if (keypressed == 'ArrowLeft') {
        world.character.keyboard.LEFT = true;
    }
    if (keypressed == 'Space') {
        world.character.keyboard.SPACE = true;
    }
    if (keypressed == 'KeyT') {
        world.character.keyboard.T = true;
    }
});

window.addEventListener("keyup", (e) => {
    let keypressed = e['code'];

    if (keypressed == 'ArrowUp') {
        world.character.keyboard.UP = false;
    }
    if (keypressed == 'ArrowRight') {
        world.character.keyboard.RIGHT = false;
    }
    if (keypressed == 'ArrowDown') {
        world.character.keyboard.DOWN = false;
    }
    if (keypressed == 'ArrowLeft') {
        world.character.keyboard.LEFT = false;
    }
    if (keypressed == 'Space') {
        world.character.keyboard.SPACE = false;
    }
    if (keypressed == 'KeyT') {
        world.character.keyboard.T = false;
    }
});

function startGame() {
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('start').classList.add('d-none');

    canvas = document.getElementById('canvas');
    level1 = initLevel1();
    world = new World(canvas);

    bg_audio.play();

    isGameEnd(); // checking
}

function openHowToPlay() {
    document.getElementById('start').style.zIndex = -1;

    document.getElementById('how-to-play').classList.add('add');
    document.getElementById('how-to-play').classList.remove('remove');
    document.getElementById('how-to-play-btn').innerHTML = 'X';
    document.getElementById('how-to-play-btn').setAttribute('onclick', 'closeHowToPlay()');
}

function closeHowToPlay() {
    document.getElementById('start').style.zIndex = 0;

    document.getElementById('how-to-play').classList.remove('add');
    document.getElementById('how-to-play').classList.add('remove');
    document.getElementById('how-to-play-btn').innerHTML = 'How To Play';
    document.getElementById('how-to-play-btn').blur();
    document.getElementById('how-to-play-btn').setAttribute('onclick', 'openHowToPlay()');
}

let win_audio = new Audio('audio/win2.mp3');
let lose_audio = new Audio('audio/lose2.mp3');
let bg_audio = new Audio('audio/bg_music.mp3');
bg_audio.volume = 0.05;

function isGameEnd() {
    let gameIsEnd = setInterval(() => {
        if (world.level.endboss.isDead() || world.character.isDead()) {
            if (world.character.isDead()) {
                world.character.fallingIntoDeath();
                bg_audio.pause();
                bg_audio.currentTime = 0;
                lose_audio.play();
            } else {
                bg_audio.pause();
                bg_audio.currentTime = 0;
                win_audio.play();
            }
            clearInterval(gameIsEnd); // clear to continue of checking further
            fadeInEndScreen(world.character.isDead()); // fade in end screen info e.g. u lost or game over
            goBackToStartScreen();
        }
    }, 1000 / 10);
}

function goBackToStartScreen() {
    setTimeout(() => {
        document.getElementById('end-screen').classList.add('d-none');
        document.getElementById('start-screen').classList.remove('d-none');
        document.getElementById('start').classList.remove('d-none');
    }, 1666);
}

function fadeInEndScreen(pepeDied) {
    document.getElementById('end-screen').classList.remove('d-none');
    setTimeout(() => {
        if (pepeDied) {
            setEndScreenImg('img/9.Intro _ Outro Image/_Game over_ screen/1.you lost.png');
        } else {
            setEndScreenImg('img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png');
        }
    }, 500);
}

function setEndScreenImg(srcPath) {
    document.getElementById('end-screen').src = srcPath;
}

function a() {
    document.getElementById('info').classList.remove('d-none')
}

function b() {
    document.getElementById('info').classList.add('d-none')
}