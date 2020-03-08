import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Player, AuctionLeague } from 'src/app/shared/interface/model.interface';
import { CreateBaseForm } from 'src/app/shared/base/base-form';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ongoing-draft',
  templateUrl: './ongoing-draft.component.html',
  styleUrls: ['./ongoing-draft.component.scss']
})
export class OngoingDraftComponent extends CreateBaseForm implements OnInit {

  draftTurn: string;
  currentPlayer: Player;
  currentBidder: string;
  currentBid: string;

  // tslint:disable-next-line: variable-name
  private _ongoingLeague: AuctionLeague;

  @Input()
  public get ongoingLeague(): AuctionLeague {
    return this._ongoingLeague;
  }
  public set ongoingLeague(value: AuctionLeague) {
    this._ongoingLeague = value;
  }

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef, ) {
    super(fb, changeDetectorRef);
  }

  ngOnInit(): void {

    this.formGroup = this.fb.group({
      bidCtrl: ['', [
        Validators.required
      ]],
    });

    // this.currentPlayer = this._ongoingLeague.currentPlayer;
  }

  public passTurn() {
    // make league call
  }
}
