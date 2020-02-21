import { QB, DEF, RB, WR, TE, Kicker } from 'src/app/shared/interface/model.interface';

export const REMOVE_EXTRA_PLAYERS = (statArr: any[]): any[] => {
    for (let i = 0; i < statArr.length; i++) {
        if (statArr[i].MinPrice === undefined) {
            statArr.splice(i, 1);
        }
    }
    return statArr;
};
export const REMOVE_RBS = (rbStatArr: RB[]): RB[] => {
    for (let i = 0; i < rbStatArr.length; i++) {
        if (rbStatArr[i].MinPrice === undefined) {
            rbStatArr.splice(i, 1);
        }
    }
    return rbStatArr;
};
export const REMOVE_WRS = (wrStatArr: WR[]): WR[] => {
    for (let i = 0; i < wrStatArr.length; i++) {
        if (wrStatArr[i].MinPrice === undefined) {
            wrStatArr.splice(i, 1);
        }
    }
    console.log(wrStatArr);
    return wrStatArr;
};
export const REMOVE_TES = (teStatArr: TE[]): TE[] => {
    for (let i = 0; i < teStatArr.length; i++) {
        if (teStatArr[i].MinPrice === undefined) {
            teStatArr.splice(i, 1);
        }
    }
    return teStatArr;
};
export const REMOVE_DEF = (defStatArr: DEF[]): DEF[] => {
    for (let i = 0; i < defStatArr.length; i++) {
        if (defStatArr[i].MinPrice === undefined) {
            defStatArr.splice(i, 1);
        }
    }
    return defStatArr;
};
export const REMOVE_KICKERS = (kStatArr: Kicker[]): Kicker[] => {
    for (let i = 0; i < kStatArr.length; i++) {
        if (kStatArr[i].MinPrice === undefined) {
            kStatArr.splice(i, 1);
        }
    }
    return kStatArr;
};
