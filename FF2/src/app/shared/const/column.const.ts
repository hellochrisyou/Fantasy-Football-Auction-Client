import { ColumnObject } from '../interface/interface';

export const QB_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: 'Select' },
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
    { columnId: 'Select', propertyName: 'Select' },
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
    { columnId: 'Select', propertyName: 'Select' },
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
    { columnId: 'Select', propertyName: 'Select' },
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
    { columnId: 'Select', propertyName: 'Select' },
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

export const LEAGUE_COL_OBJ: ColumnObject[] = [
    { columnId: 'Join_League', propertyName: 'Join_League' },
    { columnId: 'Enter_Auction', propertyName: 'Enter_Auction' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'View_Teams', propertyName: 'View_Teams' },
    { columnId: 'Team_Count', propertyName: 'Team_Count' },
    { columnId: 'PPR', propertyName: 'PPR' },
    { columnId: 'Total_Budget', propertyName: 'Total_Budget' },
    { columnId: 'Maximum_Players', propertyName: 'Maximum_Players' },
];

export const TEAM_COL_OBJ: ColumnObject[] = [
    { columnId: 'View_Players', propertyName: 'View_Players' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Draft_Position', propertyName: 'Draft_Position' },
    { columnId: 'Current_Budget', propertyName: 'Current_Budget' },
];

export const PLAYER_COL_OBJ: ColumnObject[] = [
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Team', propertyName: 'Team' },
    { columnId: 'Position', propertyName: 'Position' },
    { columnId: 'Current_Bid', propertyName: 'Current_Bid' },
    { columnId: 'Current_Owner', propertyName: 'Current_Owner' },
    { columnId: 'Points', propertyName: 'Points' },
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

export const LEAGUE_DISPLAY = [
    'Join_League', 'Enter_Auction', 'View_Teams', 'Name', 'Team_Count', 'PPR', 'Total_Budget', 'Maximum_Players'
];

export const TEAM_DISPLAY = [
    'View_Players', 'Name', 'DraftPosition', 'Current_Budget'
];

export const PLAYER_DISPLAY = [
    'Name', 'Team', 'position', 'Current_Bid', 'Current_Owner', 'Points'
];
