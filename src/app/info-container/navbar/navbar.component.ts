import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Dev App';
  img = '../../../assets/img/nullAva.png';
  email = 'quynhnganav@gmail.com'

  constructor() { }

  ngOnInit(): void {
  }

  onPress() {
    console.log('hello')
  }
}
