import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift1',
  templateUrl: './gift1.component.html',
  styleUrls: ['./gift1.component.css']
  
})
export class Gift1Component implements OnInit {
  imageUrl = 'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png';
  imgMess = '';
  textMess = 'https://neologic-repairs.000webhostapp.com/1.png';
  textMess2 = '';
  forgot = true;
  constructor() { }

  ngOnInit(): void {
  }

  ImageClick(){
    this.imgMess = 'Bấm vào đây!';
  }
  
  TextClick(){
    this.forgot = !this.forgot;
    this.imgMess = 'Quà là tụi em nè hehe';
    
  }

 
}

