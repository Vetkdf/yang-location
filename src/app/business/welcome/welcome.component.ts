import { Component, OnInit, Inject } from '@angular/core';
import { BaseComponent } from '../../common/component/base/base.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends BaseComponent {

  constructor( @Inject('auxiliary') public auxiliary) {
    super(auxiliary, '/business', '/welcome');
  }

}
