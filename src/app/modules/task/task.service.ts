import { Injectable, Inject } from '@homebots/elements';
import { JsonStorage } from '../storage';

@Injectable({ providedBy: 'root' })
export class TaskService {
  @Inject()
  storage: JsonStorage;
}
