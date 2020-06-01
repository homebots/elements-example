import { Changes, Component, Input, OnChanges, Inject, TemplateRef, Injector, ExecutionContext } from '@homebots/elements';

@Component({
  tag: 'app-repeat',
})
export class Repeater extends HTMLElement implements OnChanges {
  @Input() of: Array<any>;
  @Input() for: string;
  @Inject() injector: Injector;
  @Inject() private ec: ExecutionContext;

  private template: HTMLTemplateElement;

  onChanges(changes: Changes) {
    // const list =
  }

  onInit() {
    this.template = this.injector.get(TemplateRef);
  }
}
