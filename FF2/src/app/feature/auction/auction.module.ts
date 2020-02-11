import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { LiveAuctionComponent } from './live-auction/live-auction.component';
import { AuctionComponent } from './auction.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JoinAuctionComponent } from './join-auction/join-auction.component';


@NgModule({
  declarations: [CreateAuctionComponent, LiveAuctionComponent, AuctionComponent, JoinAuctionComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuctionRoutingModule
  ],
  exports: [CreateAuctionComponent, LiveAuctionComponent, AuctionComponent, JoinAuctionComponent]
})
export class AuctionModule { }
