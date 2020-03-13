import { AuctionLeague } from '../interface/model.interface';

export const refreshLeagues = (auctionArr: AuctionLeague[], email: string): AuctionLeague[] => {
    for (const leagueIndex in auctionArr) {
        if (auctionArr.hasOwnProperty(leagueIndex)) {
            if (auctionArr[leagueIndex].status === 'Ongoing') {
                auctionArr.splice(+leagueIndex, 1);
                continue;
            }
            for (const team of auctionArr[leagueIndex].auctionTeams) {
                if (team.email === email) {
                    auctionArr.splice(+leagueIndex, 1);
                }
            }
        }
    }
    return auctionArr;
}