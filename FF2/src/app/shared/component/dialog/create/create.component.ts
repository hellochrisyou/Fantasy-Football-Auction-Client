import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/core/service/auth.service';
import { HttpService } from 'src/app/core/service/http.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { APIURL } from 'src/app/shared/const/url.const';
import { CreateTeamDto } from 'src/app/shared/interface/dto.interface';
import { AuctionLeague, SnakeLeague } from 'src/app/shared/interface/model.interface';

import { SnackbarComponent } from '../../snackbar/snackbar.component';

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
    private auth: AuthService,
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
    this.httpService.get(APIURL.AUCTIONCALL + `/team/teamNameExists/' ${this.formGroup.get('teamNameCtrl').value}`).subscribe((nameExists) => {
      console.log('data here', nameExists);
      if (nameExists === true) {
        this.snackBar.open('Name already exists', 'FAIL', {});
      } else {
        console.log('email', this.auth.userData[0].email);
        let positionVal = String(1);
        if (this.data.auctionTeams) {
          positionVal = String(this.data.auctionTeams.length + 1);
        }
        // Create Auction Team
        if (this.data.leagueType === 'Auction') {
          this.auctionDto = {
            leagueName: this.data.leagueName,
            teamName: this.formGroup.get('teamNameCtrl').value,
            budget: this.data.budget,
            photoUrl: this.auth.userData[0].photoURL,
            leagueType: 'Auction',
            draftPosition: positionVal,
            ppr: this.data.ppr,
            maxPlayers: this.data.maxPlayers,
            email: this.auth.userData[0].email
          };
          // NEED TO GET EMAIL AND SET IT ABOVE
          this.httpService.post(APIURL.AUCTIONCALL + '/team/createTeam/', this.auctionDto).subscribe((data) => {
            this.openSnackBar('Created Team', 'Create-Team');
            console.log('hell1');
            this.dialogRef.close();
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
      }
    });
  }
  public openSnackBar(message: string, panelClass: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 10000
    });
  }
}
