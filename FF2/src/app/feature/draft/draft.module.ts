import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDraftComponent } from './create-draft/create-draft.component';
import { OngoingDraftComponent } from './ongoing-draft/ongoing-draft.component';
import { FinishedDraftComponent } from './finished-draft/finished-draft.component';



@NgModule({
  declarations: [CreateDraftComponent, OngoingDraftComponent, FinishedDraftComponent],
  imports: [
    CommonModule
  ]
})
export class DraftModule { }
