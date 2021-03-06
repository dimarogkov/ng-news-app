import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from 'src/app/inc/banner/banner.component';
import { SwiperBlockComponent } from 'src/app/inc/swiper/swiper_block.component';

const pageRoutes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SwiperBlockComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(pageRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeModule {}
