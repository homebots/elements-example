import { Component, EventEmitter, Output, Input } from '@homebots/elements';
import { Task } from '../../modules/task';
import template from './task-list.htm';
import styles from './task-list.css';

export interface TaskCompletedEventData {
  done: boolean;
  task: Task;
}

@Component({
  tag: 'task-list',
  template,
  styles,
})
export class TaskListComponent extends HTMLElement {
  @Input() tasks: Task[];
  @Output('removetask') onRemove: EventEmitter<Task>;
  @Output('completetask') onComplete: EventEmitter<TaskCompletedEventData>;

  removeTask(task: Task) {
    this.onRemove.emit(task);
  }

  completeTask(task: Task, done: boolean) {
    this.onComplete.emit({ task, done });
  }
}
