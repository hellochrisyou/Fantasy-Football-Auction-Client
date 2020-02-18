import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HighlightCardComponent } from './component/highlight-card/highlight-card.component';
import * as fromInterceptors from './interceptor/';



@NgModule({
  declarations: [HighlightCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HighlightCardComponent],
  providers: [
    ...fromInterceptors.httpInterceptorProviders
  ],
})
export class CoreModule { }
