import { ColumnObject } from '../interface/interface';

export const QB_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'name', propertyName: 'Name' },
    { columnId: 'passingYard', propertyName: 'PassYd' },
    { columnId: 'passingTD', propertyName: 'PassTD' },
    { columnId: 'interception', propertyName: 'INT' },
    { columnId: 'rushingYard', propertyName: 'RushYD' },
    { columnId: 'rushingTD', propertyName: 'RushTD' },
    { columnId: 'sack', propertyName: 'Sack' },
    { columnId: 'fumble', propertyName: 'Fumble' },
    { columnId: 'fantasyPoints', propertyName: 'Fantasy Points' }
];

export const RB_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'name', propertyName: 'Name' },
    { columnId: 'rushingYard', propertyName: 'RushYD' },
    { columnId: 'rushingTD', propertyName: 'RushTD' },
    { columnId: 'reception', propertyName: 'Rec' },
    { columnId: 'receivingYard', propertyName: 'RecYd' },
    { columnId: 'receivingTD', propertyName: 'RecTD' },
    { columnId: 'fumble', propertyName: 'Fumble' },
    { columnId: 'fantasyPoints', propertyName: 'Fantasy Points' }
];

export const RECEIVING_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'name', propertyName: 'Name' },
    { columnId: 'reception', propertyName: 'Rec' },
    { columnId: 'receivingYard', propertyName: 'RecYd' },
    { columnId: 'receivingTD', propertyName: 'RecTD' },
    { columnId: 'fantasyPoints', propertyName: 'Fantasy Points' }
];

export const DEF_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'name', propertyName: 'name' },
    { columnId: 'pointsAllowed', propertyName: 'Points Allowed' },
    { columnId: 'TD', propertyName: 'TD' },
    { columnId: 'sack', propertyName: 'Sack' },
    { columnId: 'interception', propertyName: 'INT' },
    { columnId: 'fumblesRecovered', propertyName: 'FumbleRec' },
    { columnId: 'safety', propertyName: 'Safety' },
    { columnId: 'fantasyPoints', propertyName: 'Fantasy Points' }
]

export const K_COL_OBJ: ColumnObject[] = [
    { columnId: 'button', propertyName: 'button' },
    { columnId: 'name', propertyName: 'name' },
    { columnId: 'fg0To19', propertyName: '0-19' },
    { columnId: 'fg20To29', propertyName: '20-29' },
    { columnId: 'fg30To39', propertyName: '30-39' },
    { columnId: 'fg40To49', propertyName: '40-49' },
    { columnId: 'fg50Plus', propertyName: '50+' },
    { columnId: 'pat', propertyName: 'PAT' },
    { columnId: 'fantasyPoints', propertyName: 'Fantasy Points' }
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
    'button', 'name', 'passingYard', 'passingTD', 'interception', 'rushingYard', 'rushingTD', 'sack', 'fumble', 'fantasyPoints'
]

export const RB_DISPLAY = [
    'button', 'name', 'rushingYard', 'rushingTD', 'reception', 'receptionYard', 'receivingTd', 'fumble', 'fantasyPoints'
]

export const RECEIVING_DISPLAY = [
    'button', 'name', 'reception', 'receptionYard', 'receivingTd', 'fantasyPoints'
]

export const DEF_DISPLAY = [
    'button', 'name', 'pointsAllowed', 'TD', 'sack', 'interception', 'fumblesRecovered', 'safety', 'fantasyPoints'
]

export const K_DISPLAY = [
    'button', 'name', 'fg0-19', 'fg20To29', 'fg30To39', 'fg40To49', 'fg50Plus', 'pat', 'fantasyPoints'
]

export const TEAM_DISPLAY = [
    'name', 'draftPosition'
]

export const PLAYER_DISPLAY = [
    'name', 'position', 'fantasy_points'
]