// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { DEF, Kicker, QB, RB, TE, WR } from 'src/app/shared/interface/model.interface';

// import { APIURL } from '../../shared/const/url.const';
// import {
//   CALCULATE_DEFENSE_POINTS,
//   CALCULATE_KICKER_POINTS,
//   CALCULATE_QB_POINTS,
//   CALCULATE_RB_POINTS,
//   CALCULATE_RECEIVER_POINTS,
// } from '../util/calculate-stats.util';
// import { EmitService } from './emit.service';
// import { NotifyService } from './emit/notify.service';
// import { FilterPlayersService } from './filter-players.service';
// import { HttpService } from './http.service';
// import { StatsService } from './stats.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class LastSeasonStatService {

//   qbArray: QB[] = [];
//   rbArray: RB[] = [];
//   wrArray: WR[] = [];
//   teArray: TE[] = [];
//   defArray: DEF[] = [];
//   kArray: Kicker[] = [];

//   constructor(
//     public http: HttpClient,
//     public statsFunctionService: StatsService,
//     public httpService: HttpService,
//     public filterService: FilterPlayersService,
//     public notifyService: NotifyService,
//     private emitService: EmitService
//   ) {
//   }

//   public setLastSeasonQB(): any {
//     this.httpService.get(APIURL.LASTSEASONSTATS + 'QB').subscribe(
//       data => {
//         this.qbArray = this.statsFunctionService.returnQbStats(data.players);
//         // this.qbArray = this.filterService.filterArray(this.qbArray);
//         this.emitService.mergeQb(this.qbArray);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   public setLastSeasonRB(): any {
//     this.httpService.get(APIURL.LASTSEASONSTATS + 'RB').subscribe(
//       data => {
//         this.rbArray = this.statsFunctionService.returnRbStats(data.players);
//         // this.rbArray = this.filterService.filterArray(this.rbArray);
//         this.emitService.mergeRb(this.rbArray);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   public setLastSeasonWR(): any {
//     this.httpService.get(APIURL.LASTSEASONSTATS + 'WR').subscribe(
//       data => {
//         this.wrArray = this.statsFunctionService.returnWrStats(data.players);
//         // this.wrArray = this.filterService.filterArray(this.wrArray);
//         this.emitService.mergeWr(this.wrArray);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   public setLastSeasonTE(): any {
//     this.httpService.get(APIURL.LASTSEASONSTATS + 'TE').subscribe(
//       data => {
//         this.teArray = this.statsFunctionService.returnTeStats(data.players);
//         // this.teArray = this.filterService.filterArray(this.teArray);
//         this.emitService.mergeTe(this.teArray);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   public setLastSeasonDEF(): any {
//     this.httpService.get(APIURL.LASTSEASONSTATS + 'DEF').subscribe(
//       data => {
//         this.defArray = this.statsFunctionService.returnDEFStats(data.players);
//         // this.defArray = this.filterService.filterArray(this.defArray);
//         this.emitService.mergeDef(this.defArray);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   public setLastSeasonK(): any {
//     this.httpService.get(APIURL.LASTSEASONSTATS + 'K').subscribe(
//       data => {
//         this.kArray = this.statsFunctionService.returnKickerStats(data.players);
//         // this.kArray = this.filterService.filterArray(this.kArray);
//         this.emitService.mergeKicker(this.kArray);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
// }
