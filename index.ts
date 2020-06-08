import { bootstrap, ChangeDetectorRef, BaseChangeDetector } from '@homebots/elements';

export { AppComponent } from './src/app/app-root/app-root.component';
export { Repeater } from './src/app/repeater/repeater';

bootstrap({
  rootNode: document.body,
  providers: [
    { type: ChangeDetectorRef, useClass: BaseChangeDetector }
  ]
});
