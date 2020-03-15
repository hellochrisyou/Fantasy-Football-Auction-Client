import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { HttpService } from 'src/app/core/service/http.service';
import { PlayerStoreService } from 'src/app/core/service/store/player-store.service';
import { SnakeLeagueStoreService } from 'src/app/core/service/store/snake-league-store.service';
import { SnackbarComponent } from 'src/app/shared/component/snackbar/snackbar.component';
import { APIURL } from 'src/app/shared/const/url.const';
import { DraftDto } from 'src/app/shared/interface/dto.interface';
import { DEF, Kicker, QB, RB, SnakeLeague, TE, Team, WR } from 'src/app/shared/interface/model.interface';

@Component({
  selector: 'app-snake-draft',
  templateUrl: './snake-draft.component.html',
  styleUrls: ['./snake-draft.component.scss']
})
export class SnakeDraftComponent implements OnInit {

  numQb: number;
  numRb: number;
  numWr: number;
  numTe: number;
  numDef: number;
  numKicker: number;
  thisDraftDto: DraftDto = {};

  thisActiveLeague: SnakeLeague;
  thisSnakeTeam: Team;

  status: string;

  // readonly SNAKE_PLAYER_COL_OBJ = SNAKE_PLAYER_COL_OBJ;
  // readonly SNAKE_PLAYER_DISPLAY = SNAKE_PLAYER_DISPLAY;
  // readonly SNAKE_TEAM_COL_OBJ = SNAKE_TEAM_COL_OBJ;
  // readonly SNAKE_TEAM_DISPLAY = SNAKE_TEAM_DISPLAY;

  qbArray: QB[] = [];
  rbArray: RB[] = [];
  wrArray: WR[] = [];
  teArray: TE[] = [];
  defArray: DEF[] = [];
  kArray: Kicker[] = [];
  teamArr: Team[] = [];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    // private snakeSortService: SnakeSortService,
    private emitService: EmitService,
    private authService: AuthService,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private leagueStoreService: SnakeLeagueStoreService,
    public playerStoreService: PlayerStoreService,

  ) {
    this.route.data.subscribe((data: { snakeValues: any }) => {
      // this.snakeSortService.sortSnakePlayers(data.snakeValues);
      this.fetchThisLeague();
    });
  }


  ngOnInit(): void {
    console.log('here', history.state.league.leagueName);
    // this.leagueStoreService.snakeLeague = history.state.league;

    this.emitService.refreshLeagueOutput.subscribe(leagueData => {
      console.log('emit service league', leagueData);
      this.thisActiveLeague = leagueData;
    });
    this.emitService.refreshTeamOutput.subscribe(teamData => {
      console.log('emit service team', teamData);
      this.thisSnakeTeam = teamData;
    });

  }

  public fetchThisLeague() {
    this.httpService.post(APIURL.AUCTIONCALL + '/getThisLeague/', history.state.league.leagueName).subscribe(leagueData => {
      console.log('leagedata', leagueData);
      this.thisActiveLeague = leagueData;
      this.thisSnakeTeam = this.thisActiveLeague.snakeTeams.find(team => team.email === this.authService.authState.email);
      this.leagueStoreService.snakeLeague = leagueData;
      this.leagueStoreService.snakeTeamStore = this.thisSnakeTeam;
      this.numQb = this.playerStoreService.qbStore.length;
      this.numRb = this.playerStoreService.rbStore.length;
      this.numWr = this.playerStoreService.wrStore.length;
      this.numTe = this.playerStoreService.teStore.length;
      this.numDef = this.playerStoreService.defStore.length;
      this.numKicker = this.playerStoreService.kStore.length;
      console.log('qbstore', this.playerStoreService.qbStore);

      this.emitService.refreshTable();
    });
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    this.emitService.refreshTable();
  }

  public draftQbPlayer(index: number): void {
    this.thisDraftDto.leagueName = this.thisActiveLeague.leagueName;
    this.thisDraftDto.teamName = this.thisSnakeTeam.teamName;
    this.thisDraftDto.playerName = this.playerStoreService.qbStore[index].displayName;
    this.thisDraftDto.position = 'QB';
    this.thisDraftDto.team = this.playerStoreService.qbStore[index].team;
    this.httpService.post(APIURL.SNAKECALL + '/addPlayer/', this.thisDraftDto).subscribe(newLeague => {
      this.openSnackBar('You have drafted: ' + this.thisDraftDto.playerName, 'draft-player');
      console.log('newLeague', newLeague);
      this.leagueStoreService.snakeLeague = newLeague;
      this.playerStoreService.removeQb(this.playerStoreService.qbStore[index].displayName);
      this.fetchThisLeague();
      this.emitService.refreshTable();
      this.moveToSelectedTab('Lobby');
    });
  }

  public draftRbPlayer(index: number): void {

  }

  public draftWrPlayer(index: number): void {

  }

  public draftTePlayer(index: number): void {

  }

  public draftDefPlayer(index: number): void {

  }

  public draftKPlayer(index: number): void {

  }

  public openSnackBar(message: string, panelClass: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 10000
    });
  }

  public moveToSelectedTab(tabName: string) {
    for (let i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
      if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
        (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
      }
    }
  }
}