import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {
  public header = new BehaviorSubject('');

  constructor() { }

  setHeader(header: string) {
    this.header.next(header);
  }
}
