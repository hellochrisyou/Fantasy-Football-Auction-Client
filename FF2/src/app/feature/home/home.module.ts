import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateLeagueModule } from '../create-league/create-league.module';
import { JoinAuctionModule } from '../join-league/join-league.module';
import { LiveAuctionModule } from '../live-auction/live-auction.module';
import { MyAccountModule } from '../my-account/my-account.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [HomeComponent, SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateLeagueModule,
    JoinAuctionModule,
    LiveAuctionModule,
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
