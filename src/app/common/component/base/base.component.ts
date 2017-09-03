import { Component, OnInit, Inject } from '@angular/core';
import { UserNews, ModuleNews, PagesNews, Indexback } from '../../../module/business/login';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  public indexNews: Indexback;
  private sendtoken: string;

  constructor( @Inject('auxiliary') public auxiliary, ModuleUrl: string, PageUrl: string) {
    this.indexNews = this.auxiliary.getIndexback(ModuleUrl, PageUrl);
    if (this.indexNews != null) {
      this.sendtoken = this.indexNews.userNews.id + '-' + this.indexNews.userNews.token + '-' + this.indexNews.pagesNews.id;
      this.auxiliary.setTitle(this.indexNews.pagesNews.pagename);
    }
  }

  ngOnInit() {
    this.auxiliary.ControlHeight();
  }

  protected getSendToken(): string {
    return this.sendtoken;
  }

}