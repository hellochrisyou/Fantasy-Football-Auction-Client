import { ColumnObject } from '../interface/interface';

export const QB_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Team', propertyName: 'Team' },
    { columnId: 'MinPrice', propertyName: 'MinPrice' },
    { columnId: 'MaxPrice', propertyName: 'MaxPrice' },
    { columnId: 'AvgPrice', propertyName: 'AvgPrice' },
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
    { columnId: 'MinPrice', propertyName: 'MinPrice' },
    { columnId: 'MaxPrice', propertyName: 'MaxPrice' },
    { columnId: 'AvgPrice', propertyName: 'AvgPrice' },
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
    { columnId: 'MinPrice', propertyName: 'MinPrice' },
    { columnId: 'MaxPrice', propertyName: 'MaxPrice' },
    { columnId: 'AvgPrice', propertyName: 'AvgPrice' },
    { columnId: 'Rec', propertyName: 'Rec' },
    { columnId: 'RecYD', propertyName: 'RecYD' },
    { columnId: 'RecTD', propertyName: 'RecTD' },
    { columnId: 'Points', propertyName: 'Points' }
];

export const DEF_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Team', propertyName: 'Team' },
    { columnId: 'MinPrice', propertyName: 'MinPrice' },
    { columnId: 'MaxPrice', propertyName: 'MaxPrice' },
    { columnId: 'AvgPrice', propertyName: 'AvgPrice' },
    { columnId: 'Points_Allowed', propertyName: 'Points_Allowed' },
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
    { columnId: 'MinPrice', propertyName: 'MinPrice' },
    { columnId: 'MaxPrice', propertyName: 'MaxPrice' },
    { columnId: 'AvgPrice', propertyName: 'AvgPrice' },
    { columnId: 'Fg0To19', propertyName: 'Fg0To19' },
    { columnId: 'Fg20To29', propertyName: 'Fg20To29' },
    { columnId: 'Fg30To39', propertyName: 'Fg30To39' },
    { columnId: 'Fg40To49', propertyName: 'Fg40To49' },
    { columnId: 'Fg50Plus', propertyName: 'Fg50Plus' },
    { columnId: 'PAT', propertyName: 'PAT' },
    { columnId: 'Points', propertyName: 'Points' }
];


export const TEAM_COL_OBJ: ColumnObject[] = [
    { columnId: 'ViewPlayers', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'DraftPosition', propertyName: 'DraftPosition' },
    { columnId: 'CurrentBudget', propertyName: 'CurrentBudget' },
];

export const PLAYER_COL_OBJ: ColumnObject[] = [
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Team', propertyName: 'Team' },
    { columnId: 'Position', propertyName: 'Position' },
    { columnId: 'CurrentBid', propertyName: 'CurrentBid' },
    { columnId: 'CurrentOwner', propertyName: 'CurrentOwner' },
    { columnId: 'Points', propertyName: 'Points' },
];

export const SNAKE_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'TeamCount', propertyName: 'TeamCount' },
    { columnId: 'MaxPlayers', propertyName: 'MaxPlayers' },
    { columnId: 'PPR', propertyName: 'PPR' },
    // { columnId: 'Type', propertyName: 'Type' },
];

export const AUCTION_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: 'select' },
    { columnId: 'LeagueName', propertyName: 'leagueName' },
    { columnId: 'TeamCount', propertyName: 'teamCount' },
    { columnId: 'Budget', propertyName: 'budget' },
    { columnId: 'MaxPlayers', propertyName: 'maxPlayers' },
    { columnId: 'PPR', propertyName: 'ppr' },
    { columnId: 'Status', propertyName: 'status' },
    // { columnId: 'Type', propertyName: 'Type' },
];

export const MY_AUCTION_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: 'select' },
    { columnId: 'LeagueName', propertyName: 'leagueName' },
    { columnId: 'Budget', propertyName: 'budget' },
    { columnId: 'MaxPlayers', propertyName: 'draftPosition' },
    // { columnId: 'Players', propertyName: 'playerCount' },
    { columnId: 'PPR', propertyName: 'ppr' },
    { columnId: 'Status', propertyName: 'status' },
    // { columnId: 'Type', propertyName: 'Type' },
];

export const MY_AUCTION_DISPLAY = [
    'Select', 'LeagueName', 'Budget', 'MaxPlayers', 'PPR', 'Status'
];

export const AUCTION_DISPLAY = [
    'Select', 'LeagueName', 'TeamCount', 'Budget', 'MaxPlayers', 'PPR', 'Status'
];

export const QB_DISPLAY = [
    // tslint:disable-next-line: max-line-length
    'Select', 'Name', 'Team', 'MinPrice', 'MaxPrice', 'AvgPrice', 'PassYD', 'PassTD', 'INT', 'RushYD', 'RushTD', 'Sack', 'Fumble', 'Points'
];

export const RB_DISPLAY = [
    'Select', 'Name', 'Team', 'MinPrice', 'MaxPrice', 'AvgPrice', 'RushYD', 'RushTD', 'Rec', 'RecYD', 'RecTD', 'Fumble', 'Points'
];

export const REC_DISPLAY = [
    'Select', 'Name', 'Team', 'MinPrice', 'MaxPrice', 'AvgPrice', 'Rec', 'RecYD', 'RecTD', 'Points'
];

export const DEF_DISPLAY = [
    // tslint:disable-next-line: max-line-length
    'Select', 'Name', 'Team', 'MinPrice', 'MaxPrice', 'AvgPrice', 'Points_Allowed', 'TD', 'Sack', 'INT', 'FumbleRec', 'Safety', 'Points'
];

export const K_DISPLAY = [
    // tslint:disable-next-line: max-line-length
    'Select', 'Name', 'Team', 'MinPrice', 'MaxPrice', 'AvgPrice', 'Fg0To19', 'Fg20To29', 'Fg30To39', 'Fg40To49', 'Fg50Plus', 'PAT', 'Points'
];

export const SNAKE_DISPLAY = [
    'Select', 'Name', 'TeamCount', 'MaxPlayers', 'PPR'
];

export const TEAM_DISPLAY = [
    'View_Players', 'Name', 'DraftPosition', 'Current_Budget'
];

export const PLAYER_DISPLAY = [
    'Name', 'Team', 'position', 'Current_Bid', 'Current_Owner', 'Points'
];
