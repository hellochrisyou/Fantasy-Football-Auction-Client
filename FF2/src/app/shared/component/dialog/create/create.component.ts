import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/core/service/http.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { APIURL } from 'src/app/shared/const/url.const';
import { CreateLeagueDto, CreateTeamDto } from 'src/app/shared/interface/dto.interface';
import { AuctionLeague, Team, SnakeLeague } from 'src/app/shared/interface/model.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends CreateBaseForm implements OnInit, AfterViewInit {

  auctionDto: CreateTeamDto;
  // snakeDto: CreateSnakeDto;
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
    this.leagueName = this.data.leagueName;
    console.log('dialog', this.data.leagueName);
    this.changeDetectorRefs.detectChanges();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public submit() {
    console.log('hello');
    // tslint:disable-next-line: max-line-length
    this.httpService.get(APIURL.AUCTIONCALL + '/team/teamNameExists/' + `${this.formGroup.get('teamNameCtrl').value}`).subscribe((nameExists) => {
      console.log('data here', nameExists);
      if (nameExists === true) {
        this.snackBar.open('Name already exists', 'FAIL', {});
      } else {
        console.log('data', this.data);        
        // Create Auction Team
        if (this.data.leagueType === 'Auction') {
          this.auctionDto = {
            leagueName: this.data.leagueName,
            teamName: this.formGroup.get('teamNameCtrl').value,
            budget: this.data.budget,
            ppr: this.data.ppr,
            maxPlayers: this.data.maxPlayers,
          };
          // NEED TO GET EMAIL AND SET IT ABOVE
          this.httpService.post(APIURL.AUCTIONCALL + '/team/createTeam/', this.auctionDto).subscribe((data) => {
            console.log('create team data:', data);
          });
        } else {
          // Create Snake Team
          // this.snakeDto = {
          //   LeagueName: this.data.LeagueName,
          //   TeamName: this.formGroup.get('teamNameCtrl').value,
          //   PPR: this.data.PPR,
          //   MaxPlayers: this.data.MaxPlayers,
          // };
          // this.httpService.post(APIURL.SNAKECALL + '/team/createTeam/', this.snakeDto).subscribe((data) => {
          // });
        }
        this.snackBar.open('You have joined: ' + `${this.formGroup.get('teamNameCtrl').value}`, 'SUCCESS', {});
      }
    });
  }
}
