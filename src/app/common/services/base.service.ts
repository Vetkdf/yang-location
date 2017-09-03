import { Http, Headers, Response,RequestOptions } from '@angular/http';
import ConstantsList from '../constants/config';
import 'rxjs/add/operator/toPromise';

export class BaseService {

  protected servicename:string;

  //添加自定义http headers 数据
  protected getOptions(sendtoken:string):RequestOptions{
    let headers:Headers = new Headers({'Content-Type':'application/json'});
    headers.append(ConstantsList.Token,sendtoken);
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  protected handleError(functionName:string,error: any): Promise<any> {
    console.error(`服务 : ${this.servicename} , 函数 : ${functionName} 。发生错误 : `, error);
    return Promise.reject(error.message || error);
  }

}
