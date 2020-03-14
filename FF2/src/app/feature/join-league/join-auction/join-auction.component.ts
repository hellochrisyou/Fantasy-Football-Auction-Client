import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AUCTION_COL_OBJ, AUCTION_DISPLAY } from 'src/app/shared/const/column.const';
import { AuctionLeague } from 'src/app/shared/interface/model.interface';
import { EmitService } from 'src/app/core/service/emit.service';
import { HttpService } from 'src/app/core/service/http.service';
import { MatDialog, MatBottomSheet } from '@angular/material';
import { APIURL } from 'src/app/shared/const/url.const';
import { CreateComponent } from 'src/app/shared/component/dialog/create/create.component';
import { AuthService } from 'src/app/core/service/auth.service';
import { BottomSheetComponent } from 'src/app/shared/component/bottom-sheet/bottom-sheet.component';
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
    this.httpService.post(APIURL.AUCTIONCALL + '/getAllOtherLeagues/', this.authService.userData[0].email).subscribe((leagueData) => {
      this.auctionArr = leagueData;
      this.auctionArr = refreshLeagues(this.auctionArr, this.authService.authState.email);
      this.emitService.refreshTable();
    });
  }
}
