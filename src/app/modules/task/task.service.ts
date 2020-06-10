import { Injectable, Inject } from '@homebots/elements';
import { JsonStorage } from '../storage';
import { Task } from './task';

@Injectable({ providedBy: 'root' })
export class TaskService {
  @Inject() storage: JsonStorage;

  loadTasks(): Task[] {
    return this.storage.getItem('tasks') || [];
  }

  add(task: Task) {
    const tasks = this.loadTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  remove(task: Task) {
    const tasks = this.loadTasks().filter(t => t.id !== task.id);
    this.saveTasks(tasks);
  }

  saveTasks(tasks: Task[]) {
    this.storage.setItem('tasks', tasks);
  }
}
