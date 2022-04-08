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

  imgUrl = "https://material.angular.io/assets/img/examples/shiba2.jpg";

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
      const email = this.formGroup.get('emailCtrl').value;
      const password = this.formGroup.get('passwordCtrl').value;
      const displayName = this.formGroup.get('nameCtrl').value;
      const photoURL = this.formGroup.get('photoCtrl').value;
      this.auth.signupEmail(email, password, displayName, photoURL);
    }
  }
  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = this.fb.group({
      nameCtrl: ['', [
        Validators.required,
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

  public preview() {
    this.imgUrl = this.formGroup.get('photoCtrl').value;
  }
}
