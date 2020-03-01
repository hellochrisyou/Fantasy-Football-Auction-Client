export interface BasePlayer {
    Select: string;
    Name?: string;
    Flex?: string;
    Team?: string;
    Position?: string;
}

export interface Player extends BasePlayer {
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
    Select: string;
    leagueName?: string;
    maxPlayers?: string;
    leagueType?: string;
    ppr?: string;
    teams?: Team[];
    status?: string;
    playerCount?: string;
    budget?: string;
}

export interface SnakeLeague extends BaseLeague {
    leagueId?: string;
    draftTurn?: string;
    draftRound?: string;
    DefaultAutoPick?: string;
    budget?: string;
}


export interface AuctionLeague extends SnakeLeague {
    budget?: string;
    currentBidder?: string;
    currentBid?: string;
}

export interface User {
    uId?: string;
    userId?: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
    teams?: Team[];
}

export interface Team extends BaseLeague {
    teamName?: string;
    draftPosition?: string;
    currentBudget?: string;
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
