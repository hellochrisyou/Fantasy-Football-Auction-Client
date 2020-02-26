import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';
import { ApiPlayer } from 'src/app/shared/interface/dto.interface';

export const MERGE_PLAYER_STATS = (statArr: any[], auctionArr: ApiPlayer[]): any[] => {
  // console.log('statarr', statArr);
  statArr.forEach((statPlayer, index) => {
    if (undefined !== auctionArr.find(auctionPlayer => auctionPlayer.displayName === statPlayer.Name)) {
      const tmpAuctionPlayer = auctionArr.find(auctionPlayer => auctionPlayer.displayName === statPlayer.Name);
      statPlayer.MinPrice = tmpAuctionPlayer.minPrice;
      statPlayer.MaxPrice = tmpAuctionPlayer.maxPrice;
      statPlayer.AvgPrice = tmpAuctionPlayer.avgPrice;
      statPlayer.Team = tmpAuctionPlayer.team;
    }
  });
  return statArr;
};

export const REMOVE_EXTRA_PLAYERS = (statArr: any[]): any[] => {
  while (statArr.find(statPlayer => statPlayer.MinPrice === undefined)) {
    const deleteIndex = statArr.findIndex(statPlayer => statPlayer.MinPrice === undefined);
    console.log('deleteIndex', deleteIndex, statArr[deleteIndex].MinPrice);
    statArr.splice(deleteIndex, 1);
  }
  return statArr;
}