import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routes";
import { MainModule } from "./main/main.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MainModule,
      routing
    ],
  declarations: [
    AppComponent,
    LoginComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
