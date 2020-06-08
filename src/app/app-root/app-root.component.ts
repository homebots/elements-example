import { Component, Inject, OnInit } from '@homebots/elements';
import { Task, TaskService } from '../modules/task';
import template from './app-root.htm';
import styles from './app-root.css';

@Component({
  tag: 'app-root',
  template,
  styles,
})
export class AppComponent extends HTMLElement implements OnInit {
  tasks: Task[] = [];

  @Inject() service: TaskService;

  onInit() {
    this.updateList();
  }

  addTask(task: Task) {
    this.service.add(task);
    this.updateList();
  }

  completeTask(event: { task: Task, done: boolean }) {
    const index = this.tasks.findIndex(t => t.title === event.task.title);
    this.tasks[index] = { title: event.task.title, done: event.done };
    this.service.saveTasks(this.tasks);
    this.updateList();
  }

  removeTask(task: Task) {
    this.service.remove(task);
    this.updateList();
  }

  addRandomTasks() {
    this.tasks = Array(1000).fill(null).map((_, index) => ({ title: `Task ${index}`}));
    this.service.saveTasks(this.tasks);
  }

  reset() {
    this.service.saveTasks([]);
    this.updateList();
  }

  private updateList() {
    this.tasks = this.service.loadTasks();
  }
}
