import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift2',
  templateUrl: './gift2.component.html',
  styleUrls: ['./gift2.component.css']
  
})
export class Gift2Component implements OnInit {
  imageUrl = 'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png';
  imgMess = '';
  constructor() { }

  ngOnInit(): void {
  }

  ImageClick(){
    this.imgMess = 'Chúc bạn may mắn lần sau!';
  }

}

