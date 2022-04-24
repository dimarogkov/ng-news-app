import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const pageRoutes: Routes = [
  {path: '', component: UserComponent}
]

@NgModule({
  declarations: [
    UserComponent
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

export class UserModule {}
