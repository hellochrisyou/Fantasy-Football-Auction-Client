import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { TableComponent } from './component/table/table.component';
import { MaterialModule } from './module/material.module';
import { ConfirmComponent } from './component/dialog/confirm/confirm.component';
import { ErrorDialogComponent } from './component/dialog/error/error.component';
import { CreateComponent } from './component/dialog/create/create.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BidComponent } from './component/dialog/bid/bid.component';



@NgModule({
  declarations: [
    ConfirmComponent,
    ErrorDialogComponent,
    TableComponent,
    CreateComponent,
    SnackbarComponent,
    BidComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TableComponent
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DATA, useValue: {},
    },
    {
      provide: MatDialogRef, useValue: {},
    },
    {
      provide: MAT_DIALOG_DATA, useValue: [],
    }
  ],
  entryComponents: [
    ConfirmComponent, ErrorDialogComponent, CreateComponent, SnackbarComponent, BidComponent
  ]
})
export class SharedModule { }
