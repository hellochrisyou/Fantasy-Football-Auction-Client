import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuctionSortService } from 'src/app/core/service/auction-sort.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { LastSeasonStatService } from 'src/app/core/service/last-season-stat.service';
import { MERGE_PLAYER_STATS } from 'src/app/core/util/merge-stats.util';
import { REMOVE_EXTRA_PLAYERS } from 'src/app/core/util/remove-player.util';
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
} from 'src/app/shared/const/column.const';
import { DEF, Kicker, LastSeasonPlayers, QB, RB, TE, Team, User, WR } from 'src/app/shared/interface/model.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.scss']
})
export class LiveAuctionComponent implements OnInit, OnDestroy {

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
    Name: this.auth.userData.displayName,
    players: [],
    CurrentBudget: '10000',
    LeagueType: 'Auction'
  };

  readonly QB_COL_OBJ = QB_COL_OBJ;
  readonly RB_COL_OBJ = RB_COL_OBJ;
  readonly REC_COL_OBJ = REC_COL_OBJ;
  readonly DEF_COL_OBJ = DEF_COL_OBJ;
  readonly K_COL_OBJ = K_COL_OBJ;

  readonly QB_DISPLAY = QB_DISPLAY;
  readonly RB_DISPLAY = RB_DISPLAY;
  readonly REC_DISPLAY = REC_DISPLAY;
  readonly DEF_DISPLAY = DEF_DISPLAY;
  readonly K_DISPLAY = K_DISPLAY;

  qbArray: QB[] = [];
  rbArray: RB[] = [];
  wrArray: WR[] = [];
  teArray: TE[] = [];
  defArray: DEF[] = [];
  kArray: Kicker[] = [];

  constructor(
    private route: ActivatedRoute,
    private lastSeasonStatService: LastSeasonStatService,
    private auctionSortService: AuctionSortService,
    private emitService: EmitService,
    private auth: AuthService,
    private db: AngularFirestore
  ) { }

  ngOnDestroy(): void {
    this.emitService.mergeQbOutput.unsubscribe();
    this.emitService.mergeRbOutput.unsubscribe();
    this.emitService.mergeWrOutput.unsubscribe();
    this.emitService.mergeTeOutput.unsubscribe();
    this.emitService.mergeDefOutput.unsubscribe();
    this.emitService.mergeKickerOutput.unsubscribe();
  }

  ngOnInit(): void {
    console.log(REC_COL_OBJ);
    console.log(REC_DISPLAY);

    // Subscribed to Auction Values
    this.route.data.subscribe((data: { auctionValues: any }) => {
      this.lastSeasonPlayers = this.auctionSortService.sortAuctionPlayers(data.auctionValues);
      console.log(this.lastSeasonPlayers);
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
        console.log(this.lastSeasonPlayers);
      });

    this.emitService.mergeQbOutput.subscribe(qbArray => {
      console.log('quaterback1', this.lastSeasonPlayers.quaterBacks);
      this.lastSeasonPlayers.quaterBacks = MERGE_PLAYER_STATS(qbArray, this.lastSeasonPlayers.quaterBacks);
      console.log('quaterback2', this.lastSeasonPlayers.quaterBacks);
      this.lastSeasonPlayers.quaterBacks = REMOVE_EXTRA_PLAYERS(this.lastSeasonPlayers.quaterBacks);
      console.log('quaterback3', this.lastSeasonPlayers.quaterBacks);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeRbOutput.subscribe(rbArray => {
      this.lastSeasonPlayers.runningsBacks = MERGE_PLAYER_STATS(rbArray, this.lastSeasonPlayers.runningsBacks);
      this.lastSeasonPlayers.runningsBacks = REMOVE_EXTRA_PLAYERS(this.lastSeasonPlayers.runningsBacks);
      this.emitService.refreshTable();

    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeWrOutput.subscribe(wrArray => {
      this.lastSeasonPlayers.wideReceivers = MERGE_PLAYER_STATS(wrArray, this.lastSeasonPlayers.wideReceivers);
      this.lastSeasonPlayers.wideReceivers = REMOVE_EXTRA_PLAYERS(this.lastSeasonPlayers.wideReceivers);
      this.emitService.refreshTable();
      console.log('wr this', this.lastSeasonPlayers.wideReceivers);
      // console.log('te this', this.lastSeasonPlayers.tightEnds);
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeTeOutput.subscribe(teArray => {
      this.lastSeasonPlayers.tightEnds = MERGE_PLAYER_STATS(teArray, this.lastSeasonPlayers.tightEnds);
      this.lastSeasonPlayers.tightEnds = REMOVE_EXTRA_PLAYERS(this.lastSeasonPlayers.tightEnds);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeDefOutput.subscribe(defArray => {
      this.lastSeasonPlayers.defenses = MERGE_PLAYER_STATS(defArray, this.lastSeasonPlayers.defenses);
      this.lastSeasonPlayers.defenses = REMOVE_EXTRA_PLAYERS(this.lastSeasonPlayers.defenses);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeKickerOutput.subscribe(kArray => {
      this.lastSeasonPlayers.kickers = REMOVE_EXTRA_PLAYERS(this.lastSeasonPlayers.kickers);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });


  }

  public addQbPlayer(index: number): void {
    this.thisTeam.players.push(this.lastSeasonPlayers.quaterBacks[index]);
  }

  public addRbPlayer(index: number): void {
    console.log('add player index #: ', index);
  }

  public addWrPlayer(index: number): void {
    console.log('add player index #: ', index);
  }

  public addTePlayer(index: number): void {
    console.log('add player index #: ', index);
  }

  public addDefPlayer(index: number): void {
    console.log('add player index #: ', index);
  }

  public addKPlayer(index: number): void {
    console.log('add player index #: ', index);
  }
}
