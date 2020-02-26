import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';

export const CALCULATE_QB_POINTS = (qb: QB): number => {
    const fantasyPoints =
        qb.PassTD * 4 +
        qb.PassYD / 25 -
        qb.INT * 2 +
        qb.RushYD / 10 +
        qb.RushTD * 6 -
        qb.Fumble * 2;
    console.log('fantasy points', qb, fantasyPoints);
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
};

export const CALCULATE_RB_POINTS = (rb: RB): number => {
    const fantasyPoints =
        rb.RushYD / 10 +
        rb.RushTD * 6 +
        rb.Rec * 1 +
        rb.RecYD / 10 +
        rb.RecTD * 6 -
        rb.Fumble * 2;
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
};

export const CALCULATE_RECEIVER_POINTS = (data: WR | TE): number => {
    const fantasyPoints = data.Rec * 1 + data.RecYD / 10 + data.RecTD * 6;
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
};

export const CALCULATE_DEFENSE_POINTS = (def: DEF): number => {
    let pointsAllowed = 0;
    def.Points_Allowed === 0
        ? (pointsAllowed = 10)
        : def.Points_Allowed > 0 && def.Points_Allowed < 7
            ? (pointsAllowed = 7)
            : def.Points_Allowed > 6 && def.Points_Allowed < 14
                ? (pointsAllowed = 4)
                : def.Points_Allowed > 13 && def.Points_Allowed < 21
                    ? (pointsAllowed = 1)
                    : def.Points_Allowed > 20 && def.Points_Allowed < 28
                        ? (pointsAllowed = 0)
                        : def.Points_Allowed > 27 && def.Points_Allowed < 35
                            ? (pointsAllowed = -1)
                            : (pointsAllowed = -4);
    const fantasyPoints =
        +def.Sack + +def.INT + +def.FumbleRec + +def.Safety + +def.TD + +def.Points_Allowed;

    //   parseInt(def.sack, 10) +
    //   parseInt(def.interception, 10) +
    //   parseInt(def.fumblesRecovered, 10) +
    //   parseInt(def.safety, 10) +
    //   parseInt(def.TD, 10) +
    //   parseInt(def.pointsAllowed, 10);
    return Number.parseFloat(fantasyPoints.toFixed(2));
};

export const CALCULATE_KICKER_POINTS = (kicker: Kicker): number => {
    const fantasyPoints =
        +kicker.PAT +
        +kicker.Fg0To19 * 3 +
        +kicker.Fg20To29 * 3 +
        +kicker.Fg30To39 * 3 +
        +kicker.Fg40To49 * 4 +
        +kicker.Fg50Plus * 5;
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
};
