export interface QB extends Player {
    PassYD?: number;
    PassTD?: number;
    INT?: number;
    Sack?: number;
    RushYD?: number;
    RushTD?: number;
    Fumble?: number;
}

export interface RB extends Player {
    RushYD?: number;
    RushTD?: number;
    Rec?: number;
    RecYD?: number;
    RecTD?: number;
    Fumble?: number;
}

export interface WR extends Player {
    Rec?: number;
    RecYD?: number;
    RecTD?: number;
}

export interface TE extends Player {
    Rec?: number;
    RecYD?: number;
    RecTD?: number;
}

export interface DEF extends Player {
    Sack?: number;
    INT?: number;
    FumbleRec?: number;
    Safety?: number;
    TD?: number;
    Points_Allowed?: number;
}

export interface Kicker extends Player {
    PAT?: number;
    Fg0To19?: number;
    Fg20To29?: number;
    Fg30To39?: number;
    Fg40To49?: number;
    Fg50Plus?: number;
}

export interface User {
    uId?: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
}

export interface League {
    leagueId?: number | string;
    Name?: string;
    teams?: Team[];
    Type?: string;
    PPR?: string;
    TotalBudget?: string;
    TeamCount?: string;
    MaxPlayers?: string;
}

export interface Team {
    id?: number | string;
    Name?: string;
    DraftPosition?: number;
    players?: Player[];
    Current_Budget?: number;
}

export interface Player {
    id?: number | string;
    Select?: string;
    Name?: string;
    Team?: string;
    Position?: string;
    MinPrice?: number;
    MaxPrice?: number;
    AvgPrice?: number;
    Current_Bid?: number;
    Current_Owner?: string;
    Points?: number;
}

export interface AuctionPlayer {
    playerId: string;
    ppr: string;
    minPrice: string;
    maxPrice: string;
    avgPrice: string;
    displayName: string;
    team: string;
    position: string;
}

export interface LastSeasonPlayers {
    quaterBacks: any[];
    runningsBacks: any[];
    wideReceivers: any[];
    tightEnds: any[];
    defenses: any[];
    kickers: any[];
}