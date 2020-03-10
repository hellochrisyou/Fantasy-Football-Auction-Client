import { Injectable } from '@angular/core';
import { Kicker } from 'src/app/shared/interface/model.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KStoreService {

  constructor() { }

  // tslint:disable-next-line: variable-name
  private readonly _kArr = new BehaviorSubject<Kicker[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly kArr$ = this._kArr.asObservable();


  // the getter will return the last value emitted in _todos subject
  public get kArr(): Kicker[] {
    return this._kArr.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  public set kArr(val: Kicker[]) {
    this._kArr.next(val);
  }
}
