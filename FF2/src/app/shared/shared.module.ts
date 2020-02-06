import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { TableComponent } from './component/table/table.component';
import { MaterialModule } from './module/material.module';
import { ConfirmComponent } from './component/dialog/confirm/confirm.component';
import { ErrorDialogComponent } from './component/dialog/error/error.component';



@NgModule({
  declarations: [ConfirmComponent, ErrorDialogComponent, TableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CommonModule,
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
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000, MatSnackBarHorizontalPosition: 'center' },
    }
  ],
  entryComponents: [
    ConfirmComponent, ErrorDialogComponent
  ]
})
export class SharedModule { }
