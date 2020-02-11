import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';
import { APIURL } from '../../shared/const/url.const'
import { StatsService } from './stats.service';
import { HttpService } from './http.service';
import { FilterPlayersService } from './filter-players.service';
import { NotifyService } from './emit/notify.service';
import {
  calculateQBFantasy,
  calculateRBFantasy,
  calculateTEFantasy,
  calculateDEFFantasy,
  calculateKickerFantasy,
  calculateWRFantasy
} from '../util/calculate-stats';
import { Observable } from 'rxjs';

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

  public setLastSeasonQB(): any {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'QB').subscribe(
      data => {
        console.log('data here', data);
        this.qbArray = this.statsFunctionService.returnQbStats(data.players);
        this.qbArray = this.filterService.filterArray(this.qbArray);
        this.qbArray.forEach(qb => {
          qb.fantasy_points = calculateQBFantasy(qb);
          return this.qbArray;
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  public setLastSeasonRB(): any {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'RB').subscribe(
      data => {
        this.rbArray = this.statsFunctionService.returnRbStats(data.players);
        this.rbArray = this.filterService.filterArray(this.rbArray);
        this.rbArray.forEach(rb => {
          rb.fantasy_points = calculateRBFantasy(rb);
          return this.rbArray;
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  public setLastSeasonWR(): any {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'WR').subscribe(
      data => {
        this.wrArray = this.statsFunctionService.returnWrStats(data.players);
        this.wrArray = this.filterService.filterArray(this.wrArray);
        this.wrArray.forEach(wr => {
          wr.fantasy_points = calculateWRFantasy(wr);
          return this.wrArray;
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  public setLastSeasonTE(): any {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'TE').subscribe(
      data => {
        this.teArray = this.statsFunctionService.returnTeStats(data.players);
        this.teArray = this.filterService.filterArray(this.teArray);
        this.teArray.forEach(te => {
          te.fantasy_points = calculateTEFantasy(te);
          return this.teArray;
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  public setLastSeasonDEF(): any {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'DEF').subscribe(
      data => {
        this.defArray = this.statsFunctionService.returnDEFStats(data.players);
        this.defArray = this.filterService.filterArray(this.defArray);
        this.defArray.forEach(def => {
          def.fantasy_points = calculateDEFFantasy(def);
          return this.defArray;
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  public setLastSeasonK(): any {
    this.httpService.get(APIURL.LASTSEASONSTATS + 'K').subscribe(
      data => {
        this.kArray = this.statsFunctionService.returnKickerStats(data.players);
        this.kArray = this.filterService.filterArray(this.kArray);
        this.kArray.forEach(k => {
          k.fantasy_points = calculateKickerFantasy(k);
          return this.kArray;
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
