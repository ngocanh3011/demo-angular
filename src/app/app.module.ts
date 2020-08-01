import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { splashScreenModule } from "./splash-screen/splash-screen.component";
import { HomeComponent } from './home/home.component';
import { FirstHomeComponent } from './home/first-home/first-home.component';
import { SecondHomeComponent } from './home/second-home/second-home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstHomeComponent,
    SecondHomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    splashScreenModule,
    BrowserTransferStateModule
  ],
  providers: [TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { }
