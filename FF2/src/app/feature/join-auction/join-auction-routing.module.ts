import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinAuctionComponent } from './join-auction.component';


const routes: Routes = [
  {
    path: '',
    component: JoinAuctionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinAuctionRoutingModule { }
