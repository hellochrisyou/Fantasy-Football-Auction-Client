import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { HttpService } from 'src/app/core/service/http.service';
import { MY_AUCTION_COL_OBJ, MY_AUCTION_DISPLAY } from 'src/app/shared/const/column.const';
import { APIURL } from 'src/app/shared/const/url.const';
import { Team } from 'src/app/shared/interface/model.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pending-auction',
  templateUrl: './pending-auction.component.html',
  styleUrls: ['./pending-auction.component.scss']
})
export class PendingAuctionComponent implements OnInit {

  teamArr: Team[] = [];
  MY_AUCTION_COL_OBJ = MY_AUCTION_COL_OBJ;
  MY_AUCTION_DISPLAY = MY_AUCTION_DISPLAY;

  constructor(
    private httpService: HttpService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.httpService.post(APIURL.AUCTIONCALL + '/getMyLeagues/', this.auth.userData[0].email).subscribe((leagueData) => {
      console.log('auction data: ', leagueData);
      this.teamArr = leagueData;
    });
  }

  public enterAuction(index: number) {
    console.log('routing', this.teamArr[index]);
    this.router.navigateByUrl('/live-auction', { state: { league: this.teamArr[index] } });
  }
}
