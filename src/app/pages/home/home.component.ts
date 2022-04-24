import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsArr: News[] = [];
  news: News[] = [];

  constructor(private newsServices: NewsService) {
    this.newsServices.getNews().subscribe(item => {
      item.articles.forEach((el: any) => this.newsArr.push(el));
      this.news.push(item.articles[0]);
    });
  }

  ngOnInit(): void {}

}
