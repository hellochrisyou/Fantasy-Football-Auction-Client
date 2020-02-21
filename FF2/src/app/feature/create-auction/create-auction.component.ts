import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { User, League } from 'src/app/shared/interface/model.interface';
import { URL_VALIDATOR } from 'src/app/shared/validator/validator';
import { HttpService } from 'src/app/core/service/http.service';
import { APIURL } from 'src/app/shared/const/url.const';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.scss']
})
export class CreateAuctionComponent extends CreateBaseForm {

  typeOfDraft = 'Snake';
  thisLeague: League = {};

  public user: User = {};

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected auth: AuthService,
    private af: AngularFireAuth,
    private snackBar: MatSnackBar,
    private httpService: HttpService,
    private router: Router
  ) {
    super(fb, changeDetectorRef);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnInit(): void {
    super.ngOnInit();

    this.formGroup = this.fb.group({
      leagueNameCtrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      budgetCtrl: ['', [
        Validators.required
      ]],
      maxPlayerCtrl: ['', [
        Validators.required
      ]],
      pprCtrl: ['', [
        Validators.required
      ]],
      typeCtrl: ['', [
        Validators.required
      ]],
    });


    this.formGroup.get('pprCtrl').setValue(true);
    this.formGroup.get('typeCtrl').setValue(true);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }
  public toggleTypeOfDraft() {
    if (this.formGroup.get('typeCtrl').value === true) {
      this.typeOfDraft = 'Auction';
    } else {
      this.typeOfDraft = 'Snake';
    }
  }
  public submit(value: any): void {
    console.log('thischecked', this.formGroup.get('pprCtrl').value);
    this.thisLeague.Name = this.formGroup.get('leagueNameCtrl').value;
    this.thisLeague.PPR = this.formGroup.get('pprCtrl').value;
    this.thisLeague.TeamCount = '0';
    this.thisLeague.TotalBudget = this.formGroup.get('budgetCtrl').value;
    this.thisLeague.MaxPlayers = this.formGroup.get('maxPlayerCtrl').value;
    if (this.formGroup.get('typeCtrl').value === true) {
      this.thisLeague.Type = 'Snake';
    } else {
      this.thisLeague.Type = 'Auction';
    }
    this.snackBar.open('Profile Update', 'SUCCESS', {});
    this.httpService.post(APIURL.BACKENDCALL + '/createLeague/', this.thisLeague).subscribe(x =>
      console.log('data:', x)
    );
    // this.router.navigateByUrl('/home');
  }
}