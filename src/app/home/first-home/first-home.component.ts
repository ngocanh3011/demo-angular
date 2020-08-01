import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-home',
  templateUrl: './first-home.component.html',
  styleUrls: ['./first-home.component.css']
})
export class FirstHomeComponent {

  @Output() homePage =  new EventEmitter();

  constructor() { }

  okOnclick(homePage:string){
    this.homePage.emit(homePage);
    console.log("Onclick",homePage);

  }
}
