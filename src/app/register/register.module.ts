import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RegisterComponent} from "./register.component";
import {routing} from "./register.routes";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
