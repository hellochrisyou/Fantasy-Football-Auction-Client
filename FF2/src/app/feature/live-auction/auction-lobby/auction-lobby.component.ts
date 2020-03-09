import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { HttpService } from 'src/app/core/service/http.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { APIURL } from 'src/app/shared/const/url.const';
import { TeamDto } from 'src/app/shared/interface/dto.interface';
import { AuctionLeague, Team } from 'src/app/shared/interface/model.interface';
import { checkIsLeagueReady } from 'src/app/shared/utils/league.util';
import { MatDialog } from '@angular/material';
import { BidComponent } from 'src/app/shared/component/dialog/bid/bid.component';

@Component({
  selector: 'auction-lobby',
  templateUrl: './auction-lobby.component.html',
  styleUrls: ['./auction-lobby.component.scss']
})
export class AuctionLobbyComponent implements OnInit {

  isLeagueReady = false;
  thisTeam: Team;
  thisDtoTeam: TeamDto = {};

  @Input()
  public get auctionLeague(): AuctionLeague {
    return this._auctionLeague;
  }
  public set auctionLeague(auctionLeague: AuctionLeague) {
    this._auctionLeague = auctionLeague;
  }
  public _auctionLeague: AuctionLeague;

  constructor(
    private auth: AuthService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    console.log('1', this._auctionLeague.auctionTeams);
    for (const team of this._auctionLeague.auctionTeams) {
      if (team.email === this.auth.authState.email) {
        this.thisTeam = team;
      }
    }

    console.log('leaguready', this.isLeagueReady);
    console.log('2', this.thisTeam);

    // transaction to make ready. update leagueStatus to ready as well. return League from this service. and if league is ready run another call to begin auction (goauction/init/) 
    // In html show table of whose turn it is. Need to send event emitter and use input for button to add player is available.
    // Need to show table of whose the current player and what his bid is. and show button to bid or not to bid.  
    // logic for bidding or not bidding (service) needs to evaluate if everyone has made a decision or not.  create field for "madeBid" for Team. make a function in eclipse to finalize bid and move to next player w/ transaction.
  }

  private openDialog(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      // width: '250px',
      data: {
        value: this.thisTeam.budget;
      }
    });
  }

  public setReady() {
    return this.thisTeam.isReady ? true : false;
  }
}
