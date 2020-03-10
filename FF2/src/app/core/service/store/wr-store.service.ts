import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WR, TE } from 'src/app/shared/interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class WrStoreService {

  constructor() { }

  // tslint:disable-next-line: variable-name
  private readonly _wrArr = new BehaviorSubject<WR[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly wrArr$ = this._wrArr.asObservable();


  // the getter will return the last value emitted in _todos subject
  public get wrArr(): WR[] {
    return this._wrArr.getValue();
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  public set wrArr(val: WR[]) {
    this._wrArr.next(val);
  }
}
