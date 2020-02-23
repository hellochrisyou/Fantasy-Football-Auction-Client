import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmitService } from 'src/app/core/service/emit.service';
import { HttpService } from 'src/app/core/service/http.service';
import { CreateComponent } from 'src/app/shared/component/dialog/create/create.component';
import { LEAGUE_COL_OBJ, LEAGUE_DISPLAY } from 'src/app/shared/const/column.const';
import { APIURL } from 'src/app/shared/const/url.const';
import { AuctionLeague } from 'src/app/shared/interface/model.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'join-auction',
  templateUrl: './join-auction.component.html',
  styleUrls: ['./join-auction.component.scss']
})
export class JoinAuctionComponent implements OnInit {

  LEAGUE_COL_OBJ = LEAGUE_COL_OBJ;
  LEAGUE_DISPLAY = LEAGUE_DISPLAY;
  leagueArr: AuctionLeague[] = [];
  constructor(
    private emitService: EmitService,
    private httpService: HttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.httpService.get(APIURL.BACKENDCALL + '/league/getAllLeagues/').subscribe((data) => {
      console.log('data here', data);
      this.leagueArr = data;
      this.emitService.refreshTable();
    });
  }

  addLeague(index: number) {
    this.openDialog(index);
  }

  private openDialog(index: number): void {
    console.log(this.leagueArr[index]);
    const dialogRef = this.dialog.open(CreateComponent, {
      // width: '250px',
      data: this.leagueArr[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
