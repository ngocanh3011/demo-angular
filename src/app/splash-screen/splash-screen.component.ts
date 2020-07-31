import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class splashScreenComponent implements OnInit {
  allowSecondSplash = false;
  constructor() {
    setTimeout(() => {
      this.allowSecondSplash = true;
    }, 5000);

  }
  ngOnInit(): void {
  }
}
@NgModule({
  imports: [CommonModule],
  exports: [splashScreenComponent],
  declarations: [splashScreenComponent],
})
export class splashScreenModule { }

