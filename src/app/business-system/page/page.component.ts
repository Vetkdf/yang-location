import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BaseComponent } from '../../common/component/base/base.component';
import ConstantsList from '../../common/constants/config';
import { moduleclass } from '../../module/business-system/modulelist';
import * as wjCore from 'wijmo/wijmo';
import * as wjGrid from 'wijmo/wijmo.grid';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent extends BaseComponent { //implements OnInit

  @ViewChild('flexgrid1') public flexgrid1: wjGrid.FlexGrid;
  cvPaging: wjCore.CollectionView = new wjCore.CollectionView();
  pageNews: number[] = [];
  comId: string = '';
  comIdList: moduleclass[];

  constructor( @Inject('auxiliary') public auxiliary, @Inject('business_system') private business_system, private route: ActivatedRoute) {
    super(auxiliary, '/business_system', '/page');
  }

  onChange(classId) {
    this.comId = classId;
    this.selectchange(this.comId);
  }

  selectchange(TypeId) {
    this.bindpage(1);
  }

  bindpage(event: number): void {
    let pageindex: number = event;
    if (pageindex == 0) { pageindex = this.pageNews[2]; }
    this.business_system.GetListPagingByPage(pageindex, ConstantsList.pageSize, this.comId, this.getSendToken()).then(backobj => {
      this.cvPaging.sourceCollection = backobj.List;
      this.pageNews = backobj.pageNews;
    });
  }

  ngOnInit() {
    super.ngOnInit();
    this.flexgrid1.selectionMode = wjGrid.SelectionMode.Row;
    this.flexgrid1.rowHeaders.columns.splice(0, 1);

    this.business_system.GetListModule(this.getSendToken()).
      then(backobj => {
        this.comIdList = backobj;
        this.route.params.subscribe((params: Params) => {
          let urlId: string = params['id'];
          if (urlId == undefined || urlId == null) {
            this.comId = this.comIdList[0].id;
          }
          else {
            this.comId = urlId;
          }
        });
        this.selectchange(this.comId);
      });
  }

  itemFormatter(panel, r, c, cell) {
    if (panel.cellType === wjGrid.CellType.ColumnHeader) {
      cell.style.textAlign = 'center';
      if (panel.columns[c].binding === 'check') {
        let flex = panel.grid;
        let col = flex.columns[c];

        if (col.dataType == wjCore.DataType.Boolean) {
          col.allowSorting = false;// 是否可排序

          let cnt = 0;
          for (let i = 0; i < flex.rows.length; i++) {
            if (flex.getCellData(i, c) == true) cnt++;
            if (flex.getCellData(i, c + 5) === 1) {
              flex.rows[i].isReadOnly = true;
            }
          }

          cell.innerHTML = '<input type="checkbox"> ';
          let cb = cell.firstChild;
          cb.checked = cnt > 0;
          cb.indeterminate = cnt > 0 && cnt < flex.rows.length;

          cb.addEventListener('click', function (e) {
            flex.beginUpdate();
            for (let i = 0; i < flex.rows.length; i++) {
              if (flex.rows[i].isReadOnly == false) {
                flex.setCellData(i, c, cb.checked);
              }
            }
            flex.endUpdate();
          });
        }
      }
    }

    /*
    if (panel.cellType === wjGrid.CellType.Cell) {
      let cellData = panel.getCellData(r, c);
      let binding = panel.columns[c].binding;
      
      switch (binding) {
        case 'id':
        //case 'indexcode':
        //case 'isdel':
        //case 'isshow':
        //case 'islock':
        //case 'orderid':
        {
          cell.style.textAlign = 'center';
        }
        break;
        
        //case 'button':
        //{
        //  let cb = cell.firstChild;
        //  cb.addEventListener('click', function (e) {
        //      console.log(e);
        //      //this.edit();
        //  });
        //}
        //break;
        
      }
    }
    */
  }

}
