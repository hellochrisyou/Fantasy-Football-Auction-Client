import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { QB_DISPLAY, RB_DISPLAY, RECEIVING_DISPLAY, DEF_DISPLAY, K_DISPLAY, TEAM_DISPLAY, PLAYER_DISPLAY } from '../../const/column.const';
import { QB, RB, WR, TE, DEF, Player, Team, Kicker } from '../../interface/model.interface';
import { EmitService } from 'src/app/core/service/emit.service';
import { ErrorDialogComponent } from '../dialog/error/error.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {

  columnDisplay = '';
  qbColumns = QB_DISPLAY;
  rbColumns = RB_DISPLAY;
  receivingColumns = RECEIVING_DISPLAY;
  defenseColumns = DEF_DISPLAY;
  kickerColumns = K_DISPLAY;
  teamColumns = TEAM_DISPLAY;
  playerColumns = PLAYER_DISPLAY;

  dataSource: MatTableDataSource<QB | RB | WR | TE | DEF | Kicker | Player | Team>;
  index: number;

  // tslint:disable-next-line: variable-name
  private _columnIds: string[] = [];
  // tslint:disable-next-line: variable-name
  private _columnObjects: any[];
  // tslint:disable-next-line: variable-name
  private _dataArray: any[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input()
  public get dataArray(): any[] {
    return this._dataArray;
  }
  public set dataArray(value: any[]) {
    this._dataArray = value;
  }

  @Input()
  public get columnIds(): any[] {
    return this._columnIds;
  }
  public set columnIds(colObjArr: any[]) {
    if (colObjArr) {
      this._columnIds = colObjArr.map(c => c.columnId);
    }
  }

  @Input()
  public get columnObjects() {
    return this._columnObjects;
  }
  public set columnObjects(colObjArr: any[]) {
    this._columnObjects = colObjArr;
  }

  constructor(
    public dialog: MatDialog,
    private emitService: EmitService,
  ) {
  }

  public ngOnInit() {
    this.emitService.refreshOutput.subscribe(x => {
      this.refresh();
    });
  }

  public ngOnDestroy() {
    this.emitService.refreshOutput.unsubscribe();
  }

  public refresh(): void {
    this.dataSource = new MatTableDataSource<any>(this.dataArray);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public select(value: number): void {

  }

  // SORTING
  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public setDataColor(value: number | string) {
    if (typeof value !== 'string') {
      if (value > 0) {
        return '#4bb543';
      } else {
        return '#dd0031';
      }
    }
    return;
  }
}
