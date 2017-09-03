import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import ConstantsList from '../common/constants/config';
import { BaseService } from '../common/services/base.service';

@Injectable()
export class BusinessOperationService extends BaseService {

  constructor(private http: Http) { //,@Inject('auxiliary') private auxiliary
    super();
    this.servicename = 'BusinessService-运维业务服务';
  }




}