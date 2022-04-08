import { Player } from '../interface/model.interface';

export const slicePlayer = (playerArr: Player[], playerName: string): Player[] => {
    for (const playerIndex in playerArr) {
        if (playerArr.hasOwnProperty(playerIndex)) {
            if (playerArr[playerIndex].displayName === playerName) {
                playerArr.splice(+playerIndex, 1);
            }
        }
    }
    return playerArr;
}