import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmitService } from 'src/app/core/service/emit.service';

import { expandRowTransition } from '../../animation/animation';
import { League, Team } from '../../interface/model.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [expandRowTransition]
})
export class TableComponent implements OnInit, OnDestroy {

  @Input()
  public get columnObjects() {
    return this._columnObjects;
  }
  public set columnObjects(colObjArr: any[]) {
    if (colObjArr) {
      this.columnIds = colObjArr.map(c => c.columnId);
    }
    this._columnObjects = colObjArr;
  }

  @Input()
  public get dataArray(): any[] {
    return this._dataArray;
  }
  public set dataArray(value: any[]) {
    this._dataArray = value;
  }

  @Input()
  public get colDisplay(): string {
    return this._colDisplay;
  }
  public set colDisplay(value: string) {
    this._colDisplay = value;
  }
  constructor(
    public dialog: MatDialog,
    private emitService: EmitService,
  ) {
  }

  expandRow: League | Team | any;
  dataSource: MatTableDataSource<any>;
  index: number;

  // tslint:disable-next-line: variable-name
  public columnIds: string[] = [];
  // tslint:disable-next-line: variable-name
  public _columnObjects: any[];
  // tslint:disable-next-line: variable-name
  private _dataArray: any[];
  // tslint:disable-next-line: variable-name
  private _colDisplay: string;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  return;

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
    if (value >= 1) {
      return '#4bb543';

    } else if (value < 1) {
      return '#dd0031';
    } else {
      return;
    }
  }
}
