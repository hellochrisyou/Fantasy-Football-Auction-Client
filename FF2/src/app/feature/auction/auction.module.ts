import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { LiveAuctionComponent } from './live-auction/live-auction.component';


@NgModule({
  declarations: [CreateAuctionComponent, LiveAuctionComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ],
  exports: [CreateAuctionComponent, LiveAuctionComponent]
})
export class AuctionModule { }
