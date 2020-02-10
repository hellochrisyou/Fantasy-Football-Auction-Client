import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';
import { APIURL } from '../../shared/const/url.const'
import { StatsService } from './stats.service';
import { HttpService } from './http.service';
import { FilterPlayersService } from './filter-players.service';
import { NotifyService } from './emit/notify.service';
@Injectable({
  providedIn: 'root'
})
export class LastSeasonStatService {

  qbArray: QB[] = [];
  rbArray: RB[] = [];
  wrArray: WR[] = [];
  teArray: TE[] = [];
  defArray: DEF[] = [];
  kArray: Kicker[] = [];

  constructor(
    public http: HttpClient,
    public statsFunctionService: StatsService,
    public httpService: HttpService,
    public filterService: FilterPlayersService,
    public notifyService: NotifyService
  ) {
  }

  setLastSeasonQB(): void {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'QB').subscribe(
      data => {
        console.log('qbdata', data);
        this.qbArray = this.statsFunctionService.returnQbStats(data.players);
        this.qbArray = this.filterService.filterArray(this.qbArray);
        this.notifyService.emitDraftRb(this.rbArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonRB(): void {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'RB').subscribe(
      data => {
        this.rbArray = this.statsFunctionService.returnRbStats(data.players);
        this.rbArray = this.filterService.filterArray(this.rbArray);
        this.notifyService.emitDraftWr(this.wrArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonWR(): void {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'WR').subscribe(
      data => {
        this.wrArray = this.statsFunctionService.returnWrStats(data.players);
        this.wrArray = this.filterService.filterArray(this.wrArray);
        this.notifyService.emitDraftTe(this.teArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonTE(): void {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'TE').subscribe(
      data => {
        this.teArray = this.statsFunctionService.returnTeStats(data.players);
        this.teArray = this.filterService.filterArray(this.teArray);
        this.notifyService.emitDraftDef(this.defArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonDEF(): void {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'DEF').subscribe(
      data => {
        this.defArray = this.statsFunctionService.returnDEFStats(data.players);
        this.defArray = this.filterService.filterArray(this.defArray);
        this.notifyService.emitDraftDef(this.defArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonK(): void {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'K').subscribe(
      data => {
        this.kArray = this.statsFunctionService.returnKickerStats(data.players);
        this.kArray = this.filterService.filterArray(this.kArray);
        this.notifyService.emitDraftK(this.kArray);
      },
      err => {
        console.log(err);
      }
    );
  }
}
