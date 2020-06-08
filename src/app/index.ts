import { bootstrap, ChangeDetectorRef, BaseChangeDetector } from '@homebots/elements';

export { AppComponent } from './app-root/app-root.component';
export { Repeater } from './repeater/repeater';
export { Condition } from './repeater/condition';

bootstrap({
  providers: [
    { type: ChangeDetectorRef, useClass: BaseChangeDetector },
  ]
});
