import { Component, OnInit, Inject } from '@angular/core';
import { Player } from 'src/app/shared/interface/model.interface';
import { PLAYER_COL_OBJ, PLAYER_DISPLAY } from 'src/app/shared/const/column.const';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-players-dialog',
  templateUrl: './players-dialog.component.html',
  styleUrls: ['./players-dialog.component.scss']
})
export class PlayersDialogComponent implements OnInit {

  playerArr: Player[] = [];
  readonly PLAYER_COL_OBJ = PLAYER_COL_OBJ;
  readonly PLAYER_DISPLAY = PLAYER_DISPLAY;

  constructor(    
    private dialogRef: MatDialogRef<PlayersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Player[]
  ) { }

  ngOnInit(): void {
    this.dialogRef.updateSize('250px');
    this.playerArr = this.data;
  }

}
