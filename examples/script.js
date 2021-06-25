import GAME from '../AskGame.js';
//import GAME from 'https://askplays.github.io/AskGame/AskGame.js'; import from github pages

window.GAME = GAME;

GAME.init(() => {
    GAME.fullscreen();
}, (time, delta) => {
    const ctx = GAME.ctx;
    ctx.clearRect(0, 0, GAME.width, GAME.height);
    ctx.fillStyle = "#fff";
    ctx.font = "30px sans-serif";
    ctx.fillText("framecount: " + GAME.frameCount, 50, 100);
    ctx.fillText("time: " + time, 50, 200);
    ctx.fillText("delta: " + delta, 50, 300);
    GAME.sprites["noTexture"].show();
});