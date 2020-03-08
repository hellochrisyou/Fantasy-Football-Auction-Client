import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuctionSortService } from 'src/app/core/service/auction-sort.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { LastSeasonStatService } from 'src/app/core/service/last-season-stat.service';
import { MERGE_PLAYER_STATS, REMOVE_EXTRA_PLAYERS } from 'src/app/core/util/merge-stats.util';

import {
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
  AUCTION_TEAM_COL_OBJ,
  AUCTION_TEAM_DISPLAY
} from 'src/app/shared/const/column.const';
import { DEF, Kicker, LastSeasonPlayers, QB, RB, TE, Team, AuctionLeague, User, WR } from 'src/app/shared/interface/model.interface';
import { APIURL } from 'src/app/shared/const/url.const';
import { HttpService } from 'src/app/core/service/http.service';
import { AuctionDto } from 'src/app/shared/interface/dto.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  auctionLeague: AuctionLeague;
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
  public user: User = {};

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
    private route: ActivatedRoute,
    private auctionSortService: AuctionSortService,
    private emitService: EmitService,
    private auth: AuthService,
    private httpService: HttpService,
    private db: AngularFirestore
  ) {
    this.route.data.subscribe((data: { auctionValues: any }) => {
      this.lastSeasonPlayers = this.auctionSortService.sortAuctionPlayers(data.auctionValues);
    });

    this.emitService.mergeQbOutput.subscribe(qbArray => {
      if (qbArray.length === 0) {
        this.emitService.refreshTable();
      }
      const tmpQbArray = MERGE_PLAYER_STATS(qbArray, this.lastSeasonPlayers.quaterBacks);
      this.lastSeasonPlayers.quaterBacks = REMOVE_EXTRA_PLAYERS(tmpQbArray);
      this.numQb = this.lastSeasonPlayers.quaterBacks.length;
    });

    this.emitService.mergeRbOutput.subscribe(rbArray => {
      const tmpRbArray = MERGE_PLAYER_STATS(rbArray, this.lastSeasonPlayers.runningsBacks);
      this.lastSeasonPlayers.runningsBacks = REMOVE_EXTRA_PLAYERS(tmpRbArray);
      this.numRb = this.lastSeasonPlayers.runningsBacks.length;
    });

    this.emitService.mergeWrOutput.subscribe(wrArray => {
      const tmpWrArray = MERGE_PLAYER_STATS(wrArray, this.lastSeasonPlayers.wideReceivers);
      this.lastSeasonPlayers.wideReceivers = REMOVE_EXTRA_PLAYERS(tmpWrArray);
      this.numWr = this.lastSeasonPlayers.wideReceivers.length;
      this.emitService.refreshTable();
    });

    this.emitService.mergeTeOutput.subscribe(teArray => {
      const tmpTeArray = MERGE_PLAYER_STATS(teArray, this.lastSeasonPlayers.tightEnds);
      this.lastSeasonPlayers.tightEnds = REMOVE_EXTRA_PLAYERS(tmpTeArray);
      this.numTe = this.lastSeasonPlayers.tightEnds.length;
    });

    this.emitService.mergeDefOutput.subscribe(defArray => {
      const tmpDefArray = MERGE_PLAYER_STATS(defArray, this.lastSeasonPlayers.defenses);
      this.lastSeasonPlayers.defenses = REMOVE_EXTRA_PLAYERS(tmpDefArray);
      this.numDef = this.lastSeasonPlayers.defenses.length;
    });

    this.emitService.mergeKickerOutput.subscribe(kArray => {
      const tmpKArray = MERGE_PLAYER_STATS(kArray, this.lastSeasonPlayers.kickers);
      this.lastSeasonPlayers.kickers = REMOVE_EXTRA_PLAYERS(tmpKArray);
      this.numKicker = this.lastSeasonPlayers.kickers.length;
    });


    // this.auctionDto = {
    //   email: this.auth.authState.email,
    //   leagueName: this.state,
    // };


  }


  ngOnInit(): void {
    console.log('history state', history.state.league.status);
    this.auctionLeague = history.state.league;

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

  public addQbPlayer(index: number): void {
    this.thisTeam.players.push(this.lastSeasonPlayers.quaterBacks[index]);
  }

  public addRbPlayer(index: number): void {
    // console.log('add player index #: ', index);
  }

  public addWrPlayer(index: number): void {
    // console.log('add player index #: ', index);
  }

  public addTePlayer(index: number): void {
    // console.log('add player index #: ', index);
  }

  public addDefPlayer(index: number): void {
    // console.log('add player index #: ', index);
  }

  public addKPlayer(index: number): void {
    // console.log('add player index #: ', index);
  }
}
