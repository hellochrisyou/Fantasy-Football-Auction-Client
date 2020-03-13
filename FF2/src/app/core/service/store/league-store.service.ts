import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { BehaviorSubject } from 'rxjs';
import { AuctionLeague, Team } from 'src/app/shared/interface/model.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeagueStoreService {

  constructor() { }

  private _auctionLeagueStore: AuctionLeague;
  private _auctionTeamStore: Team;

  public get auctionLeague() {
    return this._auctionLeagueStore;
  }

  public set auctionLeague(auctionLeague: AuctionLeague) {
    this._auctionLeagueStore = auctionLeague;
  }

  public get auctionTeam() {
    return this._auctionTeamStore;
  }

  public set auctionTeam(auctionTeam: Team) {
    this._auctionTeamStore = auctionTeam;
  }

}
