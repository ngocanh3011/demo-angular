import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DxFormModule } from 'devextreme-angular';
<<<<<<< HEAD
import { ProfileModule } from '../info-container/Pages/profile/profile.component';
import { GiftContainerModule } from '../info-container/Pages/gift-container/gift-container.component';
=======
import { ProfileModule } from './Pages/profile/profile.component';
import { GiftContainerModule } from './Pages/gift-container/gift-container.component';
>>>>>>> d633c12fba1b954aea7b07f13e272b900369e10c
import { MessComponent } from '../mess/mess.component';





@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.css']
})
export class InfoContainerComponent implements OnInit {
  
  ngOnInit(): void {
  }
}
@NgModule({
  imports: [CommonModule, DxFormModule, FontAwesomeModule, ProfileModule, GiftContainerModule],
  exports: [InfoContainerComponent],
  declarations: [InfoContainerComponent, SideBarComponent, MessComponent]
})
export class InfoContainerModule { }
