import { Component, OnInit, Input } from '@angular/core';
import { Indexback } from '../../module/business/login';
//import ConstantsList from '../../common/constants/config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() indexNews: Indexback;

  constructor() {
  }

  ngOnInit() {

  }

}
