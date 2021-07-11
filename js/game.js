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
    clearStartScreen();

    canvas = document.getElementById('canvas');
    level1 = initLevel1();
    world = new World(canvas);

    AUDIO_BG.play();

    isGameEnd(); // checking
}

function clearStartScreen() {
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('start-btn').classList.add('d-none');
}

//--------------- Game config  ---------------
let AUDIO_WIN = new Audio('audio/win.mp3');
let AUDIO_LOSE = new Audio('audio/lose.mp3');
let AUDIO_BG = new Audio('audio/bg_music.mp3');
AUDIO_BG.volume = 0.05;
AUDIO_BG.loop = true;

function isGameEnd() {
    let gameIsEnd = setInterval(() => {
        if (gameOver()) {
            if (world.character.isDead()) {
                world.character.fallingIntoDeath();
                AUDIO_LOSE.play();
            } else {
                AUDIO_WIN.play();
            }
            clearInterval(gameIsEnd); // clear to continue of checking further
            stopBgMusic();
            fadeInEndScreen(world.character.isDead()); // fade in end screen info e.g. u lost or game over
            goBackToStartScreen();
        }
    }, 1000 / 10);
}

function gameOver(){
    return world.level.endboss.isDead() || world.character.isDead();
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

function goBackToStartScreen() {
    setTimeout(() => {
        document.getElementById('end-screen').classList.add('d-none');
        document.getElementById('start-screen').classList.remove('d-none');
        document.getElementById('start-btn').classList.remove('d-none');
    }, 1666);
}

function stopBgMusic(){
    AUDIO_BG.pause();
    AUDIO_BG.currentTime = 0;
}

//--------------- About Game  ---------------
function showAboutGame() {
    document.getElementById('info-about-game').classList.remove('d-none')
}

function hideAboutGame() {
    document.getElementById('info-about-game').classList.add('d-none')
}

//--------------- How To Play  ---------------
function openHowToPlay() {
    document.getElementById('start-btn').style.zIndex = -1;

    document.getElementById('how-to-play').classList.add('add');
    document.getElementById('how-to-play').classList.remove('remove');
    document.getElementById('how-to-play-btn').innerHTML = 'X';
    document.getElementById('how-to-play-btn').setAttribute('onclick', 'closeHowToPlay()');
}

function closeHowToPlay() {
    document.getElementById('start-btn').style.zIndex = 0;

    document.getElementById('how-to-play').classList.remove('add');
    document.getElementById('how-to-play').classList.add('remove');
    document.getElementById('how-to-play-btn').innerHTML = 'How To Play';
    document.getElementById('how-to-play-btn').blur();
    document.getElementById('how-to-play-btn').setAttribute('onclick', 'openHowToPlay()');
}