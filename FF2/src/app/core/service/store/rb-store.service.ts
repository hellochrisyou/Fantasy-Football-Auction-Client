import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RB, QB } from 'src/app/shared/interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class RbStoreService {

  constructor() { }

  // tslint:disable-next-line: variable-name
  private readonly _rbArr = new BehaviorSubject<RB[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly rbArr$ = this._rbArr.asObservable();


  // the getter will return the last value emitted in _todos subject
  public get rbArr(): RB[] {
    return this._rbArr.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  public set rbArr(val: RB[]) {
    this._rbArr.next(val);
  }
}
