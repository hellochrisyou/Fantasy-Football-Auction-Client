import { AuctionLeague } from '../interface/model.interface';

export const checkIsLeagueReady = (auctionLeague: AuctionLeague): boolean => {
    for (const team of auctionLeague.auctionTeams) {
        if (team.isReady === 'No') {
            return false;
        }
    }
    return true;
}