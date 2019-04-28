import { Component, OnInit, Input } from '@angular/core';
import { PageHeaderService } from '../../services/page-header.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.sass']
})
export class PageTitleComponent implements OnInit {
  @Input() title = '';

  constructor(
    private pageHeaderService: PageHeaderService
  ) { }

  ngOnInit() {
    this.setPageHeader();
  }

  setPageHeader(): void {
    this.pageHeaderService.setHeader(this.title);
  }

}
