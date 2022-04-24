import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule
  ]
})

export class TabsModule { }
