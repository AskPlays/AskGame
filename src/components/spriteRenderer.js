// SpriteRenderer

export class SpriteRenderer extends Component {
  constructor (sprite) {
    super('spriterenderer');
    this.sprite = sprite;
  }
  show() {
    this.sprite.show(this.parent.x, this.parent.y);
  }
}