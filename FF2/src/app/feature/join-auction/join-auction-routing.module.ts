import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinAuctionComponent } from './join-auction.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: JoinAuctionComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinAuctionRoutingModule { }
