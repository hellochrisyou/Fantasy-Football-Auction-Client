import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TeamDto } from 'src/app/shared/interface/dto.interface';
import { AuctionLeague, Team } from 'src/app/shared/interface/model.interface';

import { EmitService } from '../../../core/service/emit.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auction-lobby',
  templateUrl: './auction-lobby.component.html',
  styleUrls: ['./auction-lobby.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this._thisActiveLeague = value;
  }
  constructor(
    public dialog: MatDialog,
    private emitService: EmitService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.emitService.refreshLeagueOutput.subscribe(teamsData => {
      console.log('emit service league', teamsData);
      this.thisActiveLeague = teamsData;
      this.changeDetector.markForCheck();
    });
    // transaction to make ready. update leagueStatus to ready as well. return League from this service. and if league is ready run another call to begin auction (goauction/init/) 
    // In html show table of whose turn it is. Need to send event emitter and use input for button to add player is available.
    // Need to show table of whose the current player and what his bid is. and show button to bid or not to bid.  
    // logic for bidding or not bidding (service) needs to evaluate if everyone has made a decision or not.  create field for "madeBid" for Team. make a function in eclipse to finalize bid and move to next player w/ transaction.
  }
}
