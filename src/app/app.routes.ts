
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'login', component: LoginComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
