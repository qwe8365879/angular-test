import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PageHeaderService } from '../../services/page-header.service';

import { Item } from '../../class/item';
import { ItemsService } from '../../services/items.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  title = 'Item Detail';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemSerivce: ItemsService,
    private pageHeaderService: PageHeaderService
  ) { }

  ngOnInit() {
    this.setPageHeader();
    this.getItem();
  }

  setPageHeader(): void {
    this.pageHeaderService.setHeader(this.title);
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemSerivce.getItem(id).subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

}
