import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { LiveAuctionComponent } from './live-auction/live-auction.component';
import { AuctionComponent } from './auction.component';
import { JoinAuctionComponent } from './join-auction/join-auction.component';


const routes: Routes = [
  {
    path: 'auction',
    component: AuctionComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'create-auction', component: CreateAuctionComponent },
          { path: 'join-auction', component: JoinAuctionComponent },
          { path: 'live-auction', component: LiveAuctionComponent },
          { path: '', redirectTo: '/auction', pathMatch: 'full' },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
