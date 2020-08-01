import { Component, OnInit } from '@angular/core';
import { faBars, faHome, faHeart, faGift } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faBars = faBars;
  faHome = faHome;
  faHeart = faHeart;
  faGift = faGift;
  title = 'Suprise!!!';
  img = '../../../assets/img/logo.png';
  email = 'phuong.phamquang@axonactive.com';
  info = 'thông tin cá nhân';
  gift = 'quà tặng';
  heart = 'lời nhắn gửi';
  opened = true;
  type = 'home';


  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }
  openNav() {
    if(this.opened) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "300px";
      this.opened = false
    }
   else {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("main").style.marginLeft= "100px";
    this.opened = true

   }
  }
  onChange(type: string = '') {
    this.type = type;
    console.log(this.type);
    this.openNav() 
    }
}
