import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
  { path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', loadChildren: 'app/main/home/home.module#HomeModule'},
      { path: 'developer', loadChildren: 'app/main/developer/developer.module#DeveloperModule'},
      { path: 'support', loadChildren: 'app/main/support/support.module#SupportModule'}

    ]
  }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
