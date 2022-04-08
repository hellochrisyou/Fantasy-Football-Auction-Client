import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogData } from 'src/app/shared/interface/interface';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  title = '';
  subTitle = '';
  text = '';
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.title = data.title;
    this.subTitle = data.subTitle;
    this.text = data.text;
  }
  ngOnInit() {
  }

}
