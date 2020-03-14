import { Injectable, EventEmitter, Output } from '@angular/core';
import { QB, RB, WR, TE, DEF, Kicker, Team } from 'src/app/shared/interface/model.interface';
import { AuctionLeague } from '../../shared/interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  @Output() refreshTableOutput: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() refreshLeagueOutput: EventEmitter<AuctionLeague> = new EventEmitter<AuctionLeague>();
  @Output() refreshTeamOutput: EventEmitter<Team> = new EventEmitter<Team>();

  constructor() { }

  public refreshTable(): void {
    this.refreshTableOutput.emit(true);
  }

  public refreshLeague(auctionLeague: AuctionLeague): void {
    this.refreshLeagueOutput.emit(auctionLeague);
  }

  public refreshTeam(auctionTeam: Team): void {
    this.refreshLeagueOutput.emit(auctionTeam);
  }

}
