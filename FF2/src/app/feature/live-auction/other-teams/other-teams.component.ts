import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { Team } from 'src/app/shared/interface/model.interface';
import { MatDialog } from '@angular/material';
import { PlayersDialogComponent } from './players-dialog/players-dialog.component';
declare var $: any;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'other-teams',
  templateUrl: './other-teams.component.html',
  styleUrls: ['./other-teams.component.scss']
})
export class OtherTeamsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  _otherTeamsArr: Team[];

  @Input()
  public get otherTeamsArr(): Team[] {
    return this._otherTeamsArr;
  }
  public set otherTeamsArr(value: Team[]) {
    this._otherTeamsArr = value;
    // console.log('other team array', this._otherTeamsArr);
  }

  constructor(
    public auth: AuthService,
    public dialog: MatDialog,

  ) { }


  ngOnInit(): void {
  }

  public showPlayers(index: number): void {
    console.log('players', this.otherTeamsArr[index].auctionPlayers);
    if (this.otherTeamsArr[index].auctionPlayers.length !== 0) {
      const dialogRef = this.dialog.open(PlayersDialogComponent, {
        data: {
          players: this.otherTeamsArr[index].auctionPlayers
        }
      });
    }
  }
}
