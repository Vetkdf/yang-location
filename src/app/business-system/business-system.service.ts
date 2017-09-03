import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { BaseService } from '../common/services/base.service';
import 'rxjs/add/operator/toPromise';
import ConstantsList from '../common/constants/config';
import { ObservableArray } from 'wijmo/wijmo';

import { Wijmo_PageBackList, PageBackList } from '../module/common/common';
import { moduleclass } from '../module/business-system/modulelist';
import { pageclass } from '../module/business-system/pagelist';
import { usergroupclass } from '../module/business-system/usergroup';
import { userclass } from '../module/business-system/userinfo';

@Injectable()
export class BusinessSystemService extends BaseService {

  constructor(private http: Http) {
    super();
    this.servicename = 'BusinessSystem-服务';
  }

  public GetListPagingByModule(PageIndex: number, PageSize: number, sendtoken: string): Promise<Wijmo_PageBackList> {
    const url = `${ConstantsList.HOSTNEW}/business_system/getmodule/${PageIndex}/${PageSize}/`;
    let options = this.getOptions(sendtoken);//添加自定义http headers 数据
    return this.http.get(url, options)
      .toPromise()
      .then(res => {
        let status: number = res.status;
        if (status === 200) {
          let PB: PageBackList = res.json() as PageBackList;
          let PBC: moduleclass[] = PB.pageBackContent as moduleclass[];
          let Wijmo: Wijmo_PageBackList = new Wijmo_PageBackList();
          Wijmo.List = new ObservableArray();
          for (let i = 0; i < PBC.length; i++) {
            Wijmo.List.push({
              check: false,
              id: PBC[i].id,
              mname: PBC[i].mname,
              murl: PBC[i].murl,
              orderid: PBC[i].orderid,
              addtime: PBC[i].addtime,
              isdel: PBC[i].isdel,
              islock: PBC[i].islock,
              cssname: PBC[i].cssname,
              isshow: PBC[i].isshow,
            });
          }
          Wijmo.pageNews = PB.pageNews;
          return Wijmo;
        }
        else {
          console.error('服务端返回的 http status 错误 : ', status);
          return null;
        }
      })
      .catch((error: any) => { return this.handleError('GetListPagingByModule', error); });
  }

  public GetListPagingByPage(PageIndex: number, PageSize: number, Type: string,sendtoken: string): Promise<Wijmo_PageBackList> {
    const url = `${ConstantsList.HOSTNEW}/business_system/getpage/${PageIndex}/${PageSize}/${Type}/`;
    let options = this.getOptions(sendtoken);
    return this.http.get(url, options)
      .toPromise()
      .then(res => {
        let status: number = res.status;
        if (status === 200) {
          let PB: PageBackList = res.json() as PageBackList;
          let PBC: pageclass[] = PB.pageBackContent as pageclass[];
          let Wijmo: Wijmo_PageBackList = new Wijmo_PageBackList();
          Wijmo.List = new ObservableArray();
          for (let i = 0; i < PBC.length; i++) {
            Wijmo.List.push({
              check: false,
              id: PBC[i].id,
              pagename: PBC[i].pagename,
              pageurl: PBC[i].pageurl,
              allurl: PBC[i].allurl,
              mid: PBC[i].mid,
              orderid: PBC[i].orderid,
              addtime: PBC[i].addtime,
              isdel: PBC[i].isdel,
              islock: PBC[i].islock,
              btitle: PBC[i].btitle,
              stitle: PBC[i].stitle,
              cssname: PBC[i].cssname,
              isshow: PBC[i].isshow,
            });
          }
          Wijmo.pageNews = PB.pageNews;
          return Wijmo;
        }
        else {
          console.error('服务端返回的 http status 错误 : ', status);
          return null;
        }
      })
      .catch((error: any) => { return this.handleError('GetListPagingByPage', error); });
  }

  public GetListPagingByUserGroup(PageIndex: number, PageSize: number, sendtoken: string): Promise<Wijmo_PageBackList> {
    const url = `${ConstantsList.HOSTNEW}/business_system/getusergroup/${PageIndex}/${PageSize}/`;
    let options = this.getOptions(sendtoken);
    return this.http.get(url, options)
      .toPromise()
      .then(res => {
        let status: number = res.status;
        if (status === 200) {
          let PB: PageBackList = res.json() as PageBackList;
          let PBC: usergroupclass[] = PB.pageBackContent as usergroupclass[];
          let Wijmo: Wijmo_PageBackList = new Wijmo_PageBackList();
          Wijmo.List = new ObservableArray();
          for (let i = 0; i < PBC.length; i++) {
            Wijmo.List.push({
              check: false,
              id: PBC[i].id,
              gname: PBC[i].gname,
              adduser: PBC[i].adduser,
              addtime: PBC[i].addtime,
              isdel: PBC[i].isdel,
              islock: PBC[i].islock,
            });
          }
          Wijmo.pageNews = PB.pageNews;
          return Wijmo;
        }
        else {
          console.error('服务端返回的 http status 错误 : ', status);
          return null;
        }
      })
      .catch((error: any) => { return this.handleError('GetListPagingByUserGroup', error); });
  }

  public GetListPagingByUser(PageIndex: number, PageSize: number, Type: string,sendtoken: string): Promise<Wijmo_PageBackList> {
    const url = `${ConstantsList.HOSTNEW}/business_system/getuser/${PageIndex}/${PageSize}/${Type}/`;
    let options = this.getOptions(sendtoken);
    return this.http.get(url, options)
      .toPromise()
      .then(res => {
        let status: number = res.status;
        if (status === 200) {
          let PB: PageBackList = res.json() as PageBackList;
          let PBC: userclass[] = PB.pageBackContent as userclass[];
          let Wijmo: Wijmo_PageBackList = new Wijmo_PageBackList();
          Wijmo.List = new ObservableArray();
          for (let i = 0; i < PBC.length; i++) {
            Wijmo.List.push({
              check: false,
              id: PBC[i].id,
              username: PBC[i].username,
              showname: PBC[i].showname,
              sex: PBC[i].sex,
              addtime: PBC[i].addtime,
              usergroup:PBC[i].usergroup,
              isdel: PBC[i].isdel,
              islock: PBC[i].islock,
              picurl: PBC[i].picurl,
            });
          }
          Wijmo.pageNews = PB.pageNews;
          return Wijmo;
        }
        else {
          console.error('服务端返回的 http status 错误 : ', status);
          return null;
        }
      })
      .catch((error: any) => { return this.handleError('GetListPagingByPage', error); });
  }

  public GetListModule(sendtoken: string): Promise<moduleclass[]> {
    const url = `${ConstantsList.HOSTNEW}/business_system/getmodule/getlist/`;
    let options = this.getOptions(sendtoken);
    return this.http.get(url, options)
      .toPromise()
      .then(res => { return res.json() as moduleclass[]; })
      .catch((error: any) => { return this.handleError('GetListModule', error); });
  }

  public GetListUserGroup(sendtoken: string): Promise<moduleclass[]> {
    const url = `${ConstantsList.HOSTNEW}/business_system/getusergroup/getlist/`;
    let options = this.getOptions(sendtoken);
    return this.http.get(url, options)
      .toPromise()
      .then(res => { return res.json() as moduleclass[]; })
      .catch((error: any) => { return this.handleError('GetListUserGroup', error); });
  }

}
