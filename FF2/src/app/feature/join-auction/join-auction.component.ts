import { Component, OnInit, AfterViewInit } from '@angular/core';
import { League } from 'src/app/shared/interface/model.interface';
import { LEAGUE_COL_OBJ, LEAGUE_DISPLAY } from 'src/app/shared/const/column.const';
import { ActivatedRoute } from '@angular/router';
import { EmitService } from 'src/app/core/service/emit.service';
import { HttpService } from 'src/app/core/service/http.service';
import { APIURL } from 'src/app/shared/const/url.const';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'join-auction',
  templateUrl: './join-auction.component.html',
  styleUrls: ['./join-auction.component.scss']
})
export class JoinAuctionComponent implements OnInit {

  LEAGUE_COL_OBJ = LEAGUE_COL_OBJ;
  LEAGUE_DISPLAY = LEAGUE_DISPLAY;
  leagueArr: League[] = [];
  constructor(
    private emitService: EmitService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.get(APIURL.BACKENDCALL + '/getAllLeagues/').subscribe((data) => {
      console.log('data here', data);
      this.leagueArr = data;
      this.emitService.refreshTable();
    });
  }
  addLeague(index: number) {

  }
}