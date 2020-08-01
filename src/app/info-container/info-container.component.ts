import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CardModule } from "../Pages/card/card.component";
import { DxFormModule } from 'devextreme-angular';
import { ProfileModule } from '../Pages/profile/profile.component';
import { GiftContainerModule } from '../gift-container/gift-container.component';


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
  imports: [CommonModule, CardModule, DxFormModule, FontAwesomeModule, ProfileModule, GiftContainerModule],
  exports: [InfoContainerComponent],
  declarations: [InfoContainerComponent, SideBarComponent]
})
export class InfoContainerModule { }
