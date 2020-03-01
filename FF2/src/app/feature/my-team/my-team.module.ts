import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamComponent } from './my-team.component';
import { MyTeamRoutingModule } from './my-team-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PendingAuctionComponent } from './pending-auction/pending-auction.component';
import { PendingSnakeComponent } from './pending-snake/pending-snake.component';
import { OngoingTeamComponent } from './ongoing-team/ongoing-team.component';



@NgModule({
  declarations: [MyTeamComponent, PendingAuctionComponent, PendingSnakeComponent, OngoingTeamComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyTeamRoutingModule
  ]
})
export class MyTeamModule { }
