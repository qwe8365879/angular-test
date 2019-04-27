import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from '../class/item';
import { ITEMS } from '../mock-data/items';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  getItem(id: number): Observable<Item> {
    return of(ITEMS.find(item => item.id === id));
  }

}
