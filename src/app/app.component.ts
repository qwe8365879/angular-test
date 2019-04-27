import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from './services/page-header.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = '';

  constructor(private pageHeaderService: PageHeaderService) {}

  ngOnInit() {
    this.pageHeaderService.header.subscribe(header => {
      this.title = header;
    });
  }
}
