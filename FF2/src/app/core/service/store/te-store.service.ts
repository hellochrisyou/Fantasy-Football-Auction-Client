import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TE, RB } from 'src/app/shared/interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class TeStoreService {

  constructor() { }

  // tslint:disable-next-line: variable-name
  private readonly _teArr = new BehaviorSubject<TE[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly teArr$ = this._teArr.asObservable();


  // the getter will return the last value emitted in _todos subject
  public get teArr(): TE[] {
    return this._teArr.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  public set teArr(val: TE[]) {
    this._teArr.next(val);
  }
}
