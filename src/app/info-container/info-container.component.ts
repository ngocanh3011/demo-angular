import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { $ } from 'protractor';


@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.css']
})
export class InfoContainerComponent implements OnInit {
  open: boolean = true;
  toggleSidebar() {
    this.open = !this.open;
  }

  constructor() { }

  ngOnInit(): void {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  

}
@NgModule({
  imports: [CommonModule],
  exports: [InfoContainerComponent],
  declarations: [InfoContainerComponent, NavbarComponent, SideBarComponent]
})
export class InfoContainerModule { }
