import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionSortService } from 'src/app/core/service/auction-sort.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { LastSeasonStatService } from 'src/app/core/service/last-season-stat.service';
import {
  MERGE_DEF_STATS,
  MERGE_K_STATS,
  MERGE_QB_STATS,
  MERGE_RB_STATS,
  MERGE_TE_STATS,
  MERGE_WR_STATS,
} from 'src/app/core/util/merge-stats.util';
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
import { DEF, Kicker, LastSeasonPlayers, QB, RB, TE, WR } from 'src/app/shared/interface/model.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.scss']
})
export class LiveAuctionComponent implements OnInit {

  lastSeasonPlayers: LastSeasonPlayers = {
    quaterBacks: [],
    runningsBacks: [],
    wideReceivers: [],
    tightEnds: [],
    defenses: [],
    kickers: []
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
    private emitService: EmitService
  ) { }

  ngOnInit(): void {
    this.emitService.mergeQbOutput.subscribe(qbArray => {
      this.lastSeasonPlayers.quaterBacks = MERGE_QB_STATS(qbArray, this.lastSeasonPlayers.quaterBacks);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeRbOutput.subscribe(rbArray => {
      this.lastSeasonPlayers.runningsBacks = MERGE_RB_STATS(rbArray, this.lastSeasonPlayers.runningsBacks);
      this.emitService.refreshTable();

    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeWrOutput.subscribe(wrArray => {
      this.lastSeasonPlayers.wideReceivers = MERGE_WR_STATS(wrArray, this.lastSeasonPlayers.wideReceivers);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeTeOutput.subscribe(teArray => {
      this.lastSeasonPlayers.tightEnds = MERGE_TE_STATS(teArray, this.lastSeasonPlayers.tightEnds);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeDefOutput.subscribe(defArray => {
      this.lastSeasonPlayers.defenses = MERGE_DEF_STATS(defArray, this.lastSeasonPlayers.defenses);
      this.emitService.refreshTable();

    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeKickerOutput.subscribe(kArray => {
      this.lastSeasonPlayers.kickers = MERGE_K_STATS(kArray, this.lastSeasonPlayers.kickers);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      });

    // Subscribed to Auction Values
    this.route.data.subscribe((data: { auctionValues: any }) => {
      this.lastSeasonPlayers = this.auctionSortService.sortAuctionPlayers(data.auctionValues);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      });
  }
}
