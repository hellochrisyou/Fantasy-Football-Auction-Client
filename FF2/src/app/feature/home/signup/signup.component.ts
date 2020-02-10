import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { URL_VALIDATOR } from 'src/app/shared/validator/validator';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'user-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends CreateBaseForm implements OnInit, OnDestroy {

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected auth: AuthService
  ) {
    super(fb, changeDetectorRef);
  }

  public signup(): boolean {
    if (!this.formGroup.valid) {
      alert('Please correctly fill all the required fields');
      return false;
    } else {
      // this.auth.signupEmail(this.formGroup.get('signupEmailCtrl').value, this.formGroup.get('signupPassCtrl').value);
    }
  }
  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = this.fb.group({
      nameCtrl: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(25),
      ]],
      photoCtrl: ['', [
        Validators.required,
        Validators.pattern(URL_VALIDATOR)
      ]],
      emailCtrl: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(25),
      ]],
      passwordCtrl: ['', [
        Validators.required,
        Validators.maxLength(25),
      ]]
    });
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }


}
