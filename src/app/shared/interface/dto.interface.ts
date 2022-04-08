
export interface TeamDto {
    leagueName?: string;
    teamName?: string;
    isReady?: string;
}

export interface CreateLeagueDto extends TeamDto {
    email?: string;
    ppr?: string;
    budget?: string;
    maxPlayers?: string;
    leagueType?: string;
}

export interface CreateTeamDto extends CreateLeagueDto {
    photoUrl?: string;
    draftPosition?: string;
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

export interface PlayerDto {
    name: string;
}

export interface DraftDto {
    email?: string;
    leagueName?: string;
    teamName?: string;
    newBid?: number;
    playerName?: string;
    team?: string;
    position?: string;
}

export interface BidDto extends DraftDto {
    newBid?: number;
}
