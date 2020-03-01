import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { CreateTeamDto } from '../../interface/dto.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheetRef, MatSnackBar, MatDialogRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { AuthService } from 'src/app/core/service/auth.service';
import { HttpService } from 'src/app/core/service/http.service';
import { CreateComponent } from '../dialog/create/create.component';
import { APIURL } from '../../const/url.const';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { CreateBaseForm } from '../../base/base-form';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent extends CreateBaseForm implements OnInit {

  auctionDto: CreateTeamDto;
  // snakeDto: CreateSnakeDto;
  leagueName: string;
  constructor(
    protected fb: FormBuilder,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private auth: AuthService,
    private changeDetectorRefs: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private httpService: HttpService,

    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
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
        console.log('email', this.auth.userData[0].email);
        // Create Auction Team
        if (this.data.leagueType === 'Auction') {
          this.auctionDto = {
            leagueName: this.data.leagueName,
            teamName: this.formGroup.get('teamNameCtrl').value,
            budget: this.data.budget,
            ppr: this.data.ppr,
            maxPlayers: this.data.maxPlayers,
            email: this.auth.userData[0].email
          };
          // NEED TO GET EMAIL AND SET IT ABOVE
          this.httpService.post(APIURL.AUCTIONCALL + '/team/createTeam/', this.auctionDto).subscribe((data) => {
            this.bottomSheetRef.dismiss();
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
