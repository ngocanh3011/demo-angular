import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxFormModule } from 'devextreme-angular';
import { CardComponent } from './card/card.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 'HandSomeBoy',
      Nickname: 'kiki',
      Tên: 'Phương Phạm',
      relationship: 'Đã kết hôn',
      Prefix: 'Mr.',
      Position: 'Scum Master',
      Picture: 'images/employees/06.png',
      BirthDate: new Date('1991/08/02'),
      /* tslint:disable-next-line:max-line-length */
      Notes: "People have to know what they need to learn and understand what they have learned. Coz we can't achieve everything!",
      Address: '15 Thái Phiên.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }


  ngOnInit(): void {
  }
}
@NgModule({
  imports: [CommonModule, DxFormModule],
  exports: [ProfileComponent],
  declarations: [ProfileComponent, CardComponent]
})
export class ProfileModule { }
