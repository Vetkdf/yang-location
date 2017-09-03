import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import ConstantsList from '../common/constants/config';
import { BaseService } from '../common/services/base.service';
import { LoginBackNews,Auth } from '../module/business/login';

@Injectable()
export class BusinessService extends BaseService {

  constructor(private http: Http) { //@Inject('auxiliary') private auxiliary
    super();
    this.servicename = 'BusinessService-公用业务服务';
  }

  public loginWithCredentials(username: string, password: string): Promise<Auth> {
    return this.findUserNews(username, password)
      .then(backCode => {
        let auth = new Auth();
        switch (backCode.backid) {
          case 0:

            //创建MAP类

            sessionStorage.removeItem('usernews');
            sessionStorage.setItem('usernews', JSON.stringify(backCode.usernews));

            sessionStorage.removeItem('modulenews');
            sessionStorage.setItem('modulenews', JSON.stringify(backCode.modulenews));

            sessionStorage.removeItem('userId');
            sessionStorage.setItem('userId', backCode.usernews.id);

            auth.redirectUrl = (sessionStorage.getItem('redirectUrl') === null) ? '/' : sessionStorage.getItem('redirectUrl');
            auth.hasError = false;

            break;
          /*
          case 1:
            sessionStorage.removeItem('userId');
            sessionStorage.setItem('userId', String(backCode.Id));
            auth.redirectUrl = (sessionStorage.getItem('redirectUrl') === null) ? '/' : sessionStorage.getItem('redirectUrl');
            auth.hasError = false;
          break;
          */
          case 2:
            auth.hasError = true;
            auth.errMsg = '多个用户';
            break;
          case 3:
            auth.hasError = true;
            auth.errMsg = '没有对应用户组';
            break;
          case 4:
            auth.hasError = true;
            auth.errMsg = '没有对应模块权限';
            break;
          case 5:
            auth.hasError = true;
            auth.errMsg = '用户名或密码错误';
            break;
          case -1:
            auth.hasError = true;
            auth.errMsg = '服务端发生异常';
            break;
          case -2:
            auth.hasError = true;
            auth.errMsg = 'Http状态错误';
            break;
          default:
            auth.hasError = true;
            auth.errMsg = '其他错误';
            break;
        }
        return auth;
      })
      .catch((error: any) => { return this.handleError('loginWithCredentials', error); });
  }

  private findUserNews(username: string, password: string): Promise<LoginBackNews> {
    const url = `${ConstantsList.HOSTNEW}/angular/login/${username}/${password}/`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        let status: number = res.status;//SSM框架返回的状态
        if (status === 200) { //服务端正确执行
          return res.json() as LoginBackNews;
        }
        else {
          let backCode: LoginBackNews = new LoginBackNews();
          backCode.backid = -2;
          return backCode;
        }
      })
      .catch((error: any) => { return this.handleError('findUserNews', error); });
  }

}
