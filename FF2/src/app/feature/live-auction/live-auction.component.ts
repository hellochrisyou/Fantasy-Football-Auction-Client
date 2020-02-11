import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/service/http.service';
import { APIURL } from 'src/app/shared/const/url.const';
import { TOKENS } from 'src/app/shared/const/api-key';
import { DEF, Kicker, LastSeasonPlayers, QB, RB, TE, WR } from 'src/app/shared/interface/model.interface';
import { ActivatedRoute } from '@angular/router';
import { LastSeasonStatService } from 'src/app/core/service/last-season-stat.service';
import { AuctionSortService } from 'src/app/core/service/auction-sort.service';
import { MergeStatService } from 'src/app/core/service/merge-stats.service';

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

  constructor(
    private route: ActivatedRoute,
    private lastSeasonStatService: LastSeasonStatService,
    private auctionSortService: AuctionSortService,
    private mergeStatService: MergeStatService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: { auctionValues: any }) => {
      console.log('data from httpService GetNFLPlayers: ', data.auctionValues);
      this.auctionSortService.sortAuctionPlayers(data.auctionValues);

      // tslint:disable-next-line: max-line-length
      this.lastSeasonPlayers.quaterBacks = this.mergeStatService.mergeQbStats(this.lastSeasonStatService.qbArray, this.auctionSortService.tmpQbArray);
      // tslint:disable-next-line: max-line-length
      this.lastSeasonPlayers.runningsBacks = this.mergeStatService.mergeRbStats(this.lastSeasonStatService.rbArray, this.auctionSortService.tmpRbArray);
      // tslint:disable-next-line: max-line-length
      this.lastSeasonPlayers.wideReceivers = this.mergeStatService.mergeWrStats(this.lastSeasonStatService.wrArray, this.auctionSortService.tmpWrArray);
      // tslint:disable-next-line: max-line-length
      this.lastSeasonPlayers.tightEnds = this.mergeStatService.mergeTeStats(this.lastSeasonStatService.teArray, this.auctionSortService.tmpTeArray);
      // tslint:disable-next-line: max-line-length
      this.lastSeasonPlayers.defenses = this.mergeStatService.mergeDefStats(this.lastSeasonStatService.defArray, this.auctionSortService.tmpDefArray);
      // tslint:disable-next-line: max-line-length
      this.lastSeasonPlayers.kickers = this.mergeStatService.mergeKStats(this.lastSeasonStatService.kArray, this.auctionSortService.tmpKArray);
      console.log('check it out', this.lastSeasonPlayers);
      return this.lastSeasonPlayers;
    },
      err => {
        console.log("error in resolve service: ", err);
      });
  }
}
