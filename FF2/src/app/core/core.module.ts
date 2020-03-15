import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import * as fromInterceptors from './interceptor/';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [],
  providers: [
    ...fromInterceptors.httpInterceptorProviders
  ],
})
export class CoreModule { }
