import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { HttpService } from 'src/app/core/service/http.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { APIURL } from 'src/app/shared/const/url.const';
import { TeamDto } from 'src/app/shared/interface/dto.interface';
import { AuctionLeague, Team } from 'src/app/shared/interface/model.interface';

@Component({
  selector: 'auction-lobby',
  templateUrl: './auction-lobby.component.html',
  styleUrls: ['./auction-lobby.component.scss']
})
export class AuctionLobbyComponent extends CreateBaseForm implements OnInit {

  leagueIsReady: string;
  thisTeam: Team;
  thisDtoTeam: TeamDto = {};

  @Input()
  public get auctionLeague(): AuctionLeague {
    return this._auctionLeague;
  }
  public set auctionLeague(auctionLeague: AuctionLeague) {
    this._auctionLeague = auctionLeague;
  }
  public _auctionLeague: AuctionLeague;

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    private auth: AuthService,
    private httpService: HttpService,
  ) {
    super(fb, changeDetectorRef);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.formGroup = this.fb.group({
      readyCtrl: ['',]
    });

    console.log('1', this._auctionLeague.auctionTeams);
    this.leagueIsReady = this._auctionLeague.status;
    for (const team of this._auctionLeague.auctionTeams) {
      if (team.email === this.auth.authState.email) {
        this.thisTeam = team;
      }
    }
    console.log('2', this.thisTeam);
    if (this.leagueIsReady === 'Yes') {

    }
  }
  public clickReady(): void {
    this.thisDtoTeam.isReady = this.thisTeam.isReady;
    this.thisDtoTeam.teamName = this.thisTeam.teamName;
    this.thisDtoTeam.leagueName = this._auctionLeague.leagueName;
    console.log('this.thisdtoteam', this.thisDtoTeam);
    if (this.formGroup.get('readyCtrl').value === true) {
      this.thisTeam.isReady = 'No';
      this.thisDtoTeam.isReady = this.thisTeam.isReady
      this.httpService.post(APIURL.AUCTIONCALL + '/postReady/', this.thisDtoTeam).subscribe((data) => {
        if (data === true) {
          this.leagueIsReady = 'Yes'
        }
      });
    } else {
      this.thisTeam.isReady = 'Yes';
      this.thisDtoTeam.isReady = this.thisTeam.isReady
      this.httpService.post(APIURL.AUCTIONCALL + '/postReady/', this.thisDtoTeam).subscribe((data) => {
        if (data === true) {
          this.leagueIsReady = 'Yes'
        }
      });
    }
    // transaction to make ready. update leagueStatus to ready as well. return League from this service. and if league is ready run another call to begin auction (goauction/init/) 
    // In html show table of whose turn it is. Need to send event emitter and use input for button to add player is available.
    // Need to show table of whose the current player and what his bid is. and show button to bid or not to bid.  
    // logic for bidding or not bidding (service) needs to evaluate if everyone has made a decision or not.  create field for "madeBid" for Team. make a function in eclipse to finalize bid and move to next player w/ transaction.
  }
}
