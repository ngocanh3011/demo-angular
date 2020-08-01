import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gift1Component } from "../gift-container/gift1/gift1.component";
import { Gift2Component } from "../gift-container/gift2/gift2.component";
import { Gift3Component } from "../gift-container/gift3/gift3.component";
import { TitleComponent } from '../gift-container/title/title.component';

@Component({
  selector: 'app-gift-container',
  templateUrl: './gift-container.component.html',
  styleUrls: ['./gift-container.component.css']
})
export class GiftContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  imports: [CommonModule],
  exports: [GiftContainerComponent],
  declarations: [GiftContainerComponent, Gift1Component, Gift2Component, Gift3Component, TitleComponent]
})
export class GiftContainerModule { }
