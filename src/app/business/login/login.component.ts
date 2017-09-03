import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../../module/business/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: Auth;
  username: string;
  password: string;

  constructor( @Inject('business') private service, private router: Router, @Inject('auxiliary') private auxiliary) {
    this.auxiliary.setTitle("系统登录页面");
  }

  ngOnInit() {
    this.auxiliary.ControlHeight();
  }

  onSubmit(formValue: any): void {
    this.service
      .loginWithCredentials(formValue.username, formValue.password)
      .then(auth => {
        let redirectUrl = (auth.redirectUrl === null) ? '/' : auth.redirectUrl;
        if (!auth.hasError) {
          this.router.navigate([redirectUrl]);
          sessionStorage.removeItem('redirectUrl');
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
  }

}
