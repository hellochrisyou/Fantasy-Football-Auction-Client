
export interface CreateLeagueDto {
    email?: string;
    leagueName?: string;
    ppr?: string;
    budget?: string;
    maxPlayers?: string;
}

export interface CreateTeamDto extends CreateLeagueDto {
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