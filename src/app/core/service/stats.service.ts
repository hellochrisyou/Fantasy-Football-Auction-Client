import { Injectable } from '@angular/core';
import { QB, RB, WR, TE, DEF, Kicker } from 'src/app/shared/interface/model.interface';
import { CALCULATE_QB_POINTS, CALCULATE_RB_POINTS, CALCULATE_KICKER_POINTS, CALCULATE_DEFENSE_POINTS, CALCULATE_RECEIVER_POINTS } from '../util/calculate-stats.util';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  tmpQb: QB;
  tmpRb: RB;
  tmpWr: WR;
  tmpTe: TE;
  tmpDef: DEF;
  tmpKicker: Kicker;
  tmpQbArray: QB[] = [];
  tmpRbArray: RB[] = [];
  tmpWrArray: WR[] = [];
  tmpTeArray: TE[] = [];
  tmpDefArray: DEF[] = [];
  tmpKArray: Kicker[] = [];
  constructor() { }

  public returnQbStats(qbArray: any[]): QB[] {
    for (const qb of qbArray) {
      this.tmpQb = {
        Select: 'Select',
      };
      this.tmpQb.displayName = qb.name;
      qb.stats['5'] != null ? (this.tmpQb.PassYD = qb.stats['5']) : (this.tmpQb.PassYD = 0);
      qb.stats['6'] != null ? (this.tmpQb.PassTD = qb.stats['6']) : (this.tmpQb.PassTD = 0);
      qb.stats['7'] != null ? (this.tmpQb.INT = qb.stats['7']) : (this.tmpQb.INT = 0);
      qb.stats['8'] != null ? (this.tmpQb.Sack = qb.stats['8']) : (this.tmpQb.Sack = 0);
      qb.stats['14'] != null ? (this.tmpQb.RushYD = qb.stats['14']) : (this.tmpQb.RushYD = 0);
      qb.stats['15'] != null ? (this.tmpQb.RushTD = qb.stats['15']) : (this.tmpQb.RushTD = 0);
      qb.stats['31'] != null ? (this.tmpQb.Fumble = qb.stats['31']) : (this.tmpQb.Fumble = 0);
      this.tmpQb.Points = CALCULATE_QB_POINTS(this.tmpQb);
      this.tmpQbArray.push(this.tmpQb);
    }
    return this.tmpQbArray;
  }

  public returnRbStats(rbArray: any[]): RB[] {
    for (const rb of rbArray) {
      this.tmpRb = {
        Select: 'Select'
      };
      this.tmpRb.displayName = rb.name;
      rb.stats['14'] != null ? (this.tmpRb.RushYD = rb.stats['14']) : (this.tmpRb.RushYD = 0);
      rb.stats['15'] != null ? (this.tmpRb.RushTD = rb.stats['15']) : (this.tmpRb.RushTD = 0);
      rb.stats['20'] != null ? (this.tmpRb.Rec = rb.stats['20']) : (this.tmpRb.Rec = 0);
      rb.stats['21'] != null ? (this.tmpRb.RecYD = rb.stats['21']) : (this.tmpRb.RecYD = 0);
      rb.stats['22'] != null ? (this.tmpRb.RecTD = rb.stats['22']) : (this.tmpRb.RecTD = 0);
      rb.stats['31'] != null ? (this.tmpRb.Fumble = rb.stats['31']) : (this.tmpRb.Fumble = 0);
      this.tmpRb.Points = CALCULATE_RB_POINTS(this.tmpRb);
      this.tmpRbArray.push(this.tmpRb);
    }
    return this.tmpRbArray;
  }

  public returnWrStats(wrArray: any[]): WR[] {
    for (const wr of wrArray) {
      this.tmpWr = {
        Select: 'Select'
      };
      this.tmpWr.displayName = wr.name;
      wr.stats['20'] != null ? (this.tmpWr.Rec = wr.stats['20']) : (this.tmpWr.Rec = 0);
      wr.stats['21'] != null ? (this.tmpWr.RecYD = wr.stats['21']) : (this.tmpWr.RecYD = 0);
      wr.stats['22'] != null ? (this.tmpWr.RecTD = wr.stats['22']) : (this.tmpWr.RecTD = 0);
      this.tmpWr.Points = CALCULATE_RECEIVER_POINTS(this.tmpWr);
      this.tmpWrArray.push(this.tmpWr);
    }
    return this.tmpWrArray;
  }

  public returnTeStats(teArray: any[]): TE[] {
    for (const te of teArray) {
      this.tmpTe = {
        Select: 'Select'
      };
      this.tmpTe.displayName = te.name;
      te.stats['20'] != null ? (this.tmpTe.Rec = te.stats['20']) : (this.tmpTe.Rec = 0);
      te.stats['21'] != null ? (this.tmpTe.RecYD = te.stats['21']) : (this.tmpTe.RecYD = 0);
      te.stats['22'] != null ? (this.tmpTe.RecTD = te.stats['22']) : (this.tmpTe.RecTD = 0);
      this.tmpTe.Points = CALCULATE_RECEIVER_POINTS(this.tmpTe);
      this.tmpTeArray.push(this.tmpTe);
    }
    return this.tmpTeArray;
  }

  public returnDEFStats(defArray: any[]): DEF[] {
    for (const def of defArray) {
      this.tmpDef = {
        Select: 'Select'
      };
      this.tmpDef.displayName = def.name;
      def.stats['45'] != null ? (this.tmpDef.Sack = def.stats['45']) : (this.tmpDef.Sack = 0);
      def.stats['46'] != null ? (this.tmpDef.INT = def.stats['46']) : (this.tmpDef.INT = 0);
      def.stats['47'] != null ? (this.tmpDef.FumbleRec = def.stats['47']) : (this.tmpDef.FumbleRec = 0);
      def.stats['49'] != null ? (this.tmpDef.Safety = def.stats['49']) : (this.tmpDef.Safety = 0);
      def.stats['50'] != null ? (this.tmpDef.TD = def.stats['50']) : (this.tmpDef.TD = 0);
      def.stats['54'] != null ? (this.tmpDef.PointsAllowed = def.stats['54']) : (this.tmpDef.PointsAllowed = 0);
      this.tmpDef.Points = CALCULATE_DEFENSE_POINTS(this.tmpDef);
      this.tmpDefArray.push(this.tmpDef);
    }
    return this.tmpDefArray;
  }

  returnKickerStats(kArray: any[]): Kicker[] {
    for (const kicker of kArray) {
      this.tmpKicker = {
        Select: 'Select'
      };
      this.tmpKicker.displayName = kicker.name;
      kicker.stats['33'] != null ? (this.tmpKicker.PAT = kicker.stats['33']) : (this.tmpKicker.PAT = 0);
      kicker.stats['35'] != null ? (this.tmpKicker.Fg0To19 = kicker.stats['35']) : (this.tmpKicker.Fg0To19 = 0);
      kicker.stats['36'] != null ? (this.tmpKicker.Fg20To29 = kicker.stats['36']) : (this.tmpKicker.Fg20To29 = 0);
      kicker.stats['37'] != null ? (this.tmpKicker.Fg30To39 = kicker.stats['37']) : (this.tmpKicker.Fg30To39 = 0);
      kicker.stats['38'] != null ? (this.tmpKicker.Fg40To49 = kicker.stats['38']) : (this.tmpKicker.Fg40To49 = 0);
      kicker.stats['39'] != null ? (this.tmpKicker.Fg50Plus = kicker.stats['39']) : (this.tmpKicker.Fg50Plus = 0);
      this.tmpKicker.Points = CALCULATE_KICKER_POINTS(this.tmpKicker);
      this.tmpKArray.push(this.tmpKicker);
    }
    return this.tmpKArray;
  }
}
