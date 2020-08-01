import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { GiftContainerComponent } from './info-container/Pages/gift-container/gift-container.component';
import { InfoContainerComponent } from "./info-container";
const routes: Routes = [
  {
    path: '',


    component: HomeComponent

  },
  {
    path: 'gift',


    component: InfoContainerComponent

  },
  


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
