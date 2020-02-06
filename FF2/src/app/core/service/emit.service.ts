import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  @Output() refreshOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public refreshTable() {
    this.refreshOutput.emit(true);
  }
}
