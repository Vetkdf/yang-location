import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServelogComponent } from './servelog/servelog.component';
import { ComponentlogComponent } from './componentlog/componentlog.component';

import { BusinessOperationRoutingModule } from './business-operation.routing.module';

import { PublicModule } from '../public/public.module';
import { CommonFunctionModule } from '../common/common.function.module';
import { BusinessOperationService } from './business-operation.service';

@NgModule({
  imports: [
    CommonModule,
    BusinessOperationRoutingModule,
    PublicModule,
    CommonFunctionModule,
  ],
  declarations: [
    ServelogComponent, 
    ComponentlogComponent,
  ],
  providers: [
    { provide: 'business_operation', useClass: BusinessOperationService },
  
  ]
})
export class BusinessOperationModule { }
