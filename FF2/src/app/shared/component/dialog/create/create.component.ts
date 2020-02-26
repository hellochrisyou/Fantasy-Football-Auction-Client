import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/core/service/http.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { APIURL } from 'src/app/shared/const/url.const';
import { CreateAuctionDto, CreateSnakeDto } from 'src/app/shared/interface/dto.interface';
import { AuctionLeague, Team, SnakeLeague } from 'src/app/shared/interface/model.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends CreateBaseForm implements OnInit, AfterViewInit {

  auctionDto: CreateAuctionDto;
  snakeDto: CreateSnakeDto;
  thisTeam: Team;
  leagueName: string;
  constructor(
    protected fb: FormBuilder,
    private changeDetectorRefs: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private httpService: HttpService,
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AuctionLeague | SnakeLeague,
  ) {
    super(fb, changeDetectorRefs);
  }


  ngOnInit(): void {
    super.ngOnInit();
    this.dialogRef.updateSize('250px');
    this.formGroup = this.fb.group({
      teamNameCtrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
    });
  }

  ngAfterViewInit(): void {
    this.leagueName = this.data.LeagueName;
    console.log('dialog', this.data.LeagueName);
    this.changeDetectorRefs.detectChanges();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public submit() {
    // tslint:disable-next-line: max-line-length
    this.httpService.get(APIURL.BACKENDCALL + '/team/teamNameExists/' + `${this.formGroup.get('teamNameCtrl').value}`).subscribe((nameExists) => {
      console.log('data here', nameExists);
      if (nameExists === true) {
        this.snackBar.open('Name already exists', 'FAIL', {});
      } else {
        this.data.teams.push(this.thisTeam);
        if (this.data.teams === null) {
          this.data.teams = [];
        }
        // Create Auction Team
        if (this.data.LeagueType === 'Auction') {
          this.auctionDto = {
            LeagueName: this.data.LeagueName,
            TeamName: this.formGroup.get('teamNameCtrl').value,
            // Figure out how to explicitly assign dynamic value for total budget
            // TotalBudget: this.data.TotalBudget,
            PPR: this.data.PPR,
            MaxPlayers: this.data.MaxPlayers,
          };
          this.httpService.post(APIURL.AUCTIONCALL + '/team/createTeam/', this.auctionDto).subscribe((data) => {
            console.log('create team data:', data);
          });
        } else {
          // Create Snake Team
          this.snakeDto = {
            LeagueName: this.data.LeagueName,
            TeamName: this.formGroup.get('teamNameCtrl').value,
            PPR: this.data.PPR,
            MaxPlayers: this.data.MaxPlayers,
          };
          this.httpService.post(APIURL.SNAKECALL + '/team/createTeam/', this.snakeDto).subscribe((data) => {
          });
        }
        this.thisTeam = {
          LeagueName: this.data.LeagueName,
          Name: this.formGroup.get('teamNameCtrl').value,
          LeagueType: this.data.LeagueType,
          PPR: this.data.PPR
        };
        this.snackBar.open('You have joined: ' + `${this.formGroup.get('teamNameCtrl').value}`, 'SUCCESS', {});
      }
    });
  }
}
