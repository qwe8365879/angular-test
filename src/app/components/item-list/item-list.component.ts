import { Component, OnInit } from '@angular/core';

import { PageHeaderService } from '../../services/page-header.service';

import { Item } from '../../class/item';
import { ItemsService } from '../../services/items.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {
  title = 'Items';
  items: Item[];

  constructor(
    private itemService: ItemsService,
    private pageHeaderService: PageHeaderService
  ) { }

  ngOnInit() {
    this.setPageHeader();
    this.getItems();
  }

  setPageHeader(): void {
    this.pageHeaderService.setHeader(this.title);
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
