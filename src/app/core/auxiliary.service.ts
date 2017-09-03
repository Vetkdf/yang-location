import { Injectable, Inject } from '@angular/core';
import ConstantsList from '../common/constants/config';
import { Title } from '@angular/platform-browser';
import $ from "jquery";

import { UserNews, ModuleNews, PagesNews, Indexback } from '../module/business/login';

@Injectable()
export class AuxiliaryService {

  constructor( @Inject(Title) private titleService) {
  }

  public ControlHeight(id: string = "#content"): void {
    $(id).css("min-height", $(window).height() - ConstantsList.pageHeight);
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  public setTitle(newTitle: string = "Angualr4 站点"): void {
    this.titleService.setTitle(newTitle);
  }

  public get$(): any {
    return $;
  }

  //=====================================================================================

  private userNews: UserNews;
  private moduleNews: ModuleNews[];

  public getString(): string {
    return "alert -- angular 4 ";
  }

  public getUserNews(): UserNews {
    try {
      if (this.userNews != null) {
        return this.userNews;
      }
      else {
        let back: string = sessionStorage.getItem("usernews")
        this.userNews = JSON.parse(back) as UserNews;
        return this.userNews;
      }
    }
    catch (error) {
      console.error(`核心模块内服务 : AuxiliaryService , 内部函数 : getUserNews 。发生异常:`, error);
      return null;
    }
  }

  public getmodulenews(): ModuleNews[] {
    try {
      if (this.moduleNews != null) {
        return this.moduleNews;
      }
      else {
        let back: string = sessionStorage.getItem("modulenews")
        this.moduleNews = JSON.parse(back) as ModuleNews[];
        return this.moduleNews;
      }
    }
    catch (error) {
      console.error(`核心模块内服务 : AuxiliaryService , 内部函数 : getmodulenews 。发生异常:`, error);
      return null;
    }
  }

  public getIndexback(MoudleUrl: string, PageUrl: string): Indexback {
    let indexback: Indexback = new Indexback();
    try {
      let moduleNews: ModuleNews[] = this.getmodulenews();
      let moduleNew: ModuleNews = null;
      if (moduleNews != null) {
        for (let i = 0; i < moduleNews.length; i++) {
          if (moduleNews[i].murl == MoudleUrl) {
            moduleNew = moduleNews[i];
            break;
          }
        }
      }

      let PageNew: PagesNews;
      if (moduleNew != null) {
        for (let i = 0; i < moduleNew.pages.length; i++) {
          if (moduleNew.pages[i].pageurl == PageUrl) {
            PageNew = moduleNew.pages[i];
            break;
          }
        }
      }

      if (PageNew != null && moduleNew != null) {
        indexback.moduleNews = moduleNew;
        indexback.pagesNews = PageNew;
        indexback.userNews = this.getUserNews();
        return indexback;
      }
      else {
        console.error(`核心模块内服务 : AuxiliaryService , 内部函数 : getIndexback 。参数1：“${MoudleUrl}”，参数2：“${PageUrl}” 。发生获取为空错误 : `);
        console.info("PageNew:");
        console.info(PageNew);
        console.info("moduleNew:");
        console.info(moduleNew);
        return null;
      }
    } catch (error) {
      console.error(`核心模块内服务 : AuxiliaryService , 内部函数 : getIndexback 。参数1：“${MoudleUrl}”，参数2：“${PageUrl}” 。发生未知异常错误:`, error);
      return null;
    }
  }

}
