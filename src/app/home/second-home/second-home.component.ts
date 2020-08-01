import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-home',
  templateUrl: './second-home.component.html',
  styleUrls: ['./second-home.component.css'],
})
export class SecondHomeComponent implements OnInit {

  kt: boolean=true;


  constructor() { }

  ngOnInit(): void {
  }

 move(){
  var x = Math.random()*1000;
  var y = Math.random()*500;
  console.log("x = ", x);
  var left=x+'px';
  var top=y+'px';
  document.getElementById('no').style.left=left;
  document.getElementById('no').style.top=top;
  }

  onYes(){
    this.kt=!this.kt;
  }




}
