import { Injectable } from '@angular/core';
import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class AuctionSortService {

  constructor() { }

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
    auctionArr.forEach(player => {
      switch (player.position) {
        case 'QB': {
          this.tmpQbArray.push(player);
          break;
        }
        case 'RB': {
          this.tmpRbArray.push(player);
          break;
        }
        case 'WR': {
          this.tmpWrArray.push(player);
          break;
        }
        case 'TE': {
          this.tmpTeArray.push(player);
          break;
        }
        case 'DEF': {
          this.tmpDefArray.push(player);
          break;
        }
        case 'K': {
          this.tmpKArray.push(player);
          break;
        }
      }
    });
  }
}

