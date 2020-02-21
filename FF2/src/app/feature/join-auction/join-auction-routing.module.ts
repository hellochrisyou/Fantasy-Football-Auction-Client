import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

import { JoinAuctionComponent } from './join-auction.component';


const routes: Routes = [
  {
    path: '',
    component: JoinAuctionComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinAuctionRoutingModule { }
