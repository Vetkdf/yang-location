import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicModule } from '../public/public.module';
import { BusinessRoutingModule } from './business.routing.module';
import { CommonFunctionModule } from '../common/common.function.module';

//import { AlertModule } from 'ngx-bootstrap';
//import { ModalModule } from 'ngx-bootstrap/modal';

//======================================================================

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BusinessService } from './business.service';

@NgModule({
  imports: [
    CommonModule,
    PublicModule,
    BusinessRoutingModule,
    CommonFunctionModule,
    FormsModule,
    //AlertModule,
    //ModalModule,
  ],
  declarations: [
    LoginComponent,
    WelcomeComponent,
  ],
  providers: [
    { provide: 'business', useClass: BusinessService },
  ]
})
export class BusinessModule { }
