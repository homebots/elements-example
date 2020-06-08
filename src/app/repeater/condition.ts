import { Component, Input, OnChanges } from '@homebots/elements';

@Component({
  tag: 'x-if',
})
export class Condition extends HTMLElement implements OnChanges {
  @Input() if: boolean;

  private template: HTMLTemplateElement;
  private nodes: Node[] = [];

  onChanges() {
    if (this.if) {
      this.createNodes();
    } else {
      this.removeNodes();
    }
  }

  onInit() {
    this.template = document.createElement('template');
    this.template.innerHTML = this.querySelector('template').innerHTML;
    this.innerHTML = '';
  }

  private createNodes() {
    const templateNodes = Array.from(this.template.content.childNodes);
    const fragment = document.createDocumentFragment();
    const nodes = templateNodes.map(n => n.cloneNode(true));
    this.nodes = nodes;

    fragment.append(...nodes);
    this.appendChild(fragment);
  }

  private removeNodes() {
    Array.from(this.nodes).forEach(node => node.parentElement && node.parentElement.removeChild(node));
  }
}
