import { Component, OnInit } from '@angular/core';

import { Item } from '../../class/item';
import { ItemsService } from '../../services/items.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(
    private itemService: ItemsService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
