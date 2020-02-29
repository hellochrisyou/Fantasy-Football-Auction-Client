import { Component, OnInit } from '@angular/core';
import { SnakeLeague } from 'src/app/shared/interface/model.interface';
import { EmitService } from 'src/app/core/service/emit.service';
import { HttpService } from 'src/app/core/service/http.service';
import { MatDialog } from '@angular/material';
import { APIURL } from 'src/app/shared/const/url.const';
import { CreateComponent } from 'src/app/shared/component/dialog/create/create.component';
import { SNAKE_COL_OBJ, SNAKE_DISPLAY } from 'src/app/shared/const/column.const';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'join-snake',
  templateUrl: './join-snake.component.html',
  styleUrls: ['./join-snake.component.scss']
})
export class JoinSnakeComponent implements OnInit {

  SNAKE_COL_OBJ = SNAKE_COL_OBJ;
  SNAKE_DISPLAY = SNAKE_DISPLAY;
  snakeArr: SnakeLeague[] = [];

  constructor(
    private emitService: EmitService,
    private httpService: HttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.httpService.get(APIURL.SNAKECALL + '/getAllLeagues/').subscribe((snakeData) => {
      console.log('snake data: ', snakeData);
      this.snakeArr = snakeData;
      this.emitService.refreshTable();
    });
  }

  addLeague(index: number) {
    this.openDialog(index);
  }

  private openDialog(index: number): void {
    console.log(this.snakeArr[index]);
    const dialogRef = this.dialog.open(CreateComponent, {
      // width: '250px',
      data: {
        leagueName: this.snakeArr[index].leagueName,
        maxPlayers: this.snakeArr[index].maxPlayers,
        leagueType: 'Snake',
        ppr: this.snakeArr[index].ppr,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
