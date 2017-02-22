import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from "./support.component";
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: SupportComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
