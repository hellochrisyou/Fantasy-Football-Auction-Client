import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';

export const CALCULATE_QB_POINTS = (qb: QB): number => {
    const fantasyPoints =
        qb.PassTD * 4 +
        qb.PassYD / 25 -
        qb.INT * 2 +
        qb.RushYD / 10 +
        qb.RushTD * 6 -
        qb.Fumble * 2;
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
    def.PointsAllowed === 0
        ? (pointsAllowed = 10)
        : def.PointsAllowed > 0 && def.PointsAllowed < 7
            ? (pointsAllowed = 7)
            : def.PointsAllowed > 6 && def.PointsAllowed < 14
                ? (pointsAllowed = 4)
                : def.PointsAllowed > 13 && def.PointsAllowed < 21
                    ? (pointsAllowed = 1)
                    : def.PointsAllowed > 20 && def.PointsAllowed < 28
                        ? (pointsAllowed = 0)
                        : def.PointsAllowed > 27 && def.PointsAllowed < 35
                            ? (pointsAllowed = -1)
                            : (pointsAllowed = -4);
    const fantasyPoints =
        +def.Sack + +def.INT + +def.FumbleRec + +def.Safety + +def.TD + +def.PointsAllowed;

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
        +kicker.fg0To19 * 3 +
        +kicker.fg20To29 * 3 +
        +kicker.fg30To39 * 3 +
        +kicker.fg40To49 * 4 +
        +kicker.fg50Plus * 5;
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
};
