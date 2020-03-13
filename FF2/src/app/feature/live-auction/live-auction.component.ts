import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuctionSortService } from 'src/app/core/service/auction-sort.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { HttpService } from 'src/app/core/service/http.service';
import { BidComponent } from 'src/app/shared/component/dialog/bid/bid.component';
import { SnackbarComponent } from 'src/app/shared/component/snackbar/snackbar.component';
import { TOKENS } from 'src/app/shared/const/api-key';
import {
  AUCTION_TEAM_COL_OBJ,
  AUCTION_TEAM_DISPLAY,
  PLAYER_COL_OBJ,
  PLAYER_DISPLAY,
} from 'src/app/shared/const/column.const';
import { APIURL } from 'src/app/shared/const/url.const';
import { BidDto } from 'src/app/shared/interface/dto.interface';

import { LeagueStoreService } from '../../core/service/store/league-store.service';
import { PlayerStoreService } from '../../core/service/store/player-store.service';
import { Kicker, AuctionLeague, Team, LastSeasonPlayers, QB, RB, WR, TE, DEF } from '../../shared/interface/model.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.scss']
})
export class LiveAuctionComponent implements OnInit, AfterViewInit, OnDestroy {

  numQb: number;
  numRb: number;
  numWr: number;
  numTe: number;
  numDef: number;
  numKicker: number;
  thisBidDto: BidDto = {};

  thisActiveLeague: AuctionLeague;
  thisAuctionTeam: Team;

  status: string;

  // public user: User = {};
  private readonly AUCTIONURL = APIURL.NFLAUCTIONPLAYERS;
  private readonly APIKEY = TOKENS.APIKEY;
  readonly PLAYER_COL_OBJ = PLAYER_COL_OBJ;
  readonly PLAYER_DISPLAY = PLAYER_DISPLAY;
  readonly AUCTION_TEAM_COL_OBJ = AUCTION_TEAM_COL_OBJ;
  readonly AUCTION_TEAM_DISPLAY = AUCTION_TEAM_DISPLAY;

  qbArray: QB[] = [];
  rbArray: RB[] = [];
  wrArray: WR[] = [];
  teArray: TE[] = [];
  defArray: DEF[] = [];
  kArray: Kicker[] = [];
  teamArr: Team[] = [];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private auctionSortService: AuctionSortService,
    private emitService: EmitService,
    private authService: AuthService,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private leagueStoreService: LeagueStoreService,
    public playerStoreService: PlayerStoreService,

  ) {
    this.route.data.subscribe((data: { auctionValues: any }) => {
      this.auctionSortService.sortAuctionPlayers(data.auctionValues);
      this.fetchThisLeague();
    });
  }


  ngOnInit(): void {
    console.log('here', history.state.league.leagueName);
    // this.leagueStoreService.auctionLeague = history.state.league;

  }

  public fetchThisLeague() {
    this.httpService.post(APIURL.AUCTIONCALL + '/getThisLeague/', history.state.league.leagueName).subscribe(leagueData => {
      console.log('leagedata', leagueData);
      this.thisActiveLeague = leagueData;
      this.thisAuctionTeam = this.thisActiveLeague.auctionTeams.find(team => team.email === this.authService.authState.email);
      this.leagueStoreService.auctionLeague = leagueData;
      this.leagueStoreService.auctionTeamStore = this.thisAuctionTeam;
      this.numQb = this.playerStoreService.qbStore.length;
      this.numRb = this.playerStoreService.rbStore.length;
      this.numWr = this.playerStoreService.wrStore.length;
      this.numTe = this.playerStoreService.teStore.length;
      this.numDef = this.playerStoreService.defStore.length;
      this.numKicker = this.playerStoreService.kStore.length;
      console.log('qbstore', this.playerStoreService.qbStore);

      this.emitService.refreshTable();
    });
  }

  ngOnDestroy(): void {
    // if (!!this.emitService.mergeQbOutput) { this.emitService.mergeQbOutput.unsubscribe(); }
    // if (!!this.emitService.mergeRbOutput) { this.emitService.mergeRbOutput.unsubscribe(); }
    // if (!!this.emitService.mergeWrOutput) { this.emitService.mergeWrOutput.unsubscribe(); }
    // if (!!this.emitService.mergeTeOutput) { this.emitService.mergeTeOutput.unsubscribe(); }
    // if (!!this.emitService.mergeDefOutput) { this.emitService.mergeDefOutput.unsubscribe(); }
    // if (!!this.emitService.mergeKickerOutput) { this.emitService.mergeKickerOutput.unsubscribe(); }
  }
  ngAfterViewInit(): void {
    this.emitService.refreshTable();
  }
  public bidQbPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.playerStoreService.qbStore[index].displayName;
      this.thisBidDto.position = 'QB';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        console.log('newLeague', newLeague);
        this.leagueStoreService.auctionLeague = newLeague;
        this.playerStoreService.removeQb(this.playerStoreService.qbStore[index].displayName);
        this.fetchThisLeague();
        this.emitService.refreshTable();
        this.moveToSelectedTab('Lobby');
      });

    });
  }

  public bidRbPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      // this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      // this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      // this.thisBidDto.newBid = bidAmountResult.bidAmount;
      // this.thisBidDto.playerName = this.lastSeasonPlayers.runningsBacks[index].displayName;
      // this.thisBidDto.position = 'RB';
      // this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
      //   this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
      //   this.leagueStoreService.auctionLeague = newLeague;
      // });
    });
  }

  public bidWrPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      // this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      // this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      // this.thisBidDto.newBid = bidAmountResult.bidAmount;
      // this.thisBidDto.playerName = this.lastSeasonPlayers.wideReceivers[index].displayName;
      // this.thisBidDto.position = 'WR';
      // this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
      //   this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
      //   this.leagueStoreService.auctionLeague = newLeague;
      // });
    });
  }

  public bidTePlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      // this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      // this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      // this.thisBidDto.newBid = bidAmountResult.bidAmount;
      // this.thisBidDto.playerName = this.lastSeasonPlayers.tightEnds[index].displayName;
      // this.thisBidDto.position = 'TE';
      // this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
      //   this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
      //   this.leagueStoreService.auctionLeague = newLeague;
      // });
    });
  }

  public bidDefPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      // this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      // this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      // this.thisBidDto.newBid = bidAmountResult.bidAmount;
      // this.thisBidDto.playerName = this.lastSeasonPlayers.defenses[index].displayName;
      // this.thisBidDto.position = 'DEF';
      // this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
      //   this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
      //   this.leagueStoreService.auctionLeague = newLeague;
      // });
    });
  }

  public bidKPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      // this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      // this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      // this.thisBidDto.newBid = bidAmountResult.bidAmount;
      // this.thisBidDto.playerName = this.lastSeasonPlayers.kickers[index].displayName;
      // this.thisBidDto.position = 'K';
      // this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
      //   this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
      //   this.leagueStoreService.auctionLeague = newLeague;
      // });
    });
  }

  public openSnackBar(message: string, panelClass: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 10000
    });
  }

  public moveToSelectedTab(tabName: string) {
    for (let i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
      if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
        (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
      }
    }
  }
}
