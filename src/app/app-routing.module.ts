import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {HotelViewComponent} from "./main/hotel-view/hotel-view.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'hotel',
    component: HotelViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

