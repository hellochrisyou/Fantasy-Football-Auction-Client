import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveAuctionComponent } from './live-auction.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LiveAuctionRoutingModule } from './live-auction-routing.module';



@NgModule({
  declarations: [LiveAuctionComponent],
  imports: [
    SharedModule,
    LiveAuctionRoutingModule
  ],
  exports: [LiveAuctionComponent]
})
export class LiveAuctionModule { }
