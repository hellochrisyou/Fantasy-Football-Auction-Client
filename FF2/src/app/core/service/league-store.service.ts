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

  // tslint:disable-next-line: variable-name
  private readonly _auctionLeague = new BehaviorSubject<AuctionLeague>({});
  private readonly _auctionTeam = new BehaviorSubject<Team>({});

  readonly auctionLeague$ = this._auctionLeague.asObservable();
  readonly auctionTeam$ = this._auctionTeam.asObservable();

  public get auctionLeague() {
    return this._auctionLeague.getValue();
  }

  public set auctionLeague(auctionLeague: AuctionLeague) {
    this._auctionLeague.next(auctionLeague);
  }

  public get auctionTeam() {
    return this._auctionTeam.getValue();
  }

  public set auctionTeam(team: Team) {
    this._auctionTeam.next(team);
  }
}
