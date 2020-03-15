export interface BasePlayer {
    Select: string;
    displayName?: string;
    Flex?: string;
    team?: string;
    position?: string;
}

export interface Player extends BasePlayer {
    minPrice?: number;
    maxPrice?: number;
    avgPrice?: number;
    Points?: number;
    Bid?: string;
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
    PointsAllowed?: number;
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
    Select?: string;
    leagueName?: string;
    maxPlayers?: string;
    leagueType?: string;
    ppr?: string;
    auctionTeams?: Team[];
    snakeTeams?: Team[];
    status?: string;
    playerCount?: string;
    totalBudget?: string;
}

export interface SnakeLeague extends BaseLeague {
    leagueId?: string;
    draftTurn?: string;
    draftRound?: string;
    DefaultAutoPick?: string;
}


export interface AuctionLeague extends SnakeLeague {
    currentPlayer?: string;
    currentPlayerPosition?: string;
    currentPlayerTeam?: string;
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

export interface Team {
    Select?: string;
    teamName?: string;
    email?: string;
    teamStatus?: string;
    draftPosition?: string;
    budget?: string;
    leagueType?: string;
    ppr?: string;
    auctionPlayers?: Player[];
    photoUrl?: string;
    endBid?: string;
}

export interface OtherTeams {
    teams?: Team[];
}

export interface TeamPlayers {
    players?: Player[];
}

export interface LastSeasonPlayers {
    quaterBacks: Player[];
    runningsBacks: Player[];
    wideReceivers: Player[];
    tightEnds: Player[];
    defenses: Player[];
    kickers: Player[];
}
