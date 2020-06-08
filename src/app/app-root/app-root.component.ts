import { Component, Inject, OnInit, ChangeDetector, ChangeDetectorRef, ApplicationRef, Application } from '@homebots/elements';
import { Task, TaskService } from '../modules/task';
import appTemplate from './app-root.template.htm';

@Component({
  tag: 'app-root',
  template: appTemplate,
})
export class AppComponent extends HTMLElement implements OnInit {
  tasks: Task[];
  newTask: Task;

  @Inject() service: TaskService;
  @Inject(ChangeDetectorRef) cd: ChangeDetector;

  onInit() {
    this.updateList();
    this.newTask = { title: '' };
  }

  addTask() {
    if (!this.newTask.title) return;

    this.service.add(this.newTask);
    this.newTask = { title: '' };
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
