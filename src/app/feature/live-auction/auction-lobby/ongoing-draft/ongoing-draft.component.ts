import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/core/service/http.service';
import { AuctionLeagueStoreService } from 'src/app/core/service/store/auction-league-store.service';
import { BidComponent } from 'src/app/shared/component/dialog/bid/bid.component';
import { SnackbarComponent } from 'src/app/shared/component/snackbar/snackbar.component';
import { APIURL } from 'src/app/shared/const/url.const';
import { BidDto } from 'src/app/shared/interface/dto.interface';
import { AuctionLeague, Player, Team } from 'src/app/shared/interface/model.interface';

import { EmitService } from '../../../../core/service/emit.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ongoing-draft',
  templateUrl: './ongoing-draft.component.html',
  styleUrls: ['./ongoing-draft.component.scss'],
})
export class OngoingDraftComponent implements OnInit {

  draftTurn: string;
  currentPlayer: Player;
  currentBidder: string;
  currentBid: string;
  bidAmount: number;
  thisBidDto: BidDto = {};
  mainSection: any;
  dialogRef: any;
  // tslint:disable-next-line: variable-name
  private _thisActiveLeague: AuctionLeague;
  // tslint:disable-next-line: variable-name
  private _thisAuctionTeam: Team;

  @Input()
  public get thisAuctionTeam(): Team {
    return this._thisAuctionTeam;
  }
  public set thisAuctionTeam(value: Team) {
    this._thisAuctionTeam = value;
  }
  @Input()
  public get thisActiveLeague(): AuctionLeague {
    return this._thisActiveLeague;
  }
  public set thisActiveLeague(value: AuctionLeague) {
    console.log('auction lobby this active league', value);
    this._thisActiveLeague = value;
  }

  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private emitService: EmitService,
    private auctionLeagueStoreService: AuctionLeagueStoreService,
    private changeDetector: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    // this.currentPlayer = this._ongoingLeague.currentPlayer;

    this.bidAmount = Math.floor(+this.thisActiveLeague.currentBid);

    console.log('draft turn', this.thisActiveLeague.draftTurn);
    console.log('draft positoin', this.thisAuctionTeam.draftPosition);
  }

  public openBidDialog() {
    this.dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.budget,
        currentBid: this.thisActiveLeague.currentBid,
        // team:
        // position:
      }
    });
    this.dialogRef.afterClosed().subscribe(bidAmountResult => {
      console.log('The dialog was closed.data:', bidAmountResult.bidAmount);
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.thisActiveLeague.currentPlayer;
      this.thisBidDto.position = this.thisActiveLeague.currentPlayerPosition;
      this.thisBidDto.team = this.thisActiveLeague.currentPlayerTeam;
      this.httpService.post(APIURL.AUCTIONCALL + '/makeBid/', this.thisBidDto).subscribe(newLeague => {
        this.thisActiveLeague = newLeague;
        this.changeDetector.markForCheck();
        this.emitService.refreshOtherTeams(newLeague.auctionTeams);
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'make-bid');

        console.log('drafted new bid: newLeague:', newLeague);

      });
    });
  }

  public passTurn() {
    this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
    console.log('this team name', this.thisAuctionTeam);
    this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
    this.thisBidDto.newBid = +this.thisActiveLeague.currentBid;
    this.thisBidDto.playerName = this.thisActiveLeague.currentPlayer;
    this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
    // this.thisBidDto.position = 
    // this.thisBigDto.team = 
    this.httpService.post(APIURL.AUCTIONCALL + '/noBid/', this.thisBidDto).subscribe(newLeague => {
      this.thisActiveLeague = newLeague;
      this.changeDetector.markForCheck();
      this.emitService.refreshOtherTeams(newLeague.auctionTeams);
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

  public refreshService(newLeague: AuctionLeague) {
    this.auctionLeagueStoreService.auctionLeague = newLeague;
    this.thisAuctionTeam = this.auctionLeagueStoreService.auctionTeamStore;
    console.log('refresh league', this.auctionLeagueStoreService.auctionLeague);
    console.log('refresh team', this.auctionLeagueStoreService.auctionTeamStore);
    this.emitService.refreshLeague(this.thisActiveLeague);
    this.emitService.refreshTeam(this.thisAuctionTeam);
  }
}

