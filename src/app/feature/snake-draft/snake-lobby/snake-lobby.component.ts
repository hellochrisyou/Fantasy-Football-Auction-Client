import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TeamDto } from 'src/app/shared/interface/dto.interface';
import { SnakeLeague, Team } from 'src/app/shared/interface/model.interface';
import { MatDialog } from '@angular/material';
import { EmitService } from 'src/app/core/service/emit.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'snake-lobby',
  templateUrl: './snake-lobby.component.html',
  styleUrls: ['./snake-lobby.component.scss']
})
export class SnakeLobbyComponent implements OnInit {

  isLeagueReady = false;
  thisDtoTeam: TeamDto = {};
  snakeLeague: SnakeLeague;

  // tslint:disable-next-line: variable-name
  private _thisActiveLeague: SnakeLeague;
  // tslint:disable-next-line: variable-name
  private _thisSnakeTeam: Team;


  @Input()
  public get thisSnakeTeam(): Team {
    return this._thisSnakeTeam;
  }
  public set thisSnakeTeam(value: Team) {
    this._thisSnakeTeam = value;
  }
  @Input()
  public get thisActiveLeague(): SnakeLeague {
    return this._thisActiveLeague;
  }
  public set thisActiveLeague(value: SnakeLeague) {
    this._thisActiveLeague = value;
  }
  constructor(
    public dialog: MatDialog,
    private emitService: EmitService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.emitService.refreshLeagueOutput.subscribe(teamsData => {
      console.log('emit service league', teamsData);
      this.thisActiveLeague = teamsData;
      this.changeDetector.markForCheck();
    });
    // transaction to make ready. update leagueStatus to ready as well. return League from this service. and if league is ready run another call to begin snake (gosnake/init/) 
    // In html show table of whose turn it is. Need to send event emitter and use input for button to add player is available.
    // Need to show table of whose the current player and what his bid is. and show button to bid or not to bid.  
    // logic for bidding or not bidding (service) needs to evaluate if everyone has made a decision or not.  create field for "madeBid" for Team. make a function in eclipse to finalize bid and move to next player w/ transaction.
  }
}
