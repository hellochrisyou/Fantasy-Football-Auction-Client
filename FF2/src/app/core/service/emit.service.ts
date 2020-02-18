import { Injectable, EventEmitter, Output } from '@angular/core';
import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  @Output() refreshOutput: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() mergeQbOutput: EventEmitter<QB[]> = new EventEmitter<QB[]>();
  @Output() mergeRbOutput: EventEmitter<RB[]> = new EventEmitter<RB[]>();
  @Output() mergeWrOutput: EventEmitter<WR[]> = new EventEmitter<WR[]>();
  @Output() mergeTeOutput: EventEmitter<TE[]> = new EventEmitter<TE[]>();
  @Output() mergeDefOutput: EventEmitter<DEF[]> = new EventEmitter<DEF[]>();
  @Output() mergeKickerOutput: EventEmitter<Kicker[]> = new EventEmitter<Kicker[]>();

  constructor() { }

  public refreshTable(): void {
    this.refreshOutput.emit(true);
  }
  public mergeQb(qbArray: QB[]): void {
    this.mergeQbOutput.emit(qbArray);

  }
  public mergeRb(rbArray: RB[]): void {
    this.mergeRbOutput.emit(rbArray);
  }
  public mergeWr(wrArray: WR[]): void {
    this.mergeWrOutput.emit(wrArray);
  }
  public mergeTe(teArray: TE[]): void {
    this.mergeTeOutput.emit(teArray);
  }
  public mergeDef(defArray: DEF[]): void {
    this.mergeDefOutput.emit(defArray);
  }
  public mergeKicker(kArray: Kicker[]): void {
    this.mergeKickerOutput.emit(kArray);
  }
}
