export interface CreateAuctionDto extends CreateSnakeDto {
    LeagueName: string;
    TeamName: string;
    TotalBudget?: string;
    PPR: string;
    MaxPlayers: string;
}

export interface CreateSnakeDto {
    LeagueName: string;
    TeamName: string;
    PPR: string;
    MaxPlayers: string;
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