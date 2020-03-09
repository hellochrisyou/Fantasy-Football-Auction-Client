import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogData } from 'src/app/shared/interface/interface';
import { BidNotifyService } from 'src/app/core/service/emit/bid-notify.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent extends CreateBaseForm implements OnInit {

  constructor(
    protected fb: FormBuilder,
    private bidNotifyService: BidNotifyService,
    protected changeDetectorRef: ChangeDetectorRef,
    public dialogRef: MatDialogRef<BidComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    super(fb, changeDetectorRef);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      bidCtrl: ['', [
        Validators.required
      ]],
    });
  }

  sendBid() {
    this.bidNotifyService.emitBidAmount(this.formGroup.get('bidCtrl').value);
  }
}
