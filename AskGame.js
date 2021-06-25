/*
 * AskGame.js v0.0.1
 * Made by AskPlays (2021)
 */
import { Camera } from './src/classes/camera.js';
import { Sprite } from './src/classes/sprite.js';

class GAME {
  constructor() {
    this.consts = {};
    this.states = {};
    this.canvas = document.createElement('canvas');
    this.ctx = {};
    this.frameCount = this.time = this.delta = this.width = this.height = 0;
    this.camera = new Camera(0, 0);
    this.sprites = {};
    this.keys = {};

    // CONSTS
    this.consts.res = "res";
    this.consts.ratio = this.pixelRatio();

    // STATES
    this.states.loaded = false;
    this.states.fullscreen = false;
    this.states.scale = false;
    this.states.width = this.states.height = 0;

    //pre functions
    this.initCb = () => { };
    this.loopCb = () => { };

    window.addEventListener("DOMContentLoaded", () => {
      this.states.loaded = true;
    });
    window.addEventListener("resize", () => {
      this.consts.ratio = this.pixelRatio();
      if (this.states.fullscreen) this.size(Math.round(window.innerWidth*this.consts.ratio), Math.round(window.innerHeight*this.consts.ratio));
      else this.size(this.states.width, this.states.height);
    });

    // prepare
    //this.prep();
    this.loadImages();
  }

  // FUNCTIONS
  /*prep (cb) {
    this.canvas = 
    if(typeof cb === 'function') cb();
    this.loadImages();
  };*/

  init(cb, cb2) {
    this.initCb = cb || this.initCb;
    this.loopCb = cb2 || this.loopCb;
  };

  doInit() {
    if (!this.states.loaded) {
      document.addEventListener("DOMContentLoaded", () => {
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        if (typeof this.initCb === 'function') this.initCb();
        requestAnimationFrame((time) => { this.loop(time) });
      });
    } else {
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
      if (typeof this.initCb === 'function') this.initCb();
      requestAnimationFrame((time) => { this.loop(time) });
    }
  }

  loop(time) {
    this.delta = time - this.time;
    this.time = time;
    if (typeof this.loopCb === 'function') this.loopCb(time, this.delta);
    this.frameCount++;
    requestAnimationFrame((time) => { this.loop(time) });
  };

  loadImages() {
    if (typeof spriteData === 'object') {
      const keys = Object.keys(spriteData);
      let index = 0;
      keys.forEach((url) => {
        const img = new Image();
        img.src = this.consts.res + "/" + url + ".png";
        img.onload = img => {
          index++;
          this.sprites[url.replace(".png", "")] = new Sprite(url.replace(".png", ""), img.target, spriteData[url]);
          if (index == keys.length) this.doInit();
        };
      });
    } else {
      this.doInit();
    }
  }

  size(width, height, options={}) {
    this.states.scale = options.scale || this.states.scale;
    this.states.width = width;
    this.states.height = height;
    const ratio = this.pixelRatio();
    if(this.states.scale) {
      this.canvas.style.width = width + 'px';
      this.canvas.style.height = height + 'px';
      this.width = this.canvas.width = Math.round(width * ratio);
      this.height = this.canvas.height = Math.round(height * ratio);
      this.canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    } else {
      this.width = this.canvas.width = width;
      this.height = this.canvas.height = height;
      this.canvas.style.width = Math.round(width/ratio) + 'px';
      this.canvas.style.height = Math.round(height/ratio) + 'px';
    }
    return this.canvas;
  }

  canvasSize(canvas, width, height) {
    const ratio = this.pixelRatio();
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  fullscreen() {
    this.states.fullscreen = true;
    const ratio = this.pixelRatio();
    this.size(Math.round(window.innerWidth*ratio), Math.round(window.innerHeight*ratio));
    /*if(this.canvas.webkitRequestFullScreen) {
      this.canvas.webkitRequestFullScreen();
    }
    else {
      this.canvas.mozRequestFullScreen();
    }*/
    document.body.style.overflow = "hidden";
  }

  pixelRatio() {
    var ctx = document.createElement("canvas").getContext("2d"),
      dpr = window.devicePixelRatio || 1,
      bsr = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
  }
}

export default new GAME();