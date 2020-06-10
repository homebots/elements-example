import { Component, Inject, OnInit } from '@homebots/elements';
import { Task, TaskService } from '../modules/task';
import styles from './app-root.css';
import template from './app-root.htm';
import { TaskCompletedEventData } from '../features/task-list/task-list';

@Component({
  tag: 'app-root',
  template,
  styles,
})
export class AppRootComponent extends HTMLElement implements OnInit {
  @Inject() service: TaskService;

  tasks: Task[] = [];

  onInit() {
    this.updateList();
  }

  addTask(task: Task) {
    this.service.add(task);
    this.updateList();
  }

  completeTask(event: TaskCompletedEventData) {
    const { task, done } = event;
    const index = this.tasks.findIndex(item => item.title === task.title);

    this.tasks[index] = { ...task, done };
    this.service.saveTasks(this.tasks);
    this.updateList();
  }

  removeTask(task: Task) {
    this.service.remove(task);
    this.updateList();
  }

  private updateList() {
    this.tasks = this.service.loadTasks();
  }
}
