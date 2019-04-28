import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../class/album';




@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.sass']
})
export class AlbumDetailComponent implements OnInit {

  title = 'Album Detail';
  album: Album;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbum(id).subscribe(album => this.album = album);
  }

}
