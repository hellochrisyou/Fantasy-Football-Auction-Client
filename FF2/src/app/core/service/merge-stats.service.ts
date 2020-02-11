import { Injectable } from '@angular/core';
import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class MergeStatService {

  constructor() { }

  public mergeQbStats(qbStatArr: QB[], qbAuctionArr: any[]): QB[] {
    qbStatArr.forEach(statQb => {
      qbAuctionArr.forEach(auctionQb => {
        if (auctionQb.displayName === statQb.name) {
          statQb.minPrice = auctionQb.minPrice;
          statQb.maxPrice = auctionQb.maxPrice;
          statQb.avgPrice = auctionQb.avgPrice;
          statQb.team = auctionQb.team;
        }
      });
    });
    return qbStatArr;
  }
  public mergeRbStats(rbStatArr: RB[], rbAuctionArr: any[]): RB[] {
    rbStatArr.forEach(statRb => {
      rbAuctionArr.forEach(auctionRb => {
        if (auctionRb.displayName === statRb.name) {
          statRb.minPrice = auctionRb.minPrice;
          statRb.maxPrice = auctionRb.maxPrice;
          statRb.avgPrice = auctionRb.avgPrice;
          statRb.team = auctionRb.team;
        }
      });
    });
    return rbStatArr;
  }
  public mergeWrStats(wrStatArr: WR[], wrAuctionArr: any[]): WR[] {
    wrStatArr.forEach(statWr => {
      wrAuctionArr.forEach(auctionWr => {
        if (auctionWr.displayName === statWr.name) {
          statWr.minPrice = auctionWr.minPrice;
          statWr.maxPrice = auctionWr.maxPrice;
          statWr.avgPrice = auctionWr.avgPrice;
          statWr.team = auctionWr.team;
        }
      });
    });
    return wrStatArr;
  }
  public mergeTeStats(teStatArr: TE[], teAuctionArr: any[]): TE[] {
    teStatArr.forEach(statTe => {
      teAuctionArr.forEach(auctionTe => {
        if (auctionTe.displayName === statTe.name) {
          statTe.minPrice = auctionTe.minPrice;
          statTe.maxPrice = auctionTe.maxPrice;
          statTe.avgPrice = auctionTe.avgPrice;
          statTe.team = auctionTe.team;
        }
      });
    });
    return teStatArr;
  }
  public mergeDefStats(defStatArr: DEF[], defAuctionArr: any[]): DEF[] {
    defStatArr.forEach(statDef => {
      defAuctionArr.forEach(auctionDef => {
        if (auctionDef.displayName === statDef.name) {
          statDef.minPrice = auctionDef.minPrice;
          statDef.maxPrice = auctionDef.maxPrice;
          statDef.avgPrice = auctionDef.avgPrice;
          statDef.team = auctionDef.team;
        }
      });
    });
    return defStatArr;
  }
  public mergeKStats(kStatArr: Kicker[], kAuctionArr: any[]): Kicker[] {
    kStatArr.forEach(statK => {
      kAuctionArr.forEach(auctionK => {
        if (auctionK.displayName === statK.name) {
          statK.minPrice = auctionK.minPrice;
          statK.maxPrice = auctionK.maxPrice;
          statK.avgPrice = auctionK.avgPrice;
          statK.team = auctionK.team;
        }
      });
    });
    return kStatArr;
  }
}
