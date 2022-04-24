import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';
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

  constructor() {}

  ngOnInit(): void {}

}
