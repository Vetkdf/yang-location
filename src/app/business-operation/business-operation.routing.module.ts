import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard.service';

import { ServelogComponent } from './servelog/servelog.component';
import { ComponentlogComponent } from './componentlog/componentlog.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuardService],
        component: ServelogComponent,
    },
    {
        path: 'business_operation',
        canActivate: [AuthGuardService],
        component: ServelogComponent,
    },
    {
        path: 'business_operation/servelog',
        canActivate: [AuthGuardService],
        component: ServelogComponent,
    },
    {
        path: 'business_operation/componentlog',
        canActivate: [AuthGuardService],
        component: ComponentlogComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessOperationRoutingModule { }