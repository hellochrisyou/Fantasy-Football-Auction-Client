import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { HttpService } from 'src/app/core/service/http.service';
import { MY_AUCTION_COL_OBJ, MY_AUCTION_DISPLAY } from 'src/app/shared/const/column.const';
import { APIURL } from 'src/app/shared/const/url.const';
import { Team } from 'src/app/shared/interface/model.interface';

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
    private auth: AuthService
  ) { }
  ngOnInit(): void {
    this.httpService.post(APIURL.AUCTIONCALL + '/getAllMyLeagues/', this.auth.userData[0].email).subscribe((data) => {
      console.log('team data', data);
      this.teamArr = data;
    });
  }

}
