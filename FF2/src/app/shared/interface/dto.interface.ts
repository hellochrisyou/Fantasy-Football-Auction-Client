export interface CreateAuctionDto extends CreateSnakeDto {
    budget?: string;
}

export interface CreateSnakeDto {
    leagueName?: string;
    pPR?: string;
    maxPlayers?: string;
}

export interface CreateTeamDto extends CreateAuctionDto {
    teamName?: string;
    leagueType?: string;
}

export interface ApiPlayer {
    avgPrice: string;
    displayName: string;
    maxPrice: string;
    minPrice: string;
    playerId: string;
    position: string;
    ppr: string;
    team: string;
}