import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper-block',
  templateUrl: './swiper_block.component.html',
  styleUrls: ['./swiper_block.component.scss']
})

export class SwiperBlockComponent implements OnInit {

  @Input() items: any

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 25,
  }

  constructor(private newsServices: NewsService) {}

  ngOnInit(): void {}

  getNewsDetail(el: any) {
    this.newsServices.newsDetail = el;
  }

}
