import { Component, OnInit, Inject } from '@angular/core';
import { BaseComponent } from '../../common/component/base/base.component';

@Component({
  selector: 'app-componentlog',
  templateUrl: './componentlog.component.html',
  styleUrls: ['./componentlog.component.css']
})
export class ComponentlogComponent extends BaseComponent {


  constructor( @Inject('auxiliary') public auxiliary) {
    super(auxiliary, '/business_operation', '/componentlog');
  }


}
