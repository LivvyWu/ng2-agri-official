
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
