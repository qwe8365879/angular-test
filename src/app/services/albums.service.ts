import { Injectable } from '@angular/core';

import {  Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Album } from '../class/album';


const url = 'https://jsonplaceholder.typicode.com/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(url);
  }

}
