import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { Router } from '@angular/router';

import {AppRoutingModule} from './app.routes';
import {AppComponent} from './app.component';

import {MainModule} from "./main/main.module";
import {HeaderComponent} from './shared/header/header.component';
import {HomeComponent} from './main/home/home.component';
import {FooterComponent} from './shared/footer/footer.component';
import { SupportComponent } from './main/support/support.component';
import { DeveloperComponent } from './main/developer/developer.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
