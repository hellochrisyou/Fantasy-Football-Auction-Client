import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmitService } from 'src/app/core/service/emit.service';

import {
  DEF_COL_OBJ,
  DEF_DISPLAY,
  K_COL_OBJ,
  K_DISPLAY,
  QB_COL_OBJ,
  QB_DISPLAY,
  RB_COL_OBJ,
  RB_DISPLAY,
  RECEIVING_COL_OBJ,
  RECEIVING_DISPLAY,
} from '../../const/column.const';
import { DEF, Kicker, Player, QB, RB, TE, Team, WR } from '../../interface/model.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {

  columnDisplay = '';

  dataSource: MatTableDataSource<QB | RB | WR | TE | DEF | Kicker | Player | Team>;
  index: number;

  // tslint:disable-next-line: variable-name
  public columnIds: string[] = [];
  // tslint:disable-next-line: variable-name
  public columnObjects: any[];
  // tslint:disable-next-line: variable-name
  private _dataArray: any[];
  // tslint:disable-next-line: variable-name
  private _dataType: string;


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
  public get dataType(): string {
    return this._dataType;
  }
  public set dataType(value: string) {
    this._dataType = value;
    switch (value) {
      case 'QB':
        this.columnIds = QB_DISPLAY;
        this.columnObjects = QB_COL_OBJ;
        break;
      case 'RB':
        this.columnIds = RB_DISPLAY;
        this.columnObjects = RB_COL_OBJ;
        break;
      case 'WR':
        this.columnIds = RECEIVING_DISPLAY;
        this.columnObjects = RECEIVING_COL_OBJ;
        break;
      case 'TE':
        this.columnIds = RECEIVING_DISPLAY;
        this.columnObjects = RECEIVING_COL_OBJ;
        break;
      case 'DEF':
        this.columnIds = DEF_DISPLAY;
        this.columnObjects = DEF_COL_OBJ;
        break;
      case 'K':
        this.columnIds = K_DISPLAY;
        this.columnObjects = K_COL_OBJ;
        break;
    }
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
