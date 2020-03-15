import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { BehaviorSubject } from 'rxjs';
import { SnakeLeague, Team } from 'src/app/shared/interface/model.interface';
import { map } from 'rxjs/operators';
import { findTeam } from 'src/app/shared/utils/findTeam.utils';

@Injectable({
  providedIn: 'root'
})
export class SnakeLeagueStoreService {

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: variable-name
  private _snakeLeagueStore: SnakeLeague;
  // tslint:disable-next-line: variable-name
  private _snakeTeamStore: Team;

  public get snakeLeague() {
    return this._snakeLeagueStore;
  }

  public set snakeLeague(snakeLeague: SnakeLeague) {
    this._snakeLeagueStore = snakeLeague;
    this._snakeTeamStore = findTeam(this.authService.authState.email, this._snakeLeagueStore);
  }

  public get snakeTeamStore() {
    return this._snakeTeamStore;
  }

  public set snakeTeamStore(snakeTeam: Team) {
    this._snakeTeamStore = snakeTeam;
  }

}
