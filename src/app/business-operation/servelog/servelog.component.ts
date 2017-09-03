import { Component, OnInit,Inject } from '@angular/core';
import { BaseComponent } from '../../common/component/base/base.component';

@Component({
  selector: 'app-servelog',
  templateUrl: './servelog.component.html',
  styleUrls: ['./servelog.component.css']
})
export class ServelogComponent extends BaseComponent {

  constructor(@Inject('auxiliary') public auxiliary) {
    super(auxiliary,'/business_operation','/servelog');
   }

}
