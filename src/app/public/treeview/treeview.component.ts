import { Component, OnInit, Input, Inject } from '@angular/core';
import { Indexback } from '../../module/business/login';
import { ModuleNews, PagesNews } from '../../module/business/login';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {

  @Input() indexNews: Indexback;
  moduleurl: string;
  pageurl: string;
  moduleNews: ModuleNews[];

  constructor( @Inject('auxiliary') public auxiliary) {
    this.moduleNews = this.auxiliary.getmodulenews();
  }

  ngOnInit() {
    this.moduleurl = this.indexNews.moduleNews.murl
    this.pageurl = this.indexNews.pagesNews.pageurl;
  }

}
