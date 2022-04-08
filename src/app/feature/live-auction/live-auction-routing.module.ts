import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveAuctionComponent } from './live-auction.component';
import { LastSeasonResolver } from 'src/app/core/resolve/last-season.resolve';
import { AuthGuard } from 'src/app/core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LiveAuctionComponent,
    resolve: { auctionValues: LastSeasonResolver }, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveAuctionRoutingModule { }
