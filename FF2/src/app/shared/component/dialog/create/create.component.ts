import { ChangeDetectorRef, Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { League, Team } from 'src/app/shared/interface/model.interface';
import { HttpService } from 'src/app/core/service/http.service';
import { APIURL } from 'src/app/shared/const/url.const';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends CreateBaseForm implements OnInit, AfterViewInit {

  thisTeam: Team;
  leagueName: string;
  constructor(
    protected fb: FormBuilder,
    private changeDetectorRefs: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private httpService: HttpService,
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: League,
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
    this.leagueName = this.data.name;
    console.log('dialog', this.data.name);
    this.changeDetectorRefs.detectChanges();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public submit() {
    // tslint:disable-next-line: max-line-length
    this.httpService.get(APIURL.BACKENDCALL + '/team/teamNameExist/' + `${this.formGroup.get('teamNameCtrl').value}`).subscribe((nameExist) => {
      console.log('data here', nameExist);
      if (nameExist === true) {
        this.snackBar.open('Name already exists', 'FAIL', {});
      } else {
        this.thisTeam = {
          name: this.formGroup.get('teamNameCtrl').value,
          draftPosition: this.data.teamCount,
          currentBudget: this.data.totalBudget
        };
        if (this.data.teams === null) {
          this.data.teams = [];
        }
        this.data.teams.push(this.thisTeam);
        this.httpService.post(APIURL.BACKENDCALL + '/team/createTeam/', this.data).subscribe((data) => {
          console.log('create team data:', data);
        });
      }
    });
  }
}

