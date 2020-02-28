import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { HttpService } from 'src/app/core/service/http.service';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { APIURL } from 'src/app/shared/const/url.const';
import { AuctionLeague, User } from 'src/app/shared/interface/model.interface';
import { CreateAuctionDto } from 'src/app/shared/interface/dto.interface';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss']
})
export class CreateLeagueComponent extends CreateBaseForm {

  typeOfDraft = 'Snake';
  ppr = 'PPR';
  thisLeague: AuctionLeague = {};
  createAuctionDto: CreateAuctionDto = {};

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

  public togglePpr() {
    if (this.formGroup.get('pprCtrl').value === true) {
      this.ppr = 'Non-PPR';
    } else {
      this.ppr = 'PPR';
    }
  }

  public submit(value: any): void {
    // tslint:disable-next-line: max-line-length
    if (this.formGroup.get('typeCtrl').value === false) {
      // tslint:disable-next-line: max-line-length
      this.httpService.get(APIURL.AUCTIONCALL + '/existsByLeagueName/' + `${this.formGroup.get('leagueNameCtrl').value}`).subscribe((nameExists) => {
        if (nameExists === true) {
          this.snackBar.open('Duplicate name exists', 'FAIL', {});
          this.formGroup.reset();
        } else {
          this.createAuctionDto.leagueName = this.formGroup.get('leagueNameCtrl').value;
          this.createAuctionDto.budget = this.formGroup.get('budgetCtrl').value;
          this.createAuctionDto.maxPlayers = this.formGroup.get('maxPlayerCtrl').value;
          this.createAuctionDto.pPR = this.formGroup.get('pprCtrl').value;
          console.log('thisleague', this.createAuctionDto);
          this.httpService.post(APIURL.AUCTIONCALL + '/createAuctionLeague/', this.createAuctionDto).subscribe(data => {
            console.log('data:', data);
            this.snackBar.open('League Created', 'SUCCESS', {});
          }
          );
          // this.router.navigateByUrl('/home');
        }
      });
    } else {
      // Snake Draft implmentation
    }
  }
}