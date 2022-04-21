import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { HeaderComponent } from './inc/header/header.component';
import { TabsComponent } from './inc/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
