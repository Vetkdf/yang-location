import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { BaseService } from '../common/services/base.service';
import 'rxjs/add/operator/toPromise';
import ConstantsList from '../common/constants/config';

@Injectable()
export class PublicService extends BaseService {

  constructor(private http: Http) {
    super();
    this.servicename = 'PublicService-公用组件服务';
  }

  public logout(): void {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('usernews');
    sessionStorage.removeItem('modulenews');
    //记录登出日志
  }

}