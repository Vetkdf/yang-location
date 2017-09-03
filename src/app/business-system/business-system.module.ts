import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleComponent } from './module/module.component';
import { PageComponent } from './page/page.component';
import { UsergroupComponent } from './usergroup/usergroup.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { BusinessSystemRoutingModule } from './business-system.routing.module';
import { BusinessSystemService } from './business-system.service';

import { PublicModule } from '../public/public.module';
import { CommonFunctionModule } from '../common/common.function.module';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BusinessSystemRoutingModule,
    PublicModule,
    CommonFunctionModule,
    WjGridModule,
    WjInputModule,
    WjCoreModule,
  ],
  declarations: [
    ModuleComponent, 
    PageComponent, 
    UsergroupComponent, 
    UserinfoComponent,
  ],
  providers: [
    { provide: 'business_system', useClass: BusinessSystemService },
  
  ]
})
export class BusinessSystemModule { }
