import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/service/http.service';
import { APIURL } from 'src/app/shared/const/url.const';
import { AuthService } from 'src/app/core/service/auth.service';
import { Team } from 'src/app/shared/interface/model.interface';
import { MY_TEAM_COL_OBJ, MY_TEAM_DISPLAY } from 'src/app/shared/const/column.const';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {

  constructor(

  ) { }
  ngOnInit(): void {

  }
}
