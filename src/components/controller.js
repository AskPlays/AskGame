// Movement

import GAME from './AskGame.js';

export class Controller extends Component {
  constructor(keys, keyActions) {
    super('controller');
    this.keys = keys;
    this.keys.keyActions = keyActions;
  }
  update() {
    for(i=0; i<this.keys; i++) {
      if(this.keys[i]) this.keyActions[i]();
    }
    /*if(this.keyright) this.parent.x += this.s;
    if(this.keyleft) this.parent.x -= this.s;
    if(this.keydown) this.parent.y += this.s;
    if(this.keyup) this.parent.y -= this.s;*/
  }
}