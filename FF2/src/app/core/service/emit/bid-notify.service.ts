import { Injectable, Output, EventEmitter } from '@angular/core';
import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';

@Injectable({
    providedIn: 'root'
})
export class BidNotifyService {

    @Output() sendBidAmount: EventEmitter<number> = new EventEmitter();

    emitBidAmount(value: number): void {
        this.sendBidAmount.emit(value);
    }
}
