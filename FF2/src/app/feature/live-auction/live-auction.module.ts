import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LiveAuctionRoutingModule } from './live-auction-routing.module';
import { LiveAuctionComponent } from './live-auction.component';



@NgModule({
  declarations: [LiveAuctionComponent],
  imports: [
    SharedModule,
    LiveAuctionRoutingModule
  ],
  exports: [LiveAuctionComponent]
})
export class LiveAuctionModule { }
