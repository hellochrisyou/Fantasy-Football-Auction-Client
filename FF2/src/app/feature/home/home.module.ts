import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    SignupComponent,
    SigninComponent
  ]
})
export class HomeModule { }
