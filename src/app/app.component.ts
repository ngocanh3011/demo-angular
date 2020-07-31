import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  allowMainScreen = false;
  constructor() {
    setTimeout(() => {
      this.allowMainScreen = true
    }, 5000);
  }
  ngOnInit() {

  }

}

