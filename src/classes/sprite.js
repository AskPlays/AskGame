// Sprite

import GAME from '../../AskGame.js';

export class Sprite {
  constructor (imgName, img, data) {
    this.name = imgName;
    this.sprites = [];
    this.spritesheet(img, data.width, data.height)
    this.animSpeed = data.animSpeed || 0;
    this.w = data.width;
    this.h = data.height;
  }
  show (x=0, y=0, dir=0, w=this.w, h=this.h) {
    const ctx = GAME.ctx;
    ctx.save();
    ctx.translate(x-GAME.camera.x, y-GAME.camera.y);
    ctx.rotate(dir);
    let sprite = this.sprites[Math.floor((GAME.time)/1000*this.animSpeed)%this.sprites.length];
    ctx.drawImage(sprite,0,0,this.w,this.h,0,0,w,h);
    ctx.restore();
  }
  spritesheet(img, w, h) {
    for (let x=0; x<img.width; x += w) {
      for (let y=0; y<img.height; y += h) {
        this.sprites.push(this.slice(img, x, y, w, h));
      }
    }
  }
  slice(img, x, y, w, h) {
    const b = document.createElement('canvas');
    const b_ctx = b.getContext('2d');
    b.width = w;
    b.height = h;
    b_ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
    return b;
  }
}