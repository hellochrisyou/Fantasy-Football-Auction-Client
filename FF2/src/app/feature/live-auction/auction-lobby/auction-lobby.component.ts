import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/service/auth.service';
import { TeamDto } from 'src/app/shared/interface/dto.interface';
import { AuctionLeague, Team } from 'src/app/shared/interface/model.interface';
import { findTeam } from 'src/app/shared/utils/findTeam.utils';

@Component({
  selector: 'auction-lobby',
  templateUrl: './auction-lobby.component.html',
  styleUrls: ['./auction-lobby.component.scss']
})
export class AuctionLobbyComponent implements OnInit {

  isLeagueReady = false;


  thisDtoTeam: TeamDto = {};

  @Input()
  public get thisTeam(): Team {
    return this._thisTeam;
  }
  public set thisTeam(value: Team) {
    this._thisTeam = value;
  }
  @Input()
  public get auctionLeague(): AuctionLeague {
    return this._auctionLeague;
  }
  public set auctionLeague(auctionLeague: AuctionLeague) {
    this._auctionLeague = auctionLeague;
  }

  // tslint:disable-next-line: variable-name
  private _thisTeam: Team;
  // tslint:disable-next-line: variable-name
  public _auctionLeague: AuctionLeague;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    console.log('leaguready', this.isLeagueReady);
    console.log('2', this.thisTeam);

    // transaction to make ready. update leagueStatus to ready as well. return League from this service. and if league is ready run another call to begin auction (goauction/init/) 
    // In html show table of whose turn it is. Need to send event emitter and use input for button to add player is available.
    // Need to show table of whose the current player and what his bid is. and show button to bid or not to bid.  
    // logic for bidding or not bidding (service) needs to evaluate if everyone has made a decision or not.  create field for "madeBid" for Team. make a function in eclipse to finalize bid and move to next player w/ transaction.
  }
}
