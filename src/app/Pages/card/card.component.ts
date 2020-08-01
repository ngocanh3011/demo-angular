import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxScrollViewModule }  from 'devextreme-angular/ui/scroll-view';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor() { }

}
@NgModule({
  imports: [ CommonModule, DxScrollViewModule ],
  exports: [ CardComponent ],
  declarations: [ CardComponent ]
})
export class CardModule { }