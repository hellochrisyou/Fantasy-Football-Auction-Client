import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LiveAuctionRoutingModule } from './live-auction-routing.module';
import { LiveAuctionComponent } from './live-auction.component';
import { OtherTeamsComponent } from './other-teams/other-teams.component';
import { PlayersDialogComponent } from './other-teams/players-dialog/players-dialog.component';
import { AuctionLobbyComponent } from './auction-lobby/auction-lobby.component';
import { OngoingDraftComponent } from './auction-lobby/ongoing-draft/ongoing-draft.component';



@NgModule({
  declarations: [LiveAuctionComponent, OtherTeamsComponent, PlayersDialogComponent, AuctionLobbyComponent, OngoingDraftComponent],
  imports: [
    SharedModule,
    LiveAuctionRoutingModule
  ],
  exports: [LiveAuctionComponent, OtherTeamsComponent, PlayersDialogComponent, AuctionLobbyComponent]
})
export class LiveAuctionModule { }
