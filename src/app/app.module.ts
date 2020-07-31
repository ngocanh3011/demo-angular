import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { splashScreenModule } from "./splash-screen/splash-screen.component";


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    splashScreenModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
