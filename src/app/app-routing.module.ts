import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftContainerComponent } from "../app/gift-container/gift-container.component";
import { InfoContainerComponent } from "./info-container";
const routes: Routes = [
  {
    path: '',
    component: InfoContainerComponent
    
  },

  {
    path: 'gift-router',
    component: GiftContainerComponent
  }

   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
