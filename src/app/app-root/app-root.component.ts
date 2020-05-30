import { Component } from '@homebots/elements';
import appTemplate from './app-root.template.htm';

@Component({
  tag: 'app-root',
  template: appTemplate,
})
export class AppComponent extends HTMLElement {}
