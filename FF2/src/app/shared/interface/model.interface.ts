export interface BasePlayer {
    Name?: string;
    Flex?: string;
    Team?: string;
    Position?: string;
}

export interface Player extends BasePlayer {
    Select?: string;
    MinPrice?: number;
    MaxPrice?: number;
    AvgPrice?: number;
    Points?: number;
}

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

export interface BaseLeague {
    LeagueName?: string;
    MaxPlayers?: string;
    LeagueType?: string;
    PPR?: string;
    teams?: Team[];
    Status?: string;
}

export interface SnakeLeague extends BaseLeague {
    leagueId?: string;
    DefaultAutoPick?: string;
    DraftTurn?: string;
    DraftRound?: string;
}

export interface AuctionLeague extends BaseLeague {
    leagueId?: string;
    DraftTurn?: string;
    DraftRound?: string;
    TotalBudget?: string;
    CurrentBidder?: string;
    CurrentBid?: string;
}

export interface User {
    uId?: string;
    userId?: string;
    displayName?: string;
    email?: string;
    photoUrl?: string;
    teams?: Team[];
}

export interface Team extends BaseLeague {
    Name?: string;
    DraftPosition?: string;
    CurrentBudget?: string;
    players?: Player[];
}

export interface LastSeasonPlayers {
    quaterBacks: any[];
    runningsBacks: any[];
    wideReceivers: any[];
    tightEnds: any[];
    defenses: any[];
    kickers: any[];
}
