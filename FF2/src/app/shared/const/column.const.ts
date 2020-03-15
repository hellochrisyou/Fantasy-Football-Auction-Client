import { ColumnObject } from '../interface/interface';

export const QB_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Team', propertyName: 'Team' },
    { columnId: 'Min Price', propertyName: 'MinPrice' },
    { columnId: 'Max Price', propertyName: 'MaxPrice' },
    { columnId: 'Avg Price', propertyName: 'AvgPrice' },
    { columnId: 'PassYD', propertyName: 'PassYD' },
    { columnId: 'PassTD', propertyName: 'PassTD' },
    { columnId: 'INT', propertyName: 'INT' },
    { columnId: 'RushYD', propertyName: 'RushYD' },
    { columnId: 'RushTD', propertyName: 'RushTD' },
    { columnId: 'Sack', propertyName: 'Sack' },
    { columnId: 'Fumble', propertyName: 'Fumble' },
    { columnId: 'Points', propertyName: 'Points' }
];

export const RB_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Team', propertyName: 'Team' },
    { columnId: 'Min Price', propertyName: 'MinPrice' },
    { columnId: 'Max Price', propertyName: 'MaxPrice' },
    { columnId: 'Avg Price', propertyName: 'AvgPrice' },
    { columnId: 'RushYD', propertyName: 'RushYD' },
    { columnId: 'RushTD', propertyName: 'RushTD' },
    { columnId: 'Rec', propertyName: 'Rec' },
    { columnId: 'RecYD', propertyName: 'RecYD' },
    { columnId: 'RecTD', propertyName: 'RecTD' },
    { columnId: 'Fumble', propertyName: 'Fumble' },
    { columnId: 'Points', propertyName: 'Points' }
];

export const REC_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Team', propertyName: 'Team' },
    { columnId: 'Min Price', propertyName: 'MinPrice' },
    { columnId: 'Max Price', propertyName: 'MaxPrice' },
    { columnId: 'Avg Price', propertyName: 'AvgPrice' },
    { columnId: 'Rec', propertyName: 'Rec' },
    { columnId: 'RecYD', propertyName: 'RecYD' },
    { columnId: 'RecTD', propertyName: 'RecTD' },
    { columnId: 'Points', propertyName: 'Points' }
];

export const DEF_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Min Price', propertyName: 'MinPrice' },
    { columnId: 'Max Price', propertyName: 'MaxPrice' },
    { columnId: 'Avg Price', propertyName: 'AvgPrice' },
    { columnId: 'Points Allowed', propertyName: 'PointsAllowed' },
    { columnId: 'TD', propertyName: 'TD' },
    { columnId: 'Sack', propertyName: 'Sack' },
    { columnId: 'INT', propertyName: 'INT' },
    { columnId: 'FumbleRec', propertyName: 'FumbleRec' },
    { columnId: 'Safety', propertyName: 'Safety' },
    { columnId: 'Points', propertyName: 'Points' }
]

export const K_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Team', propertyName: 'Team' },
    { columnId: 'Min Price', propertyName: 'MinPrice' },
    { columnId: 'Max Price', propertyName: 'MaxPrice' },
    { columnId: 'Avg Price', propertyName: 'AvgPrice' },
    { columnId: '0-19', propertyName: 'Fg0To19' },
    { columnId: '20-29', propertyName: 'Fg20To29' },
    { columnId: '30-39', propertyName: 'Fg30To39' },
    { columnId: '40-49', propertyName: 'Fg40To49' },
    { columnId: '50+', propertyName: 'Fg50Plus' },
    { columnId: 'PAT', propertyName: 'PAT' },
    { columnId: 'Points', propertyName: 'Points' }
];


export const TEAM_COL_OBJ: ColumnObject[] = [
    { columnId: 'ViewPlayers', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'DraftPosition', propertyName: 'DraftPosition' },
    { columnId: 'budget', propertyName: 'budget' },
];



export const AUCTION_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'League Name', propertyName: 'leagueName' },
    { columnId: 'Budget', propertyName: 'totalBudget' },
    { columnId: 'Max Players', propertyName: 'maxPlayers' },
    { columnId: 'PPR', propertyName: 'ppr' },
    { columnId: 'Status', propertyName: 'status' },
    // { columnId: 'Type', propertyName: 'Type' },
];

