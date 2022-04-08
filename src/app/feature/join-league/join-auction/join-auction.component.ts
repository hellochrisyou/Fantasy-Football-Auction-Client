import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/service/auth.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { HttpService } from 'src/app/core/service/http.service';
import { CreateComponent } from 'src/app/shared/component/dialog/create/create.component';
import { AUCTION_COL_OBJ, AUCTION_DISPLAY } from 'src/app/shared/const/column.const';
import { APIURL } from 'src/app/shared/const/url.const';
import { AuctionLeague } from 'src/app/shared/interface/model.interface';
import { refreshLeagues } from 'src/app/shared/utils/refreshLeagues.util';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'join-auction',
  templateUrl: './join-auction.component.html',
  styleUrls: ['./join-auction.component.scss']
})
export class JoinAuctionComponent implements OnInit {

  AUCTION_COL_OBJ = AUCTION_COL_OBJ;
  AUCTION_DISPLAY = AUCTION_DISPLAY;
  auctionArr: AuctionLeague[] = [];

  constructor(
    private emitService: EmitService,
    private httpService: HttpService,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef,
    private authService: AuthService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchAllLeagues();
  }

  public addLeague(index: number) {
    this.openDialog(index);
  }
  private openDialog(index: number): void {
    console.log('join league dialog about to open. this league is: ', this.auctionArr);
    const dialogRef = this.dialog.open(CreateComponent, {
      // width: '250px',
      data: {
        leagueName: this.auctionArr[index].leagueName,
        maxPlayers: this.auctionArr[index].maxPlayers,
        leagueType: 'Auction',
        ppr: this.auctionArr[index].ppr,
        budget: this.auctionArr[index].totalBudget
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchAllLeagues();
    });
  }

  public fetchAllLeagues() {
    this.httpService.post(APIURL.AUCTIONCALL + '/getAllLeagues/', this.authService.authState.email).subscribe((leagueData) => {
      this.auctionArr = leagueData;
      this.auctionArr = refreshLeagues(this.auctionArr, this.authService.authState.email);
      this.emitService.refreshTable();
      this.changeDetector.markForCheck();
    });
  }
}
