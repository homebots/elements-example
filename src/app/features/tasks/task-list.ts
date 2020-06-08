import { Component, EventEmitter, Output } from '@homebots/elements';
import { Task } from '../../modules/task';
import template from './task-list.htm';
import styles from './task-list.css';

@Component({
  tag: 'task-list',
  template,
  styles,
})
export class TaskListComponent extends HTMLElement {
  tasks: Task[];

  @Output('removetask') onRemove: EventEmitter<Task>;
  @Output('completetask') onComplete: EventEmitter<{ task: Task, done: boolean }>;

  removeTask(task: Task) {
    this.onRemove.emit(task);
  }

  completeTask(task: Task, done: boolean) {
    this.onComplete.emit({ task, done });
  }
}
