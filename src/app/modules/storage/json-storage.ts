import { Injectable } from '@homebots/elements';

@Injectable({ providedBy: 'root' })
export class JsonStorage implements Storage {
  private prefix = '$$';
  private storage = window.localStorage;

  get length() {
    return this.keys.length;
  }

  clear() {
    this.keys.forEach(key => this.storage.removeItem(key));
  }

  getItem(key: string) {
    return this.tryParse(this.storage.getItem(this.getKeyFor(key))) || null;
  }

  key(index: number) {
    return this.keys[index];
  }

  removeItem(key: string) {
    return this.storage.removeItem(this.getKeyFor(key));
  }

  setItem(key: string, value: any) {
    const json = JSON.stringify(value);
    this.storage.setItem(this.getKeyFor(key), json);
  }

  private getKeyFor(key: string) {
    return `${this.prefix}${key}`;
  }

  private tryParse(text: string) {
    try {
      return JSON.parse(text);
    } catch (e) {
      return null;
    }
  }

  private get keys() {
    return Object.keys(this.storage).filter(key => key.startsWith(this.prefix));
  }
}
