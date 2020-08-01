import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift2',
  templateUrl: './gift2.component.html',
  styleUrls: ['./gift2.component.css']
  
})
export class Gift2Component implements OnInit {
  imageUrl = 'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png';
  imgMess = '';
  textMess = 'https://image.flaticon.com/icons/png/512/2099/2099604.png';
  txtLinkFB = '';
  forgot = true;
  constructor() { }

  ngOnInit(): void {
  }

  TextClick(){
    this.forgot = this.forgot;
    this.imgMess = 'Chúc mừng bạn đã nhận được 10 nghìn đồng!!!';
    this.imageUrl = this.textMess;
    this.txtLinkFB = 'Nhấp vào đây để gửi số tài khoản';
  }
}

