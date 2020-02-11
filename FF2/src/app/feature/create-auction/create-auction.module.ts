import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateAuctionRoutingModule } from './create-auction-routing.module';
import { CreateAuctionComponent } from './create-auction.component';



@NgModule({
  declarations: [CreateAuctionComponent],
  imports: [
    SharedModule,
    CreateAuctionRoutingModule
  ],
  exports: [CreateAuctionComponent]
})
export class CreateAuctionModule { }
