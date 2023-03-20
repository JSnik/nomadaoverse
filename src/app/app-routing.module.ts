import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {HotelViewComponent} from "./main/hotel-view/hotel-view.component";
import {HotelView2Component} from "./main/hotel-view2/hotel-view2.component";
import {HotelView3Component} from "./main/hotel-view3/hotel-view3.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'hotel',
    component: HotelViewComponent
  },
  {
    path: 'pool',
    component: HotelView2Component
  },
  {
    path: 'pool-big',
    component: HotelView3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

