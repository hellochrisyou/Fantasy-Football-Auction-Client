import { AuctionLeague } from '../interface/model.interface'

export const validateEndBid = (thisLeague: AuctionLeague): boolean => {
    let teamCounter = 0;
    for (const team of thisLeague.auctionTeams) {
        if (team.endBid === 'Yes') {
            teamCounter++;
        }
    }
    if (teamCounter === thisLeague.auctionTeams.length) {
        return true;
    } else {

    }
}