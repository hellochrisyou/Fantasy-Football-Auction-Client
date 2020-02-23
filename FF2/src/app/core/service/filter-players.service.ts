import { Injectable } from '@angular/core';
import { Player } from 'src/app/shared/interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterPlayersService {

  resultArray: any[] = [];
  otherMatch = false;
  myPlayers: Player[] = [];
  otherPlayers: Player[] = [];

  // Filters Waiver or Draft Players
  public filterArray(arraySet: any[]): any[] {
    this.resultArray = [];
    for (const tmp of arraySet) {
      for (const myPlayer of this.myPlayers) {
        if (myPlayer.playerName === tmp.Name) {
          continue;
        }
      }
      for (const otherPlayer of this.otherPlayers) {
        if (otherPlayer.playerName === tmp.Name) {
          continue;
        }
      }
      this.resultArray.push(tmp);
    }
    return this.resultArray;
  }

  constructor() { }

  public setPlayers(players: Player[], otherPlayers: Player[]): void {
    // Set My Players
    this.myPlayers = players;
    // Set Other Players
    this.otherPlayers = otherPlayers;
  }
}
