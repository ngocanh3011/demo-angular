import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home='firstHome';

  constructor() { }

  ngOnInit(): void {
    console.log("Now ",this.home);
  }

  getHomePage(feature: string){
     this.home=feature;
      console.log("getHomePage",feature);
  }

}
