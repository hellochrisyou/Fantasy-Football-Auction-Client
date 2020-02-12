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
      displayNameCtrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      countryCtrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      photoCtrl: ['', [
        Validators.required,
        Validators.pattern(URL_VALIDATOR)
      ]],
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public submit(value: any): boolean {
    if (!this.formGroup.valid) {
      alert('Please correctly fill all the required fields!');
      return false;
    } else {
      this.user.displayName = this.formGroup.get('displayNameCtrl').value;
      this.user.photoURL = this.formGroup.get('photoCtrl').value;
      this.changeDetectorRef.detectChanges();
      // this.auth.updateUserData(this.user);
      this.snackBar.open('Profile Update', 'SUCCESS', {});
      this.router.navigateByUrl('/home');
    }
  }
}
