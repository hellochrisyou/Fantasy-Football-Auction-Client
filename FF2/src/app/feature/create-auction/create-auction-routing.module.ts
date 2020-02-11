import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAuctionComponent } from './create-auction.component';


const routes: Routes = [
  {
    path: '',
    component: CreateAuctionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAuctionRoutingModule { }
