import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinAuctionComponent } from './join-auction.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JoinAuctionRoutingModule } from './join-auction-routing.module';



@NgModule({
  declarations: [JoinAuctionComponent],
  imports: [
    SharedModule,
    JoinAuctionRoutingModule
  ],
  exports: [
    JoinAuctionComponent
  ]
})
export class JoinAuctionModule { }
