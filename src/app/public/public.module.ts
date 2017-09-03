import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public.routing.module';
import { TopComponent } from './top/top.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PagingComponent } from './paging/paging.component';

import { PublicService } from './public.service';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
  ],
  declarations: [
    TopComponent,
    TreeviewComponent,
    FooterComponent,
    NavigationComponent,
    PagingComponent,
  ],
  exports: [
    TopComponent,
    TreeviewComponent,
    FooterComponent,
    NavigationComponent,
    PagingComponent,
  ],
  providers: [
    { provide: 'public_service', useClass: PublicService },
  
  ]
})
export class PublicModule { }
