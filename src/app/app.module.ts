import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
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
    BrowserTransferStateModule
  ],
  providers: [TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { }
