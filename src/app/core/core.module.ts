import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardService } from './auth-guard.service';
import { AuxiliaryService } from './auxiliary.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthGuardService,
    { provide: 'auxiliary', useClass: AuxiliaryService },
  ],
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) { //禁止重复导入
      throw new Error('核心模块已经加载。只能在appmodule导入一次');
    }
  }

}
