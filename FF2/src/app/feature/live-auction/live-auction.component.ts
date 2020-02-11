import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionSortService } from 'src/app/core/service/auction-sort.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { LastSeasonStatService } from 'src/app/core/service/last-season-stat.service';
import { MERGEQBSTATS, MERGERBSTATS, MERGEWRSTATS, MERGETESTATS, MERGEDEFSTATS, MERGEKSTATS } from 'src/app/core/util/merge-stats.util';
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

  readonly QB = 'QB';
  readonly RB = 'RB';
  readonly RECEIVING = 'RECEIVING';
  readonly DEF = 'DEF';
  readonly KICKER = 'K';

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
      this.lastSeasonPlayers.quaterBacks = MERGEQBSTATS(qbArray, this.lastSeasonPlayers.quaterBacks);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeRbOutput.subscribe(rbArray => {
      this.lastSeasonPlayers.runningsBacks = MERGERBSTATS(rbArray, this.lastSeasonPlayers.runningsBacks);
      this.emitService.refreshTable();

    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeWrOutput.subscribe(wrArray => {
      this.lastSeasonPlayers.wideReceivers = MERGEWRSTATS(wrArray, this.lastSeasonPlayers.wideReceivers);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeTeOutput.subscribe(teArray => {
      this.lastSeasonPlayers.tightEnds = MERGETESTATS(teArray, this.lastSeasonPlayers.tightEnds);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeDefOutput.subscribe(defArray => {
      this.lastSeasonPlayers.defenses = MERGEDEFSTATS(defArray, this.lastSeasonPlayers.defenses);
      this.emitService.refreshTable();

    },
      err => {
        console.log('error in resolve service: ', err);
      });

    this.emitService.mergeKickerOutput.subscribe(kArray => {
      this.lastSeasonPlayers.kickers = MERGEKSTATS(kArray, this.lastSeasonPlayers.kickers);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      });

    // Subscribed to Auction Values
    this.route.data.subscribe((data: { auctionValues: any }) => {
      this.lastSeasonPlayers = this.auctionSortService.sortAuctionPlayers(data.auctionValues);
      this.emitService.refreshTable();

      console.log('qbArray', this.lastSeasonPlayers);
    },
      err => {
        console.log('error in resolve service: ', err);
      });
  }
}
