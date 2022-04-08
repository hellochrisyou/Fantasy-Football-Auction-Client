import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuctionSortService } from 'src/app/core/service/auction-sort.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { HttpService } from 'src/app/core/service/http.service';
import { BidComponent } from 'src/app/shared/component/dialog/bid/bid.component';
import { SnackbarComponent } from 'src/app/shared/component/snackbar/snackbar.component';
import {
  AUCTION_TEAM_COL_OBJ,
  AUCTION_TEAM_DISPLAY,
  PLAYER_COL_OBJ,
  PLAYER_DISPLAY,
} from 'src/app/shared/const/column.const';
import { APIURL } from 'src/app/shared/const/url.const';
import { BidDto } from 'src/app/shared/interface/dto.interface';

import { AuctionLeagueStoreService } from '../../core/service/store/auction-league-store.service';
import { PlayerStoreService } from '../../core/service/store/player-store.service';
import { AuctionLeague, DEF, Kicker, QB, RB, TE, Team, WR } from '../../shared/interface/model.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

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
    private auctionLeagueStoreService: AuctionLeagueStoreService,
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

    this.emitService.refreshLeagueOutput.subscribe(leagueData => {
      console.log('emit service league', leagueData);
      this.thisActiveLeague = leagueData;
    });
    this.emitService.refreshTeamOutput.subscribe(teamData => {
      console.log('emit service team', teamData);
      this.thisAuctionTeam = teamData;
    });

  }

  public fetchThisLeague() {
    this.httpService.post(APIURL.AUCTIONCALL + '/getThisLeague/', history.state.league.leagueName).subscribe(leagueData => {
      console.log('leagedata', leagueData);
      this.thisActiveLeague = leagueData;
      this.thisAuctionTeam = this.thisActiveLeague.auctionTeams.find(team => team.email === this.authService.authState.email);
      this.auctionLeagueStoreService.auctionLeague = leagueData;
      this.auctionLeagueStoreService.auctionTeamStore = this.thisAuctionTeam;
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
  }

  ngAfterViewInit(): void {
    this.emitService.refreshTable();
  }
  public bidQbPlayer(index: number): void {
    console.log('passbudget', this.thisAuctionTeam);
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.budget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.playerStoreService.qbStore[index].displayName;
      this.thisBidDto.position = 'QB';
      this.thisBidDto.team = this.playerStoreService.qbStore[index].team;
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        console.log('newLeague', newLeague);
        this.auctionLeagueStoreService.auctionLeague = newLeague;
        this.playerStoreService.removeQb(this.playerStoreService.qbStore[index].displayName);
        this.fetchThisLeague();
        this.emitService.refreshTable();
        this.moveToSelectedTab('Lobby');
      });
    });
  }

  public bidRbPlayer(index: number): void {
    console.log('passbudget', this.thisAuctionTeam);
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.budget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.playerStoreService.rbStore[index].displayName;
      this.thisBidDto.position = 'RB';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        console.log('newLeague', newLeague);
        this.auctionLeagueStoreService.auctionLeague = newLeague;
        this.playerStoreService.removeRb(this.playerStoreService.rbStore[index].displayName);
        this.fetchThisLeague();
        this.emitService.refreshTable();
        this.moveToSelectedTab('Lobby');
      });
    });
  }

  public bidWrPlayer(index: number): void {
    console.log('passbudget', this.thisAuctionTeam);
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.budget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.playerStoreService.wrStore[index].displayName;
      this.thisBidDto.position = 'WR';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        console.log('newLeague', newLeague);
        this.auctionLeagueStoreService.auctionLeague = newLeague;
        this.playerStoreService.removeWr(this.playerStoreService.wrStore[index].displayName);
        this.fetchThisLeague();
        this.emitService.refreshTable();
        this.moveToSelectedTab('Lobby');
      });
    });
  }

  public bidTePlayer(index: number): void {
    console.log('passbudget', this.thisAuctionTeam);
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.budget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.playerStoreService.teStore[index].displayName;
      this.thisBidDto.position = 'TE';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        console.log('newLeague', newLeague);
        this.auctionLeagueStoreService.auctionLeague = newLeague;
        this.playerStoreService.removeTe(this.playerStoreService.teStore[index].displayName);
        this.fetchThisLeague();
        this.emitService.refreshTable();
        this.moveToSelectedTab('Lobby');
      });
    });
  }

  public bidDefPlayer(index: number): void {
    console.log('passbudget', this.thisAuctionTeam);
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.budget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.playerStoreService.defStore[index].displayName;
      this.thisBidDto.position = 'DEF';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        console.log('newLeague', newLeague);
        this.auctionLeagueStoreService.auctionLeague = newLeague;
        this.playerStoreService.removeDef(this.playerStoreService.defStore[index].displayName);
        this.fetchThisLeague();
        this.emitService.refreshTable();
        this.moveToSelectedTab('Lobby');
      });
    });
  }

  public bidKPlayer(index: number): void {
    console.log('passbudget', this.thisAuctionTeam);
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisAuctionTeam.budget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisAuctionTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.playerStoreService.kStore[index].displayName;
      this.thisBidDto.position = 'K';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        console.log('newLeague', newLeague);
        this.auctionLeagueStoreService.auctionLeague = newLeague;
        this.playerStoreService.removeDef(this.playerStoreService.kStore[index].displayName);
        this.fetchThisLeague();
        this.emitService.refreshTable();
        this.moveToSelectedTab('Lobby');
      });
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
