import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalformComponent } from './component/modalform/modalform.component';
import { ModalService } from './services/modal.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BaseComponent } from './component/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
  ],
  declarations: [
    ModalformComponent,
    BaseComponent,
  ],
  exports: [
    ModalformComponent,
  ],
  providers: [
    ModalService,
  ]
})
export class CommonFunctionModule { }
