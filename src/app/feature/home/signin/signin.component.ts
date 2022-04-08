import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'user-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent extends CreateBaseForm implements OnInit, OnDestroy {

  public loginEmail() {
    return this.formGroup.get('loginEmailCtrl');
  }

  public loginPass() {
    return this.formGroup.get('loginPassCtrl');
  }

  constructor(
    protected auth: AuthService,
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
  ) {
    super(fb, changeDetectorRef);
  }

  public login(): boolean {
    if (!this.formGroup.valid) {
      alert('correctly  required fields!');
      return false;
    } else {
      this.auth.signinEmail(this.formGroup.get('loginEmailCtrl').value, this.formGroup.get('loginPassCtrl').value);
    }
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = this.fb.group({
      loginEmailCtrl: ['', [
        Validators.required,
        Validators.email,
      ]],
      loginPassCtrl: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25)
      ]]
    });
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public loginGoogle(): void {
    this.auth.signinGoogle();
  }

}
