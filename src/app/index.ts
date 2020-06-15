import { bootstrap, ChangeDetectorRef, ReactiveChangeDetector } from '@homebots/elements';

export { AppRootComponent as AppComponent } from './app-root/app-root.component';
export { AppHeaderComponent } from './features/app-header/app-header';
export { CreateTaskComponent } from './features/create-task/create-task';
export { TaskListComponent } from './features/task-list/task-list';

bootstrap({
  providers: [
    { type: ChangeDetectorRef, useClass: ReactiveChangeDetector },
  ]
});
