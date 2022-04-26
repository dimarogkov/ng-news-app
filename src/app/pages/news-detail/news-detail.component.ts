import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})

export class NewsDetailComponent implements OnInit {

  thisNews: any

  constructor(private newsServices: NewsService) {}

  ngOnInit(): void {
    this.thisNews = this.newsServices.newsDetail;
    console.log(this.thisNews);
  }

}
