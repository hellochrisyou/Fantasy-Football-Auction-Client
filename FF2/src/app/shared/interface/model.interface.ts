export interface QB {
    name: string;
    passingTD: number;
    passingYard: number;
    interception: number;
    sack: number;
    rushingYard: number;
    rushingTD: number;
    fumble: number;
    fantasy_points?: number;
}

export interface RB {
    name: string;
    rushingYard: number;
    rushingTD: number;
    reception: number;
    receivingYard: number;
    receivingTD: number;
    fumble: number;
    fantasy_points?: number;
}

export interface WR {
    name: string;
    reception: number;
    receivingYard: number;
    receivingTD: number;
    fantasy_points?: number;
}

export interface TE {
    name: string;
    reception: number;
    receivingYard: number;
    receivingTD: number;
    fantasy_points?: number;
}

export interface DEF {
    name: string;
    sack: number;
    interception: number;
    fumblesRecovered: number;
    safety: number;
    TD: number;
    pointsAllowed: number;
    fantasy_points?: number;
}

export interface Kicker {
    name: string;
    PAT: number;
    fg0To19: number;
    fg20To29: number;
    fg30To39: number;
    fg40To49: number;
    fg50Plus: number;
    fantasy_points?: number;
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
    name: string;
    position: string;
    fantasy_points?: number;
}
