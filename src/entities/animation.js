// Animations

export class Animation extends Entity {
  constructor(spriteName, x, y, dir = 0) {
    super('animation');
    this.sprite = sprites[spriteName];
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.t = 0;
  }
  show() {
    image(this.sprite.sprites[floor(this.t/this.sprite.animSpeed)],0,0);
    this.t++;
  }
}