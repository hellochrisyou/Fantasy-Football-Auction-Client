import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { JoinLeagueRoutingModule } from './join-league-routing.module';
import { JoinLeagueComponent } from './join-league.component';
import { JoinAuctionComponent } from './join-auction/join-auction.component';
import { JoinSnakeComponent } from './join-snake/join-snake.component';



@NgModule({
  declarations: [JoinLeagueComponent, JoinAuctionComponent, JoinSnakeComponent],
  imports: [
    SharedModule,
    JoinLeagueRoutingModule
  ],
  exports: [
    JoinLeagueComponent
  ]
})
export class JoinAuctionModule { }
