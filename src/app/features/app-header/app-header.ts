import { Input, Component } from '@homebots/elements';
import { Task } from '../../modules/task';
import template from './app-header.htm';
import styles from './app-header.css';

@Component({
  tag: 'app-header',
  template,
  styles,
})
export class AppHeaderComponent extends HTMLElement {
  @Input() tasks: Task[];

  get pendingTasksCount() {
    return this.tasks.filter(task => !task.done).length;
  }
}
