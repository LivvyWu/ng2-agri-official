import { NgModule }     from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { MainComponent } from './main/main.component';
// import { HomeComponent } from './main/home/home.component';
// import { SupportComponent } from './main/support/support.component';
// import { DeveloperComponent } from './main/developer/developer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent},
  // { path: 'developer', component: DeveloperComponent},
  // { path: 'support', component: SupportComponent}
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
export class AppRoutingModule {}
