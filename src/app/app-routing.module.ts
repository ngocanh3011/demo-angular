import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { GiftContainerComponent } from "../app/gift-container/gift-container.component";
import { InfoContainerComponent } from "./info-container";
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: InfoContainerComponent
<<<<<<< HEAD
  },
  {
    path: 'first-route',
    component: GiftContainerComponent
=======
    component: HomeComponent
>>>>>>> 9adacfc84a380f119cbacf2903b2e49a2125a332
  }
 
=======
    
  },

  {
    path: 'gift-router',
    component: GiftContainerComponent
  }

   
  
>>>>>>> c3c361c062c07fd4cdcd564aedc06fcc01b8c5a1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
