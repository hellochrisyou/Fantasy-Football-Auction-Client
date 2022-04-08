import { Injectable } from '@angular/core';
import { QB, Player } from '../../../shared/interface/model.interface';
import { BehaviorSubject } from 'rxjs';
import { slicePlayer } from '../../../shared/utils/slicePlayer.utils';
import { EmitService } from '../emit.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerStoreService {


  constructor(private emitService: EmitService) { }

  // tslint:disable-next-line: variable-name
  private _qbStore: Player[] = [];
  // tslint:disable-next-line: variable-name
  private _rbStore: Player[] = [];
  // tslint:disable-next-line: variable-name
  private _wrStore: Player[] = [];
  // tslint:disable-next-line: variable-name
  private _teStore: Player[] = [];
  // tslint:disable-next-line: variable-name
  private _defStore: Player[] = [];
  // tslint:disable-next-line: variable-name
  private _kStore: Player[] = [];


  public get qbStore(): Player[] {
    return this._qbStore;
  }
  public set qbStore(value: Player[]) {
    this._qbStore = value;
  }
  public get rbStore(): Player[] {
    return this._rbStore;
  }
  public set rbStore(value: Player[]) {
    this._rbStore = value;
  }
  public get wrStore(): Player[] {
    return this._wrStore;
  }
  public set wrStore(value: Player[]) {
    this._wrStore = value;
  }
  public get teStore(): Player[] {
    return this._teStore;
  }
  public set teStore(value: Player[]) {
    this._teStore = value;
  }
  public get defStore(): Player[] {
    return this._defStore;
  }
  public set defStore(value: Player[]) {
    this._defStore = value;
  }
  public get kStore(): Player[] {
    return this._kStore;
  }
  public set kStore(value: Player[]) {
    this._kStore = value;
  }

  public addQb(qb: Player) {
    this.qbStore.push(qb);
  }
  public addRb(rb: Player) {
    this.rbStore.push(rb);
  }
  public addWr(wr: Player) {
    this.wrStore.push(wr);
  }
  public addTe(te: Player) {
    this.teStore.push(te);
  }
  public addDef(def: Player) {
    this.defStore.push(def);
  }
  public addKicker(k: Player) {
    this.kStore.push(k);
  }
  public removeQb(name: string) {
    this.qbStore = slicePlayer(this.qbStore, name);
    this.emitService.refreshTable();
  }
  public removeRb(name: string) {
    this.rbStore = slicePlayer(this.wrStore, name);
    this.emitService.refreshTable();
  }
  public removeWr(name: string) {
    this.wrStore = slicePlayer(this.wrStore, name);
    this.emitService.refreshTable();
  }
  public removeTe(name: string) {
    this.teStore = slicePlayer(this.teStore, name);
    this.emitService.refreshTable();
  }
  public removeDef(name: string) {
    this.defStore = slicePlayer(this.defStore, name);
    this.emitService.refreshTable();
  }
  public removeK(name: string) {
    this.kStore = slicePlayer(this.kStore, name);
    this.emitService.refreshTable();
  }

}
