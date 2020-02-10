import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { LiveAuctionComponent } from './live-auction/live-auction.component';


const routes: Routes = [
  {
    path: 'create-auction',
    component: CreateAuctionComponent,
  },
  {
    path: 'live-auction',
    component: LiveAuctionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
