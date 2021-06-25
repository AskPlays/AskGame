// Entity

export class Entity {
  constructor(type) {
    this.type = type;
    this.components = {};
  }
  update() {
    for(const component of this.copmonents) {
      component.update();
    }
  }
  show() {
    for(const component of this.copmonents) {
      component.show();
    }
  }
  addComponent(component) {
    component.parent = this;
    if(typeof this.components[component.type] === "undefined") this.components[component.type] = [];
    this.components[component.type].push(component);
  }
}