import { AuctionLeague, SnakeLeague } from '../interface/model.interface';

export const refreshLeagues = (leagueArr: AuctionLeague[], email: string): AuctionLeague[] => {
    for (const leagueIndex in leagueArr) {
        if (leagueArr.hasOwnProperty(leagueIndex)) {
            if (leagueArr[leagueIndex].status === 'Ongoing') {
                leagueArr.splice(+leagueIndex, 1);
                continue;
            }

            if (+leagueArr[leagueIndex].maxPlayers === leagueArr[leagueIndex].auctionTeams.length) {
                console.log('+', +leagueArr[leagueIndex].maxPlayers);
                console.log('-', leagueArr[leagueIndex].auctionTeams.length);
                leagueArr.splice(+leagueIndex, 1);
                continue;
            }
            for (const team of leagueArr[leagueIndex].auctionTeams) {
                if (team.email === email) {
                    leagueArr.splice(+leagueIndex, 1);
                }
            }
        }
    }
    console.log('return auction arr', leagueArr);
    return leagueArr;
}

export const refreshSnakeLeagues = (leagueArr: SnakeLeague[], email: string): SnakeLeague[] => {
    for (const leagueIndex in leagueArr) {
        if (leagueArr.hasOwnProperty(leagueIndex)) {
            if (leagueArr[leagueIndex].status === 'Ongoing') {
                leagueArr.splice(+leagueIndex, 1);
                continue;
            }

            if (+leagueArr[leagueIndex].maxPlayers === leagueArr[leagueIndex].snakeTeams.length) {
                console.log('+', +leagueArr[leagueIndex].maxPlayers);
                console.log('-', leagueArr[leagueIndex].snakeTeams.length);
                leagueArr.splice(+leagueIndex, 1);
                continue;
            }
            for (const team of leagueArr[leagueIndex].snakeTeams) {
                if (team.email === email) {
                    leagueArr.splice(+leagueIndex, 1);
                }
            }
        }
    }
    console.log('return snake arr', leagueArr);
    return leagueArr;
}