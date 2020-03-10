import { Injectable } from '@angular/core';
import { QB } from '../../../shared/interface/model.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QbStoreService {

  constructor() { }

  // tslint:disable-next-line: variable-name
  private readonly _qbArr = new BehaviorSubject<QB[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly kArr$ = this._qbArr.asObservable();


  // the getter will return the last value emitted in _todos subject
  public get qbArr(): QB[] {
    return this._qbArr.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  public set qbArr(val: QB[]) {
    this._qbArr.next(val);
  }
}
