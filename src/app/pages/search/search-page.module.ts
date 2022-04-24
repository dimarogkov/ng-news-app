import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';

const pageRoutes: Routes = [
  {path: '', component: SearchComponent}
]

@NgModule({
  declarations: [
    SearchComponent
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

export class SearchModule { }
