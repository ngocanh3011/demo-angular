import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift3',
  templateUrl: './gift3.component.html',
  styleUrls: ['./gift3.component.css']
  
})
export class Gift3Component implements OnInit {
  imageUrl = 'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png';
  imgMess = '';
  constructor() { }

  ngOnInit(): void {
  }

  ImageClick(){
    this.imgMess = 'Không có quà rồi nè liu liu';
  }

}

