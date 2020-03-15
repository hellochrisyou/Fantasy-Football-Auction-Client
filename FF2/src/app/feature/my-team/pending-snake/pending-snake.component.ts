import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/interface/model.interface';
import { SNAKE_COL_OBJ, SNAKE_DISPLAY } from 'src/app/shared/const/column.const';
import { HttpService } from 'src/app/core/service/http.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { APIURL } from 'src/app/shared/const/url.const';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pending-snake',
  templateUrl: './pending-snake.component.html',
  styleUrls: ['./pending-snake.component.scss']
})
export class PendingSnakeComponent implements OnInit {

  teamArr: Team[] = [];
  SNAKE_COL_OBJ = SNAKE_COL_OBJ;
  SNAKE_DISPLAY = SNAKE_DISPLAY;

  constructor(
    private httpService: HttpService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.httpService.post(APIURL.SNAKECALL + '/getMyLeagues/', this.auth.userData[0].email).subscribe((leagueData) => {
      this.teamArr = leagueData;
      console.log('snake data: ', this.teamArr);
    });
  }

  public enterSnake(index: number) {
    console.log('routing', this.teamArr[index]);
    this.router.navigateByUrl('/snake-draft', { state: { league: this.teamArr[index] } });
  }
}
