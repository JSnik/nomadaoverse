import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HotelViewComponent } from './main/hotel-view/hotel-view.component';
import { HotelView2Component } from './main/hotel-view2/hotel-view2.component';
import { HotelView3Component } from './main/hotel-view3/hotel-view3.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HotelViewComponent,
    HotelView2Component,
    HotelView3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
