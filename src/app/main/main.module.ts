import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { Router } from '@angular/router';

import {MainRoutingModule} from './main.routes';
import {MainComponent} from './main.component';
import {HeaderComponent} from '../shared/header/header.component';
import {HomeComponent} from './home/home.component';

import {CollapseModule} from 'ng2-bootstrap';
import {FooterComponent} from '../shared/footer/footer.component';
import { SupportComponent } from './support/support.component';
import { DeveloperComponent } from './developer/developer.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    SupportComponent,
    DeveloperComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    MainRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
