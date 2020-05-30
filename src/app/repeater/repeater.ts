import { Component, Input } from '@homebots/elements';

@Component({
  tag: 'x-repeat',
})
export class Repeater extends HTMLTemplateElement {
  @Input()
  from: Array<any>;

  constructor() {
    // this
  }

  onInit() {
    debugger;
  }
}
