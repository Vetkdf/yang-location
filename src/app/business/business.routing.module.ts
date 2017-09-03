import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard.service';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: WelcomeComponent,
  },
  {
    path: 'business',
    canActivate: [AuthGuardService],
    component: WelcomeComponent,
  },
  {
    path: 'business/welcome',
    canActivate: [AuthGuardService],
    component: WelcomeComponent,
  },
  {
    path: 'business/login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BusinessRoutingModule { }
