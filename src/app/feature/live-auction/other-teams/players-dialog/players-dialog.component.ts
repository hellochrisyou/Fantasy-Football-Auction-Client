import { Component, OnInit, Inject } from '@angular/core';
import { Player } from 'src/app/shared/interface/model.interface';
import { PLAYER_COL_OBJ, PLAYER_DISPLAY, OTHER_PLAYER_DISPLAY, OTHER_PLAYER_COL_OBJ } from 'src/app/shared/const/column.const';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TeamPlayers } from '../../../../shared/interface/model.interface';

@Component({
  selector: 'app-players-dialog',
  templateUrl: './players-dialog.component.html',
  styleUrls: ['./players-dialog.component.scss']
})
export class PlayersDialogComponent implements OnInit {

  playerArr: Player[] = [];
  readonly OTHER_PLAYER_COL_OBJ = OTHER_PLAYER_COL_OBJ;
  readonly OTHER_PLAYER_DISPLAY = OTHER_PLAYER_DISPLAY;

  constructor(
    private dialogRef: MatDialogRef<PlayersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TeamPlayers
  ) { }

  ngOnInit(): void {
    console.log('this.data.auctionPlayers', this.data);
    this.dialogRef.updateSize('500px');
    this.playerArr = this.data.players;
  }

}
