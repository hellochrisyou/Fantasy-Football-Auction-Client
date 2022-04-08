import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { BidData } from 'src/app/shared/interface/interface';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent extends CreateBaseForm implements OnInit {

  colorControl = new FormControl('primary');

  thisCurrentBid: number;

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    public dialogRef: MatDialogRef<BidComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BidData
  ) {
    super(fb, changeDetectorRef);
  }

  ngOnInit(): void {
    console.log('budget', this.data.budget);
    console.log('currentBid', this.data.currentBid);
    this.thisCurrentBid = +this.data.currentBid;
    this.formGroup = this.fb.group({
      bidCtrl: ['', [Validators.required, Validators.min(this.data.currentBid), Validators.max(this.data.budget)]]
    });
    this.dialogRef.updateSize('300px');

  }

  get bidCtrl(): AbstractControl {
    return this.formGroup.get('bidCtrl');
  }


  public bid() {
    this.dialogRef.close({ bidAmount: this.formGroup.get('bidCtrl').value });
  }
}

