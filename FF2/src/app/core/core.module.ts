import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HighlightCardComponent } from './component/highlight-card/highlight-card.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { CachingInterceptor } from './interceptor/caching.interceptor';



@NgModule({
  declarations: [HighlightCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HighlightCardComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true
    }
  ],
})
export class CoreModule { }
