import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BidComponent } from 'src/app/shared/component/dialog/bid/bid.component';
import { AuctionLeague, Player, Team } from 'src/app/shared/interface/model.interface';
import { BidDto } from 'src/app/shared/interface/dto.interface';
import { HttpService } from 'src/app/core/service/http.service';
import { APIURL } from 'src/app/shared/const/url.const';
import { SnackbarComponent } from 'src/app/shared/component/snackbar/snackbar.component';
import { LeagueStoreService } from 'src/app/core/service/league-store.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ongoing-draft',
  templateUrl: './ongoing-draft.component.html',
  styleUrls: ['./ongoing-draft.component.scss']
})
export class OngoingDraftComponent implements OnInit {

  draftTurn: string;
  currentPlayer: Player;
  currentBidder: string;
  currentBid: string;
  bidAmount: number;
  thisBidDto: BidDto = {};

  thisActiveLeague: AuctionLeague;
  thisTeam: Team;

  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private leagueStoreService: LeagueStoreService
  ) { }

  ngOnInit(): void {
    // this.currentPlayer = this._ongoingLeague.currentPlayer;
    this.leagueStoreService.auctionLeague$.subscribe(leagueObservable => {
      console.log('leagueObservable live this.ongoing-draft.ts', leagueObservable);
      this.thisActiveLeague = leagueObservable;
    });
    console.log('2', this.thisTeam);
    this.leagueStoreService.auctionTeam$.subscribe(teamObservable => {
      console.log('teamObservable live this.ongoing-draft.ts' + teamObservable);
      this.thisTeam = teamObservable;
    });
    this.bidAmount = Math.floor(+this.thisActiveLeague.currentBid);
  }

  public openBidDialog() {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisTeam.currentBudget,
        currentBid: this.thisActiveLeague.currentBid,
        // team:
        // position:
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      console.log('The dialog was closed.data:', bidAmountResult.bidAmount);
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.thisActiveLeague.currentPlayer;
      // this.thisBigDto.position = 
      // this.thisBigDto.team = 
      this.httpService.post(APIURL.AUCTIONCALL + '/makeBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'make-bid');
        this.leagueStoreService.auctionLeague = newLeague;
      });
    });
  }

  public passTurn() {
    this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
    console.log('this team name', this.thisTeam);
    this.thisBidDto.teamName = this.thisTeam.teamName;
    this.thisBidDto.newBid = +this.thisActiveLeague.currentBid;
    this.thisBidDto.playerName = this.thisActiveLeague.currentPlayer;
    this.thisBidDto.teamName = this.thisTeam.teamName;
    // this.thisBidDto.position = 
    // this.thisBigDto.team = 
    this.httpService.post(APIURL.AUCTIONCALL + '/noBid/', this.thisBidDto).subscribe(newLeague => {
      this.openSnackBar('You choose to pass on: ' + this.thisBidDto.playerName, 'no-bid');
      this.leagueStoreService.auctionLeague = newLeague;
    });
  }

  public openSnackBar(message: string, panelClass: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 10000
    });
  }
}
