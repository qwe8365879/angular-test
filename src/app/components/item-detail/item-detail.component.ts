import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../../class/item';
import { ItemsService } from '../../services/items.service';
import { AlbumsService } from '../../services/albums.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemSerivce: ItemsService,
    private albumService: AlbumsService
  ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemSerivce.getItem(id).subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

}
