import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper-block',
  templateUrl: './swiper_block.component.html',
  styleUrls: ['./swiper_block.component.scss']
})

export class SwiperBlockComponent implements OnInit {

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 25,
  }

  constructor() {}

  ngOnInit(): void {}

}
