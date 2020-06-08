import { bootstrap, ChangeDetectorRef, BaseChangeDetector } from '@homebots/elements';

export { AppComponent } from './app-root/app-root.component';
export { CreateTaskComponent } from './features/tasks/create-task';
export { TaskListComponent } from './features/tasks/task-list';

bootstrap({
  providers: [
    { type: ChangeDetectorRef, useClass: BaseChangeDetector },
  ]
});
