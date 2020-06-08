import { BaseChangeDetector, ChangeDetectorRef, compileElement, Component, ExecutionContext, Inject, Input, OnChanges } from '@homebots/elements';

@Component({
  tag: 'x-repeat',
})
export class Repeater extends HTMLElement implements OnChanges {
  @Input() of: Iterable<any>;
  @Input() for: string;
  @Inject() private executionContext: ExecutionContext;
  @Inject(ChangeDetectorRef) private changeDetector: BaseChangeDetector;

  private template: HTMLTemplateElement;
  private parentComponent: HTMLElement;

  onChanges() {
    if (!this.of || !this.for) {
      return;
    }

    const items = Array.from(this.of);
    const changeDetector = this.changeDetector.parent;
    const templateNodes = Array.from(this.template.content.children);
    const fragment = document.createDocumentFragment();

    this.cleanNodes();
    const children = items.map((item, index) => {
      const context = this.executionContext.fork(this.parentComponent);
      const nodes = templateNodes.map(n => n.cloneNode(true));

      context.addLocals({ [this.for]: item, index });
      fragment.append(...nodes);

      return { nodes, context };
    });

    children.forEach((o) => o.nodes.forEach(node => compileElement(node as HTMLElement, changeDetector, o.context)));
    setTimeout(() => {
      changeDetector.markForCheck();
      changeDetector.scheduleCheck();
    });

    setTimeout(() => this.appendChild(fragment), 5);
  }

  onInit() {
    this.template = document.createElement('template');
    this.template.innerHTML = this.querySelector('template').innerHTML;
    this.cleanNodes();
  }

  private cleanNodes() {
    this.innerHTML = '';
  }
}
