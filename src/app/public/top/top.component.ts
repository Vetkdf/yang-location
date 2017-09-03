import { Component, OnInit,Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private router: Router,@Inject('public_service') private publicservice) { }

  ngOnInit() {
  }

  onClick_logout() {
    this.publicservice.logout();
    this.router.navigate(['/business/login']);
  }

}
