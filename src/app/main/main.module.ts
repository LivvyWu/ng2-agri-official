import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing}  from "./main.routes";
import {MainComponent} from "./main.component";
import {HeaderComponent} from "../shared/header/header.component";
import {FooterComponent} from "../shared/footer/footer.component";

@NgModule({

  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class MainModule {
}
