import { Injectable } from '@angular/core';
import { QB, RB, WR, TE, DEF, Kicker, LastSeasonPlayers, Player } from 'src/app/shared/interface/model.interface';
import { LeagueStoreService } from './store/league-store.service';
import { PlayerStoreService } from './store/player-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionSortService {

  constructor(private playerStoreService: PlayerStoreService) { }

  tmpPlayer: Player = {
    Select: 'Select'
  };



  lastSeasonPlayers: LastSeasonPlayers = {
    quaterBacks: [],
    runningsBacks: [],
    wideReceivers: [],
    tightEnds: [],
    defenses: [],
    kickers: []
  };

  // tslint:disable-next-line: variable-name
  private _tmpQbArray: QB[] = [];
  // tslint:disable-next-line: variable-name
  private _tmpRbArray: RB[] = [];
  // tslint:disable-next-line: variable-name
  private _tmpWrArray: WR[] = [];
  // tslint:disable-next-line: variable-name
  private _tmpTeArray: TE[] = [];
  // tslint:disable-next-line: variable-name
  private _tmpDefArray: DEF[] = [];
  // tslint:disable-next-line: variable-name
  private _tmpKArray: Kicker[] = [];

  public get tmpQbArray(): QB[] {
    return this._tmpQbArray;
  }
  public set tmpQbArray(value: QB[]) {
    this._tmpQbArray = value;
  }
  public get tmpRbArray(): RB[] {
    return this._tmpRbArray;
  }
  public set tmpRbArray(value: RB[]) {
    this._tmpRbArray = value;
  }
  public get tmpWrArray(): WR[] {
    return this._tmpWrArray;
  }
  public set tmpWrArray(value: WR[]) {
    this._tmpWrArray = value;
  }
  public get tmpTeArray(): TE[] {
    return this._tmpTeArray;
  }
  public set tmpTeArray(value: TE[]) {
    this._tmpTeArray = value;
  }
  public get tmpDefArray(): DEF[] {
    return this._tmpDefArray;
  }
  public set tmpDefArray(value: DEF[]) {
    this._tmpDefArray = value;
  }
  public get tmpKArray(): Kicker[] {
    return this._tmpKArray;
  }
  public set tmpKArray(value: Kicker[]) {
    this._tmpKArray = value;
  }

  public sortAuctionPlayers(auctionArr: any): void {
    for (const player of auctionArr) {
      this.tmpPlayer = {
        Select: 'Select'
      };
      switch (player.position) {
        case 'QB': {
          this.tmpPlayer.Select = 'Select';
          this.tmpPlayer.displayName = player.displayName;
          this.tmpPlayer.team = player.team;
          this.tmpPlayer.position = player.position;
          this.tmpPlayer.minPrice = player.minPrice;
          this.tmpPlayer.avgPrice = player.avgPrice;
          this.tmpPlayer.maxPrice = player.maxPrice;
          this.playerStoreService.addQb(this.tmpPlayer);
          break;
        }
        case 'RB': {
          this.tmpPlayer.Select = 'Select';
          this.tmpPlayer.displayName = player.displayName;
          this.tmpPlayer.team = player.team;
          this.tmpPlayer.position = player.position;
          this.tmpPlayer.minPrice = player.minPrice;
          this.tmpPlayer.avgPrice = player.avgPrice;
          this.tmpPlayer.maxPrice = player.maxPrice;
          this.playerStoreService.addRb(this.tmpPlayer);
          break;
        }
        case 'WR': {
          this.tmpPlayer.Select = 'Select';
          this.tmpPlayer.displayName = player.displayName;
          this.tmpPlayer.team = player.team;
          this.tmpPlayer.position = player.position;
          this.tmpPlayer.minPrice = player.minPrice;
          this.tmpPlayer.avgPrice = player.avgPrice;
          this.tmpPlayer.maxPrice = player.maxPrice;
          this.playerStoreService.addWr(this.tmpPlayer);
          break;
        }
        case 'TE': {
          this.tmpPlayer.Select = 'Select';
          this.tmpPlayer.displayName = player.displayName;
          this.tmpPlayer.team = player.team;
          this.tmpPlayer.position = player.position;
          this.tmpPlayer.minPrice = player.minPrice;
          this.tmpPlayer.avgPrice = player.avgPrice;
          this.tmpPlayer.maxPrice = player.maxPrice;
          this.playerStoreService.addTe(this.tmpPlayer);
          break;
        }
        case 'DEF': {
          this.tmpPlayer.Select = 'Select';
          this.tmpPlayer.displayName = player.displayName;
          this.tmpPlayer.team = player.team;
          this.tmpPlayer.position = player.position;
          this.tmpPlayer.minPrice = player.minPrice;
          this.tmpPlayer.avgPrice = player.avgPrice;
          this.tmpPlayer.maxPrice = player.maxPrice;
          this.playerStoreService.addDef(this.tmpPlayer);
          break;
        }
        case 'K': {
          this.tmpPlayer.Select = 'Select';
          this.tmpPlayer.displayName = player.displayName;
          this.tmpPlayer.team = player.team;
          this.tmpPlayer.position = player.position;
          this.tmpPlayer.minPrice = player.minPrice;
          this.tmpPlayer.avgPrice = player.avgPrice;
          this.tmpPlayer.maxPrice = player.maxPrice;
          this.playerStoreService.addKicker(this.tmpPlayer);
          break;
        }
      }

    }
  }
}

