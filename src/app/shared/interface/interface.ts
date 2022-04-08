export interface DialogData {
    title: string;
    subTitle: string;
    text: string;
    increment?: string;
}
export interface ColumnObject {
    columnId: string;
    propertyName: string;
}

export interface BidData {
    budget: number;
    currentBid: number;
    postion: string;
}