import { ChangeDetectorRef, Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import anime from 'animejs/lib/anime.es.js';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'user-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent extends CreateBaseForm implements OnInit, AfterViewInit, OnDestroy {

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
  public ngAfterViewInit(): void {
    // Anime
    var current = null;
    document.querySelector('#email').addEventListener('focus', function (e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1686',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#password').addEventListener('focus', function (e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1086',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#submit').addEventListener('focus', function (e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public loginGoogle(): void {
    this.auth.signinGoogle();
  }

}
