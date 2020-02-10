import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/service/http.service';
import { APIURL } from 'src/app/shared/const/url.const';
import { TOKENS } from 'src/app/shared/const/api-key';

@Component({
  selector: 'live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.scss']
})
export class LiveAuctionComponent implements OnInit {

  private readonly AUCTIONURL = APIURL.NFLAUCTIONPLAYERS;
  private readonly APIKEY = TOKENS.APIKEY;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get(this.AUCTIONURL + this.APIKEY).subscribe(data => {
      console.log('data from httpService GetNFLPlayers: ', data);
    });
  }

}
