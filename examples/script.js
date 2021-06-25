import GAME from '../AskGame.js';
import {canvas} from '../AskGame.js';

window.GAME = GAME;

GAME.init(()=>{
    GAME.size(400, 400);
    GAME.fullscreen();  
    //ctx = GAME.ctx;
}, (time, delta)=>{
    const ctx = GAME.ctx;
    ctx.clearRect(0, 0, GAME.width, GAME.height);
    ctx.fillStyle = "#fff";
    ctx.font = "30px sans-serif";
    ctx.fillText("hello " + GAME.frameCount, 50, 100);
    ctx.fillText("time: " + time, 50, 200);
    ctx.fillText("delta: " + delta, 50, 300);
    GAME.sprites["noTexture"].show();
});