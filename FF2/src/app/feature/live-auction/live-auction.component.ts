import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuctionSortService } from 'src/app/core/service/auction-sort.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { HttpService } from 'src/app/core/service/http.service';
import { MERGE_PLAYER_STATS, REMOVE_EXTRA_PLAYERS } from 'src/app/core/util/merge-stats.util';
import { BidComponent } from 'src/app/shared/component/dialog/bid/bid.component';
import { SnackbarComponent } from 'src/app/shared/component/snackbar/snackbar.component';
import {
  AUCTION_TEAM_COL_OBJ,
  AUCTION_TEAM_DISPLAY,
  DEF_COL_OBJ,
  DEF_DISPLAY,
  K_COL_OBJ,
  K_DISPLAY,
  QB_COL_OBJ,
  QB_DISPLAY,
  RB_COL_OBJ,
  RB_DISPLAY,
  REC_COL_OBJ,
  REC_DISPLAY,
} from 'src/app/shared/const/column.const';
import { APIURL } from 'src/app/shared/const/url.const';
import { BidDto } from 'src/app/shared/interface/dto.interface';
import {
  AuctionLeague,
  DEF,
  Kicker,
  LastSeasonPlayers,
  QB,
  RB,
  TE,
  Team,
  User,
  WR,
} from 'src/app/shared/interface/model.interface';
import { findTeam } from 'src/app/shared/utils/findTeam.utils';
import { LeagueStoreService } from '../../core/service/store/league-store.service';
import { DefStoreService } from '../../core/service/store/def-store.service';
import { KStoreService } from '../../core/service/store/k-store.service';
import { QbStoreService } from '../../core/service/store/qb-store.service';
import { RbStoreService } from '../../core/service/store/rb-store.service';
import { WrStoreService } from '../../core/service/store/wr-store.service';
import { TeStoreService } from '../../core/service/store/te-store.service';

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
  auctionTeam: Team;

  status: string;

  lastSeasonPlayers: LastSeasonPlayers = {
    quaterBacks: [],
    runningsBacks: [],
    wideReceivers: [],
    tightEnds: [],
    defenses: [],
    kickers: []
  };
  // public user: User = {};

  thisTeam: Team = {
    Select: 'select',
    teamName: this.auth.userData.displayName,
    players: [],
    currentBudget: '10000',
    leagueType: 'Auction'
  };

  readonly QB_COL_OBJ = QB_COL_OBJ;
  readonly RB_COL_OBJ = RB_COL_OBJ;
  readonly REC_COL_OBJ = REC_COL_OBJ;
  readonly DEF_COL_OBJ = DEF_COL_OBJ;
  readonly K_COL_OBJ = K_COL_OBJ;
  readonly AUCTION_TEAM_COL_OBJ = AUCTION_TEAM_COL_OBJ;

  readonly QB_DISPLAY = QB_DISPLAY;
  readonly RB_DISPLAY = RB_DISPLAY;
  readonly REC_DISPLAY = REC_DISPLAY;
  readonly DEF_DISPLAY = DEF_DISPLAY;
  readonly K_DISPLAY = K_DISPLAY;
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
    private auth: AuthService,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private leagueStoreService: LeagueStoreService,
    public defStoreService: DefStoreService,
    public kStoreService: KStoreService,
    public qbStoreService: QbStoreService,
    public rbStoreService: RbStoreService,
    public wrStoreService: WrStoreService,
    public teStoreService: TeStoreService



  ) {
    this.route.data.subscribe((data: { auctionValues: any }) => {
      this.lastSeasonPlayers = this.auctionSortService.sortAuctionPlayers(data.auctionValues);
    });

    this.emitService.mergeQbOutput.subscribe(qbArray => {
      if (qbArray.length === 0) {
        this.emitService.refreshTable();
      }

      const tmpQbArray = MERGE_PLAYER_STATS(qbArray, this.lastSeasonPlayers.quaterBacks);
      this.qbStoreService.qbArr = REMOVE_EXTRA_PLAYERS(tmpQbArray);
      // this.lastSeasonPlayers.quaterBacks = REMOVE_EXTRA_PLAYERS(tmpQbArray);
      this.numQb = this.lastSeasonPlayers.quaterBacks.length;
    });

    this.emitService.mergeRbOutput.subscribe(rbArray => {
      const tmpRbArray = MERGE_PLAYER_STATS(rbArray, this.lastSeasonPlayers.runningsBacks);
      this.rbStoreService.rbArr = REMOVE_EXTRA_PLAYERS(tmpRbArray);
      // this.lastSeasonPlayers.runningsBacks = REMOVE_EXTRA_PLAYERS(tmpRbArray);
      this.numRb = this.lastSeasonPlayers.runningsBacks.length;
    });

    this.emitService.mergeWrOutput.subscribe(wrArray => {
      const tmpWrArray = MERGE_PLAYER_STATS(wrArray, this.lastSeasonPlayers.wideReceivers);
      this.wrStoreService.wrArr = REMOVE_EXTRA_PLAYERS(tmpWrArray);
      // this.lastSeasonPlayers.wideReceivers = REMOVE_EXTRA_PLAYERS(tmpWrArray);
      this.numWr = this.lastSeasonPlayers.wideReceivers.length;
      this.emitService.refreshTable();
    });

    this.emitService.mergeTeOutput.subscribe(teArray => {
      const tmpTeArray = MERGE_PLAYER_STATS(teArray, this.lastSeasonPlayers.tightEnds);
      this.teStoreService.teArr = REMOVE_EXTRA_PLAYERS(tmpTeArray);
      // this.lastSeasonPlayers.tightEnds = REMOVE_EXTRA_PLAYERS(tmpTeArray);
      this.numTe = this.lastSeasonPlayers.tightEnds.length;
    });

    this.emitService.mergeDefOutput.subscribe(defArray => {
      const tmpDefArray = MERGE_PLAYER_STATS(defArray, this.lastSeasonPlayers.defenses);
      this.defStoreService.defArr = REMOVE_EXTRA_PLAYERS(tmpDefArray);
      // this.lastSeasonPlayers.defenses = REMOVE_EXTRA_PLAYERS(tmpDefArray);
      this.numDef = this.lastSeasonPlayers.defenses.length;
    });

    this.emitService.mergeKickerOutput.subscribe(kArray => {
      const tmpKArray = MERGE_PLAYER_STATS(kArray, this.lastSeasonPlayers.kickers);
      this.kStoreService.kArr = REMOVE_EXTRA_PLAYERS(tmpKArray);
      // this.lastSeasonPlayers.kickers = REMOVE_EXTRA_PLAYERS(tmpKArray);
      this.numKicker = this.lastSeasonPlayers.kickers.length;
    });


    // this.auctionDto = {
    //   email: this.auth.authState.email,
    //   leagueName: this.state,
    // };


  }


  ngOnInit(): void {
    this.leagueStoreService.auctionLeague = history.state.league;
    this.leagueStoreService.auctionTeam = findTeam(this.auth.authState.email, history.state.league);

    this.leagueStoreService.auctionLeague$.subscribe(leagueObservable => {
      console.log('leagueObservable live this.auctionLeague.ts' + leagueObservable);
      this.thisActiveLeague = leagueObservable;
    });

    this.leagueStoreService.auctionTeam$.subscribe(teamObservable => {
      console.log('leagueObservable live this.auctionLeague.ts' + teamObservable);
      this.auctionTeam = teamObservable;
    });


    // this.teamArr = history.state.league.auctionTeams;

    // this.auctionDto = {
    //   email: this.auth.authState.email,
    //   leagueName: history.state.league
    // };
    // this.httpService.post(APIURL.AUCTIONCALL + '/goAuction/init/', this.auctionDto).subscribe(auctionData => {
    //   console.log('return dadta from goAuctionInit', auctionData);
    // });
    this.emitService.refreshTable();
  }

  ngOnDestroy(): void {
    if (!!this.emitService.mergeQbOutput) { this.emitService.mergeQbOutput.unsubscribe(); }
    if (!!this.emitService.mergeRbOutput) { this.emitService.mergeRbOutput.unsubscribe(); }
    if (!!this.emitService.mergeWrOutput) { this.emitService.mergeWrOutput.unsubscribe(); }
    if (!!this.emitService.mergeTeOutput) { this.emitService.mergeTeOutput.unsubscribe(); }
    if (!!this.emitService.mergeDefOutput) { this.emitService.mergeDefOutput.unsubscribe(); }
    if (!!this.emitService.mergeKickerOutput) { this.emitService.mergeKickerOutput.unsubscribe(); }
  }
  ngAfterViewInit(): void {
    this.emitService.refreshTable();
  }

  public bidQbPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.lastSeasonPlayers.quaterBacks[index].Name;
      this.thisBidDto.position = 'QB';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        this.leagueStoreService.auctionLeague = newLeague;
      });
    });
  }

  public bidRbPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.lastSeasonPlayers.runningsBacks[index].Name;
      this.thisBidDto.position = 'RB';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        this.leagueStoreService.auctionLeague = newLeague;
      });
    });
  }

  public bidWrPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.lastSeasonPlayers.wideReceivers[index].Name;
      this.thisBidDto.position = 'WR';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        this.leagueStoreService.auctionLeague = newLeague;
      });
    });
  }

  public bidTePlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.lastSeasonPlayers.tightEnds[index].Name;
      this.thisBidDto.position = 'TE';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        this.leagueStoreService.auctionLeague = newLeague;
      });
    });
  }

  public bidDefPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.lastSeasonPlayers.defenses[index].Name;
      this.thisBidDto.position = 'DEF';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        this.leagueStoreService.auctionLeague = newLeague;
      });
    });
  }

  public bidKPlayer(index: number): void {
    const dialogRef = this.dialog.open(BidComponent, {
      width: '300px',
      data: {
        budget: +this.thisTeam.currentBudget,
        currentBid: 0
      }
    });
    dialogRef.afterClosed().subscribe(bidAmountResult => {
      this.thisBidDto.leagueName = this.thisActiveLeague.leagueName;
      this.thisBidDto.teamName = this.thisTeam.teamName;
      this.thisBidDto.newBid = bidAmountResult.bidAmount;
      this.thisBidDto.playerName = this.lastSeasonPlayers.kickers[index].Name;
      this.thisBidDto.position = 'K';
      this.httpService.post(APIURL.AUCTIONCALL + '/startBid/', this.thisBidDto).subscribe(newLeague => {
        this.openSnackBar('You have drafted: ' + this.thisBidDto.playerName, 'bid-player');
        this.leagueStoreService.auctionLeague = newLeague;
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
}
