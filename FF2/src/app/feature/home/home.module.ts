import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [HomeComponent, SignupComponent, SigninComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    SignupComponent,
    SigninComponent
  ]
})
export class HomeModule { }
