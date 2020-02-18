import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateAuctionModule } from '../create-auction/create-auction.module';
import { JoinAuctionModule } from '../join-auction/join-auction.module';
import { LiveAuctionModule } from '../live-auction/live-auction.module';
import { MyAccountModule } from '../my-account/my-account.module';
import { ProfileModule } from '../profile/profile.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [HomeComponent, SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateAuctionModule,
    JoinAuctionModule,
    LiveAuctionModule,
    ProfileModule,
    MyAccountModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    SignupComponent,
    SigninComponent
  ]
})
export class HomeModule { }
