import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DEF } from 'src/app/shared/interface/model.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DefStoreService {

  constructor() { }

  private readonly _defArr = new BehaviorSubject<DEF[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly defArr$ = this._defArr.asObservable();


  // the getter will return the last value emitted in _todos subject
  public get defArr(): DEF[] {
    return this._defArr.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  public set defArr(val: DEF[]) {
    this._defArr.next(val);
  }

}
