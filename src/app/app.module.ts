import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routes";
import { MainModule } from "./main/main.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { DocsComponent } from './docs/docs.component';

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
    LoginComponent,
    RegisterComponent,
    DocsComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
