import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';

export const MERGEQBSTATS = (qbStatArr: QB[], qbAuctionArr: any[]): QB[] => {
  for (const player of qbStatArr) {
    for (const player2 of qbAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.team = player2.team;
        continue;
      }
    }
  }
  return qbStatArr;
};

export const MERGERBSTATS = (rbStatArr: RB[], rbAuctionArr: any[]): RB[] => {
  for (const player of rbStatArr) {
    for (const player2 of rbAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.team = player2.team;
      }
    }
  }
  return rbStatArr;
};

export const MERGEWRSTATS = (wrStatArr: WR[], wrAuctionArr: any[]): WR[] => {
  for (const player of wrStatArr) {
    for (const player2 of wrAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.team = player2.team;
      }
    }
  }
  return wrStatArr;
};

export const MERGETESTATS = (teStatArr: TE[], teAuctionArr: any[]): TE[] => {
  for (const player of teStatArr) {
    for (const player2 of teAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.team = player2.team;
      }
    }
  }
  return teStatArr;
};

export const MERGEDEFSTATS = (defStatArr: DEF[], defAuctionArr: any[]): DEF[] => {
  for (const player of defStatArr) {
    for (const player2 of defAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.team = player2.team;
      }
    }
  }
  return defStatArr;
};

export const MERGEKSTATS = (kStatArr: Kicker[], kAuctionArr: any[]): Kicker[] => {
  for (const player of kStatArr) {
    for (const player2 of kAuctionArr) {
      if (player2.displayName === player.Name) {
        player.MinPrice = player2.minPrice;
        player.MaxPrice = player2.maxPrice;
        player.AvgPrice = player2.avgPrice;
        player.team = player2.team;
      }
    }
  }
  return kStatArr;
};

