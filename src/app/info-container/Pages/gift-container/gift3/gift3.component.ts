import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift3',
  templateUrl: './gift3.component.html',
  styleUrls: ['./gift3.component.css']
  
})
export class Gift3Component implements OnInit {
  imageUrl = 'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png';
  imgMess = '';
  textMess = 'https://cdn4.iconfinder.com/data/icons/explosion/512/as_910-512.png';
  txtLinkFB = '';
  forgot = true;
  constructor() { }

  ngOnInit(): void {
  }

  TextClick(){
    this.forgot = this.forgot;
    this.imgMess = 'Bùm. Không có quà rồi nè. Leuleu!!!';
    this.imageUrl = this.textMess;
  
  }
}

