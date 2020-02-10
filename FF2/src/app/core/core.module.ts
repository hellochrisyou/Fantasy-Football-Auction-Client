import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HighlightCardComponent } from './component/highlight-card/highlight-card.component';



@NgModule({
  declarations: [HighlightCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HighlightCardComponent]
})
export class CoreModule { }
