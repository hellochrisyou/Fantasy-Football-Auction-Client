import { Component, OnInit, Input  } from '@angular/core';
import { Team, AuctionLeague } from 'src/app/shared/interface/model.interface';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'auction-lobby',
  templateUrl: './auction-lobby.component.html',
  styleUrls: ['./auction-lobby.component.scss']
})
export class AuctionLobbyComponent implements OnInit {

thisTeam: Team;
leagueStatus: string;

@Input()
public get auctionLeague(): AuctionLeague {
    return this._auctionLeague;
  }
public set auctionLeague(auctionLeague: AuctionLeague) {
  this._auctionLeague = auctionLeague;
}
public _auctionLeague: AuctionLeague;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log('1', this._auctionLeague.auctionTeams);
    this.leagueStatus = this._auctionLeague.status;
    for (const team of this._auctionLeague.auctionTeams) {
      if (team.email === this.auth.authState.email) {
        this.thisTeam = team;
      }
    }
    console.log('2', this.thisTeam);
  }
public clickReady(): void {
// transaction to make ready. update leagueStatus to ready as well. return League from this service. and if league is ready run another call to begin auction (goauction/init/) 
// In html show table of whose turn it is. Need to send event emitter and use input for button to add player is available.
// Need to show table of whose the current player and what his bid is. and show button to bid or not to bid.  
// logic for bidding or not bidding (service) needs to evaluate if everyone has made a decision or not.  create field for "madeBid" for Team. make a function in eclipse to finalize bid and move to next player w/ transaction.
}
}
