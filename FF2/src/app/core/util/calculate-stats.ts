export const calculateQBFantasy(qb: QB): number {
    let fantasyPoints =
        qb.passingTD * 4 +
        qb.passingYard / 25 -
        qb.interception * 2 +
        qb.rushingYard / 10 +
        qb.rushingTD * 6 -
        qb.fumble * 2;
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
}

export const calculateRBFantasy(rb: RB): number {
    let fantasyPoints =
        rb.rushingYard / 10 +
        rb.rushingTD * 6 +
        rb.reception * 1 +
        rb.receivingYard / 10 +
        rb.receivingTD * 6 -
        rb.fumble * 2;
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
}
export const calculateWRFantasy(wr: WR): number {
    let fantasyPoints = wr.reception * 1 + wr.receivingYard / 10 + wr.receivingTD * 6;
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
}
export const calculateTEFantasy(te: TE): number {
    let fantasyPoints = te.reception * 1 + te.receivingYard / 10 + te.receivingTD * 6;
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
}
export const calculateDEFFantasy(def: DEF): number {
    let pointsAllowed = 0;
    def.pointsAllowed === 0
        ? (pointsAllowed = 10)
        : def.pointsAllowed > 0 && def.pointsAllowed < 7
            ? (pointsAllowed = 7)
            : def.pointsAllowed > 6 && def.pointsAllowed < 14
                ? (pointsAllowed = 4)
                : def.pointsAllowed > 13 && def.pointsAllowed < 21
                    ? (pointsAllowed = 1)
                    : def.pointsAllowed > 20 && def.pointsAllowed < 28
                        ? (pointsAllowed = 0)
                        : def.pointsAllowed > 27 && def.pointsAllowed < 35
                            ? (pointsAllowed = -1)
                            : (pointsAllowed = -4);

    // tslint:disable-next-line:max-line-length
    let fantasyPoints =
        +def.sack + +def.interception + +def.fumblesRecovered + +def.safety + +def.TD + +def.pointsAllowed;

    //   parseInt(def.sack, 10) +
    //   parseInt(def.interception, 10) +
    //   parseInt(def.fumblesRecovered, 10) +
    //   parseInt(def.safety, 10) +
    //   parseInt(def.TD, 10) +
    //   parseInt(def.pointsAllowed, 10);
    return Number.parseFloat(fantasyPoints.toFixed(2));
}
export const calculateKickerFantasy(kicker: Kicker): number {
    let fantasyPoints =
        +kicker.PAT +
        +kicker.fg0To19 * 3 +
        +kicker.fg20To29 * 3 +
        +kicker.fg30To39 * 3 +
        +kicker.fg40To49 * 4 +
        +kicker.fg50Plus * 5;
    return Number.parseFloat(parseInt(fantasyPoints.toString(), 10).toFixed(2));
}