export const MY_AUCTION_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: 'Select' },
    { columnId: 'League Name', propertyName: 'leagueName' },
    { columnId: 'Budget', propertyName: 'budget' },
    { columnId: 'Max Players', propertyName: 'maxPlayers' },
    { columnId: 'PPR', propertyName: 'ppr' },
    { columnId: 'Status', propertyName: 'status' },
];

export const SNAKE_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: 'Select' },
    { columnId: 'League Name', propertyName: 'leagueName' },
    { columnId: 'Turn', propertyName: 'draftTurn' },
    { columnId: 'Round', propertyName: 'draftRound' },
    { columnId: 'PPR', propertyName: 'ppr' },
];

export const AUCTION_TEAM_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: 'Select' },
    { columnId: 'Team Name', propertyName: 'teamName' },
    { columnId: 'Budget', propertyName: 'budget' },
    { columnId: 'Position', propertyName: 'draftPosition' },
];

export const PLAYER_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: 'Select' },
    { columnId: 'Name', propertyName: 'displayName' },
    { columnId: 'Team', propertyName: 'team' },
    { columnId: 'Position', propertyName: 'position' },
    { columnId: 'Min', propertyName: 'minPrice' },
    { columnId: 'Avg', propertyName: 'avgPrice' },
    { columnId: 'Max', propertyName: 'maxPrice' },
];

export const OTHER_PLAYER_COL_OBJ: ColumnObject[] = [
    { columnId: 'Name', propertyName: 'name' },
    { columnId: 'Team', propertyName: 'team' },
    { columnId: 'Position', propertyName: 'position' },
    { columnId: 'Price', propertyName: 'bid' },
];
export const PLAYER_DISPLAY = [
    'Select', 'Name', 'Team', 'Position', 'Min Price', 'Avg Price', 'Max Price'
];

export const OTHER_PLAYER_DISPLAY = [
    'Name', 'Team', 'Position', 'Price'
]

export const AUCTION_TEAM_DISPLAY = [
    'Select', 'Team Name', 'Budget', 'Position'
];

export const MY_AUCTION_DISPLAY = [
    'Select', 'League Name', 'Team Name', 'Budget', 'Max Players', 'PPR', 'Status'
];

export const AUCTION_DISPLAY = [
    'Select', 'League Name', 'Team Count', 'Budget', 'Max Players', 'PPR', 'Status'
];

export const QB_DISPLAY = [
    // tslint:disable-next-line: max-line-length
    'Select', 'Name', 'Team', 'Min Price', 'Max Price', 'Avg Price', 'PassYD', 'PassTD', 'INT', 'RushYD', 'RushTD', 'Sack', 'Fumble', 'Points'
];

export const RB_DISPLAY = [
    'Select', 'Name', 'Team', 'Min Price', 'Max Price', 'Avg Price', 'RushYD', 'RushTD', 'Rec', 'RecYD', 'RecTD', 'Fumble', 'Points'
];

export const REC_DISPLAY = [
    'Select', 'Name', 'Team', 'Min Price', 'Max Price', 'Avg Price', 'Rec', 'RecYD', 'RecTD', 'Points'
];

export const DEF_DISPLAY = [
    // tslint:disable-next-line: max-line-length
    'Select', 'Name', 'Min Price', 'Max Price', 'Avg Price', 'Points Allowed', 'TD', 'Sack', 'INT', 'FumbleRec', 'Safety', 'Points'
];

export const K_DISPLAY = [
    // tslint:disable-next-line: max-line-length
    'Select', 'Name', 'Team', 'Min Price', 'Max Price', 'Avg Price', '0-19', '20-29', '30-39', '40-49', '50+', 'PAT', 'Points'
];

export const SNAKE_DISPLAY = [
    'Select', 'League Name', 'Turn', 'Round', 'PPR'
];

export const TEAM_DISPLAY = [
    'View_Players', 'Name', 'DraftPosition', 'Current_Budget'
];


