import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BidComponent } from 'src/app/shared/component/dialog/bid/bid.component';
import { AuctionLeague, Player, Team } from 'src/app/shared/interface/model.interface';
import { BidDto } from 'src/app/shared/interface/dto.interface';
import { HttpService } from 'src/app/core/service/http.service';
import { APIURL } from 'src/app/shared/const/url.const';
import { SnackbarComponent } from 'src/app/shared/component/snackbar/snackbar.component';

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

  // tslint:disable-next-line: variable-name
  private _ongoingLeague: AuctionLeague;
  // tslint:disable-next-line: variable-name
  private _thisTeam: Team;

  @Input()
  public get ongoingLeague(): AuctionLeague {
    return this._ongoingLeague;
  }
  public set ongoingLeague(value: AuctionLeague) {
    this._ongoingLeague = value;
  }
  @Input()
  public get thisTeam(): Team {
    return this._thisTeam;
  }
  public set thisTeam(value: Team) {
    this._thisTeam = value;
  }
  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    // this.currentPlayer = this._ongoingLeague.currentPlayer;
    this.bidAmount = Math.floor(+this.ongoingLeague.currentBid);
  }

  public openBidDialog() {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisTeam.budget,
        currentBid: this._ongoingLeague.currentBid
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      console.log('The dialog was closed.data:', bidAmountResult.bidAmount);
      this.thisBidDto.leagueName = this._ongoingLeague.leagueName;
      this.thisBidDto.teamName = this.thisTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this._ongoingLeague.currentPlayer;
      this.httpService.post(APIURL.AUCTIONCALL + '/makeBid/', this.thisBidDto).subscribe(data => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'make-bid');
      });
    });
  }

  public passTurn() {
    this.thisBidDto.leagueName = this._ongoingLeague.leagueName;
    this.thisBidDto.teamName = this.thisTeam.teamName;
    this.thisBidDto.newBid = +this._ongoingLeague.currentBid;
    this.thisBidDto.playerName = this._ongoingLeague.currentPlayer;
    this.httpService.post(APIURL.AUCTIONCALL + '/noBid/', this.thisBidDto).subscribe(data => {
      this.openSnackBar('You choose to pass on: ' + this.thisBidDto.playerName, 'no-bid');
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
