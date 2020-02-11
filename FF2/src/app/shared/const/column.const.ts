import { ColumnObject } from '../interface/interface';

export const QB_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'Name', propertyName: 'Name' },
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
    { columnId: 'FantasyPoints', propertyName: 'FantasyPoints' }
];

export const RB_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'MinPrice', propertyName: 'MinPrice' },
    { columnId: 'MaxPrice', propertyName: 'MaxPrice' },
    { columnId: 'AvgPrice', propertyName: 'AvgPrice' },
    { columnId: 'RushYD', propertyName: 'RushYD' },
    { columnId: 'RushTD', propertyName: 'RushTD' },
    { columnId: 'Rec', propertyName: 'Rec' },
    { columnId: 'RecYD', propertyName: 'RecYD' },
    { columnId: 'RecTD', propertyName: 'RecTD' },
    { columnId: 'Fumble', propertyName: 'Fumble' },
    { columnId: 'FantasyPoints', propertyName: 'FantasyPoints' }
];

export const RECEIVING_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'MinPrice', propertyName: 'MinPrice' },
    { columnId: 'MaxPrice', propertyName: 'MaxPrice' },
    { columnId: 'AvgPrice', propertyName: 'AvgPrice' },
    { columnId: 'Rec', propertyName: 'Rec' },
    { columnId: 'RecYD', propertyName: 'RecYD' },
    { columnId: 'RecTD', propertyName: 'RecTD' },
    { columnId: 'FantasyPoints', propertyName: 'FantasyPoints' }
];

export const DEF_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'MinPrice', propertyName: 'MinPrice' },
    { columnId: 'MaxPrice', propertyName: 'MaxPrice' },
    { columnId: 'AvgPrice', propertyName: 'AvgPrice' },
    { columnId: 'PointsAllowed', propertyName: 'PointsAllowed' },
    { columnId: 'TD', propertyName: 'TD' },
    { columnId: 'Sack', propertyName: 'Sack' },
    { columnId: 'INT', propertyName: 'INT' },
    { columnId: 'FumbleRec', propertyName: 'FumbleRec' },
    { columnId: 'Safety', propertyName: 'Safety' },
    { columnId: 'FantasyPoints', propertyName: 'FantasyPoints' }
]

export const K_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'MinPrice', propertyName: 'MinPrice' },
    { columnId: 'MaxPrice', propertyName: 'MaxPrice' },
    { columnId: 'AvgPrice', propertyName: 'AvgPrice' },
    { columnId: 'fg0To19', propertyName: 'fg0To19' },
    { columnId: 'fg20To29', propertyName: 'fg20To29' },
    { columnId: 'fg30To39', propertyName: 'fg30To39' },
    { columnId: 'fg40To49', propertyName: 'fg40To49' },
    { columnId: 'fg50Plus', propertyName: 'fg50Plus' },
    { columnId: 'PAT', propertyName: 'PAT' },
    { columnId: 'FantasyPoints', propertyName: 'FantasyPoints' }
];

export const TEAM_COL_OBJ: ColumnObject[] = [
    { columnId: 'name', propertyName: 'Name' },
    { columnId: 'draftPosition', propertyName: 'Draft Position' },
];

export const PLAYER_COL_OBJ: ColumnObject[] = [
    { columnId: 'name', propertyName: 'Name' },
    { columnId: 'position', propertyName: 'Position' },
    { columnId: 'fantasy_points', propertyName: 'Fantasy Points' },
]
export const QB_DISPLAY = [
    'button', 'Name', 'MinPrice', 'MaxPrice', 'AvgPrice', 'PassYD', 'PassTD', 'INT', 'RushYD', 'RushTD', 'Sack', 'Fumble', 'FantasyPoints'
]

export const RB_DISPLAY = [
    'button', 'Name', 'MinPrice', 'MaxPrice', 'AvgPrice', 'RushYD', 'RushTD', 'Rec', 'RecYD', 'RecTD', 'Fumble', 'FantasyPoints'
]

export const RECEIVING_DISPLAY = [
    'button', 'Name', 'MinPrice', 'MaxPrice', 'AvgPrice', 'Rec', 'RecYD', 'RecTD', 'FantasyPoints'
]

export const DEF_DISPLAY = [
    'button', 'Name', 'MinPrice', 'MaxPrice', 'AvgPrice', 'PointsAllowed', 'TD', 'Sack', 'INT', 'FumbleRec', 'Safety', 'FantasyPoints'
]

export const K_DISPLAY = [
    'button', 'Name', 'MinPrice', 'MaxPrice', 'AvgPrice', 'fg0To19', 'fg20To29', 'fg30To39', 'fg40To49', 'fg50Plus', 'PAT', 'FantasyPoints'
]

export const TEAM_DISPLAY = [
    'name', 'draftPosition'
]

export const PLAYER_DISPLAY = [
    'name', 'position', 'fantasy_points'
]