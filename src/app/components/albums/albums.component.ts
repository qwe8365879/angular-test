import { Component, OnInit } from '@angular/core';

import { PageHeaderService } from '../../services/page-header.service';

import { Album } from '../../class/album';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {

  title = 'Albums';
  albums: Album[];
  page = 1;
  pageSize = 10;
  totalItems = 0;

  constructor(
    private albumService: AlbumsService,
    private pageHeaderService: PageHeaderService
  ) { }

  ngOnInit() {
    this.setPageHeader();
    this.getAlbums();
  }

  setPageHeader(): void {
    this.pageHeaderService.setHeader(this.title);
  }

  getAlbums(): void {
    this.albumService
    .getAlbums()
    .subscribe(albums => {
      this.albums = albums;
      this.totalItems = albums.length;
    });
  }

}
