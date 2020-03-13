import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { BehaviorSubject } from 'rxjs';
import { AuctionLeague, Team } from 'src/app/shared/interface/model.interface';
import { map } from 'rxjs/operators';
import { findTeam } from 'src/app/shared/utils/findTeam.utils';

@Injectable({
  providedIn: 'root'
})
export class LeagueStoreService {

  constructor(private authService: AuthService) { }

  private _auctionLeagueStore: AuctionLeague;
  private _auctionTeamStore: Team;

  public get auctionLeague() {
    return this._auctionLeagueStore;
  }

  public set auctionLeague(auctionLeague: AuctionLeague) {
    this._auctionLeagueStore = auctionLeague;
    this._auctionTeamStore = findTeam(this.authService.authState.email, this._auctionLeagueStore);
  }

  public get auctionTeamStore() {
    return this._auctionTeamStore;
  }

  public set auctionTeamStore(auctionTeam: Team) {
    this._auctionTeamStore = auctionTeam;
  }

}
