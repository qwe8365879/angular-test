import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { PageHeaderService } from '../../services/page-header.service';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../class/album';




@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.sass']
})
export class AlbumDetailComponent implements OnInit {

  title = 'Album';
  album: Album;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
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
    this.albumsService.getAlbum(id).subscribe(album => this.album = album);
  }

}
