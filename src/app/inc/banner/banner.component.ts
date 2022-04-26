import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() item: any

  constructor(private newsServices: NewsService) {}

  ngOnInit(): void {}

  getNewsDetail(el: any) {
    this.newsServices.newsDetail = el;
  }

}
