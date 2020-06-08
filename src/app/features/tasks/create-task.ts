import { Component, EventEmitter, Output } from '@homebots/elements';
import { Task } from '../../modules/task';
import template from './create-task.htm';
import styles from './create-task.css';

@Component({
  tag: 'create-task',
  template,
  styles,
})
export class CreateTaskComponent extends HTMLElement {
  task: Task = { title: '' };
  @Output('create') onCreate: EventEmitter<Task>;

  addTask() {
    if (!this.task.title) return;

    this.onCreate.emit(this.task);
    this.task = { title: '' };
  }
}
