import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/service/auth.service';
import { TeamDto } from 'src/app/shared/interface/dto.interface';
import { AuctionLeague, Team } from 'src/app/shared/interface/model.interface';
import { findTeam } from 'src/app/shared/utils/findTeam.utils';
import { LeagueStoreService } from 'src/app/core/service/store/league-store.service';

@Component({
  selector: 'auction-lobby',
  templateUrl: './auction-lobby.component.html',
  styleUrls: ['./auction-lobby.component.scss']
})
export class AuctionLobbyComponent implements OnInit {

  isLeagueReady = false;
  thisDtoTeam: TeamDto = {};
  auctionLeague: AuctionLeague;

  // tslint:disable-next-line: variable-name
  private _thisActiveLeague: AuctionLeague;
  // tslint:disable-next-line: variable-name
  private _thisAuctionTeam: Team;

  @Input()
  public get thisAuctionTeam(): Team {
    return this._thisAuctionTeam;
  }
  public set thisAuctionTeam(value: Team) {
    this._thisAuctionTeam = value;
  }
  @Input()
  public get thisActiveLeague(): AuctionLeague {
    return this._thisActiveLeague;
  }
  public set thisActiveLeague(value: AuctionLeague) {
    console.log('auction lobby this active league', value);
    this._thisActiveLeague = value;
  }
  constructor(
    public dialog: MatDialog,
    private leagueStoreService: LeagueStoreService
  ) { }

  ngOnInit(): void {
    // transaction to make ready. update leagueStatus to ready as well. return League from this service. and if league is ready run another call to begin auction (goauction/init/) 
    // In html show table of whose turn it is. Need to send event emitter and use input for button to add player is available.
    // Need to show table of whose the current player and what his bid is. and show button to bid or not to bid.  
    // logic for bidding or not bidding (service) needs to evaluate if everyone has made a decision or not.  create field for "madeBid" for Team. make a function in eclipse to finalize bid and move to next player w/ transaction.
  }
}
