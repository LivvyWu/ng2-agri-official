import { NgModule }     from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { SupportComponent } from './support/support.component';
import { DeveloperComponent } from './developer/developer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'main', component:MainComponent},
  { path: 'home', component: HomeComponent},
  { path: 'developer', component: DeveloperComponent},
  { path: 'support', component: SupportComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class MainRoutingModule {}
