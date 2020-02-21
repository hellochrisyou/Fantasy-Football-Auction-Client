import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';

export const MERGE_PLAYER_STATS = (statArr: any[], auctionArr: any[]): any[] => {
  for (const player of statArr) {
    for (const player2 of auctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.Team = player2.team;
        continue;
      }
    }
  }
  return statArr;
};

export const MERGE_RB_STATS = (rbStatArr: RB[], rbAuctionArr: any[]): RB[] => {
  for (const player of rbStatArr) {
    for (const player2 of rbAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.Team = player2.team;
      }
    }
  }
  return rbStatArr;
};

export const MERGE_WR_STATS = (wrStatArr: WR[], wrAuctionArr: any[]): WR[] => {
  for (const player of wrStatArr) {
    for (const player2 of wrAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.Team = player2.team;
      }
    }
  }
  return wrStatArr;
};
export const MERGE_TE_STATS = (teStatArr: TE[], teAuctionArr: any[]): TE[] => {
  for (const player of teStatArr) {
    for (const player2 of teAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.Team = player2.team;
      }
    }
  }
  return teStatArr;
};

export const MERGE_DEF_STATS = (defStatArr: DEF[], defAuctionArr: any[]): DEF[] => {
  for (const player of defStatArr) {
    for (const player2 of defAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.Team = player2.team;
      }
    }
  }
  return defStatArr;
};

export const MERGE_K_STATS = (kStatArr: Kicker[], kAuctionArr: any[]): Kicker[] => {
  for (const player of kStatArr) {
    for (const player2 of kAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.Team = player2.team;
      }
    }
  }
  return kStatArr;
};

