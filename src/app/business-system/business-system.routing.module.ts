import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard.service';

import { ModuleComponent } from './module/module.component';
import { PageComponent } from './page/page.component';
import { UsergroupComponent } from './usergroup/usergroup.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuardService],
        component: ModuleComponent,
    },
    {
        path: 'business_system',
        canActivate: [AuthGuardService],
        component: ModuleComponent,
    },
    {
        path: 'business_system/module',
        canActivate: [AuthGuardService],
        component: ModuleComponent,
    },

    {
        path: 'business_system/page',
        canActivate: [AuthGuardService],
        component: PageComponent,
    },
    {
        path: 'business_system/page/:id',
        canActivate: [AuthGuardService],
        component: PageComponent,
    },
    {
        path: 'business_system/usergroup',
        canActivate: [AuthGuardService],
        component: UsergroupComponent,
    },
    {
        path: 'business_system/userinfo',
        canActivate: [AuthGuardService],
        component: UserinfoComponent,
    },
    {
        path: 'business_system/userinfo/:id',
        canActivate: [AuthGuardService],
        component: UserinfoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessSystemRoutingModule { }
