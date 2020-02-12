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
    fg0To19?: number;
    fg20To29?: number;
    fg30To39?: number;
    fg40To49?: number;
    fg50Plus?: number;
}

export interface User {
    uid?: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
}

export interface League {
    id?: number | string;
    name: string;
    userCount?: number;
    draftOrder?: number;
    teams?: Team[];
}

export interface Team {
    id?: number | string;
    email: string;
    name: string;
    DraftPosition?: number;
    players?: Player[];
}

export interface Player {
    id?: number | string;
    Name?: string;
    Team?: string;
    Position?: string;
    MinPrice?: number;
    MaxPrice?: number;
    AvgPrice?: number;
    Options?: string;
    FantasyPoints?: number;
}

export interface LastSeasonPlayers {
    quaterBacks: any[];
    runningsBacks: any[];
    wideReceivers: any[];
    tightEnds: any[];
    defenses: any[];
    kickers: any[];
}