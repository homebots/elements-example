import { Component, Inject, OnInit } from '@homebots/elements';
import { Task, TaskService } from '../modules/task';
import appTemplate from './app-root.template.htm';

@Component({
  tag: 'app-root',
  template: appTemplate,
})
export class AppComponent extends HTMLElement implements OnInit {
  tasks: Task[];
  newTask: Task;

  @Inject()
  service: TaskService;

  onInit() {
    this.tasks = this.service.loadTasks();
    this.newTask = { title: '' };
  }

  addTask() {
    if (!this.newTask.title) return;

    this.service.add(this.newTask);
    this.tasks = this.service.loadTasks();
    this.newTask = { title: '' };
  }
}
