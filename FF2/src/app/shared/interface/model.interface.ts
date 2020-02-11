export interface QB extends Player {
    name?: string;
    passingTD?: number;
    passingYard?: number;
    interception?: number;
    sack?: number;
    rushingYard?: number;
    rushingTD?: number;
    fumble?: number;
}

export interface RB extends Player {
    rushingYard?: number;
    rushingTD?: number;
    reception?: number;
    receivingYard?: number;
    receivingTD?: number;
    fumble?: number;
}

export interface WR extends Player {
    reception?: number;
    receivingYard?: number;
    receivingTD?: number;
}

export interface TE extends Player {
    reception?: number;
    receivingYard?: number;
    receivingTD?: number;
}

export interface DEF extends Player {
    sack?: number;
    interception?: number;
    fumblesRecovered?: number;
    safety?: number;
    TD?: number;
    pointsAllowed?: number;
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
    draft_position?: number;
    players?: Player[];
}

export interface Player {
    id?: number | string;
    name?: string;
    position?: string;
    team?: string;
    minPrice?: number;
    maxPrice?: number;
    avgPrice?: number;
    fantasy_points?: number;
}

export interface LastSeasonPlayers {
    quaterBacks: QB[];
    runningsBacks: RB[];
    wideReceivers: WR[];
    tightEnds: TE[];
    defenses: DEF[];
    kickers: Kicker[];
}