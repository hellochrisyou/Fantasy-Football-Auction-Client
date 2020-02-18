import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { User } from 'src/app/shared/interface/model.interface';
import { URL_VALIDATOR } from 'src/app/shared/validator/validator';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.scss']
})
export class CreateAuctionComponent extends CreateBaseForm {

  public checked:boolean = true;
  public user: User = {};

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected auth: AuthService,
    private af: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    super(fb, changeDetectorRef);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnInit(): void {
    super.ngOnInit();

    this.formGroup = this.fb.group({
      leagueNameCtrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      budgetCtrl: ['', [  
        Validators.required
      ]],
      pprCtrl: ['', [
        Validators.required
      ]],
    });

    this.formGroup.get('pprCtrl').setValue(true);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public submit(value: any): void {
      console.log('thischecked', this.formGroup.get('pprCtrl').value);
      this.snackBar.open('Profile Update', 'SUCCESS', {});
      this.router.navigateByUrl('/home');
    }
  }