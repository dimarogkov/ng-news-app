import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news-detail.component';

const pageRoutes: Routes = [
  {path: '', component: NewsDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(pageRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class NewsDetailModule { }
