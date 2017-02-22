import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from "./developer.component";
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: DeveloperComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
