import { AuctionLeague, Team } from '../interface/model.interface';

export const findTeam = (email: string, thisLeague: AuctionLeague): Team => {
    for (const team of thisLeague.auctionTeams) {
        if (team.email === email) {
            return team;
        }
    }
}