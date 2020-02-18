import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionSortService } from 'src/app/core/service/auction-sort.service';
import { EmitService } from 'src/app/core/service/emit.service';
import { LastSeasonStatService } from 'src/app/core/service/last-season-stat.service';
import {
  MERGE_DEF_STATS,
  MERGE_K_STATS,
  MERGE_QB_STATS,
  MERGE_RB_STATS,
  MERGE_TE_STATS,
  MERGE_WR_STATS,
} from 'src/app/core/util/merge-stats.util';
import {
  DEF_COL_OBJ,
  DEF_DISPLAY,
  K_COL_OBJ,
  K_DISPLAY,
  QB_COL_OBJ,
  QB_DISPLAY,
  RB_COL_OBJ,
  RB_DISPLAY,
  REC_COL_OBJ,
  REC_DISPLAY,
} from 'src/app/shared/const/column.const';
import { DEF, Kicker, LastSeasonPlayers, QB, RB, TE, WR, Team, League, User } from 'src/app/shared/interface/model.interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/service/auth.service';
import { REMOVE_TES, REMOVE_DEF, REMOVE_KICKERS, REMOVE_QBS, REMOVE_RBS, REMOVE_WRS } from 'src/app/core/util/remove-player.util';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.scss']
})
export class LiveAuctionComponent implements OnInit, OnDestroy {

  lastSeasonPlayers: LastSeasonPlayers = {
    quaterBacks: [],
    runningsBacks: [],
    wideReceivers: [],
    tightEnds: [],
    defenses: [],
    kickers: []
  };
  public user: User = {};

  thisLeague: League = {
    Name: 'thisLeague',
    teams: [],
    PPR: 'Yes',
    TotalBudget: 10000,
    TeamCount: 0,
    MaxPlayers: 10
  };
  thisTeam: Team = {
    Name: this.auth.userData.displayName,
    players: [],
    Current_Budget: 10000
  };

  readonly QB_COL_OBJ = QB_COL_OBJ;
  readonly RB_COL_OBJ = RB_COL_OBJ;
  readonly REC_COL_OBJ = REC_COL_OBJ;
  readonly DEF_COL_OBJ = DEF_COL_OBJ;
  readonly K_COL_OBJ = K_COL_OBJ;

  readonly QB_DISPLAY = QB_DISPLAY;
  readonly RB_DISPLAY = RB_DISPLAY;
  readonly REC_DISPLAY = REC_DISPLAY;
  readonly DEF_DISPLAY = DEF_DISPLAY;
  readonly K_DISPLAY = K_DISPLAY;

  qbArray: QB[] = [];
  rbArray: RB[] = [];
  wrArray: WR[] = [];
  teArray: TE[] = [];
  defArray: DEF[] = [];
  kArray: Kicker[] = [];

  constructor(
    private route: ActivatedRoute,
    private lastSeasonStatService: LastSeasonStatService,
    private auctionSortService: AuctionSortService,
    private emitService: EmitService,
    private auth: AuthService,
    private db: AngularFirestore
  ) { }

  ngOnDestroy(): void {
    this.emitService.mergeQbOutput.unsubscribe();
    this.emitService.mergeRbOutput.unsubscribe();
    this.emitService.mergeWrOutput.unsubscribe();
    this.emitService.mergeTeOutput.unsubscribe();
    this.emitService.mergeDefOutput.unsubscribe();
    this.emitService.mergeKickerOutput.unsubscribe();
  }

  ngOnInit(): void {
    console.log(REC_COL_OBJ);
    console.log(REC_DISPLAY);

    // this.user.displayName = 'Chris You';
    // this.user.uId = this.auth.authState.uid;
    // this.user.email = this.auth.authState.email;
    // this.user.photoURL = '';
    // this.auth.updateUserData(this.user);
    // console.log('done');


    this.emitService.mergeQbOutput.subscribe(qbArray => {
      this.lastSeasonPlayers.quaterBacks = MERGE_QB_STATS(qbArray, this.lastSeasonPlayers.quaterBacks);
      this.lastSeasonPlayers.quaterBacks = REMOVE_QBS(this.lastSeasonPlayers.quaterBacks);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeRbOutput.subscribe(rbArray => {
      this.lastSeasonPlayers.runningsBacks = MERGE_RB_STATS(rbArray, this.lastSeasonPlayers.runningsBacks);
      this.lastSeasonPlayers.runningsBacks = REMOVE_RBS(this.lastSeasonPlayers.runningsBacks);
      this.emitService.refreshTable();

    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeWrOutput.subscribe(wrArray => {
      this.lastSeasonPlayers.wideReceivers = MERGE_WR_STATS(wrArray, this.lastSeasonPlayers.wideReceivers);
      this.lastSeasonPlayers.wideReceivers = REMOVE_WRS(this.lastSeasonPlayers.wideReceivers);
      this.emitService.refreshTable();
      console.log('wr this', this.lastSeasonPlayers.wideReceivers);
      // console.log('te this', this.lastSeasonPlayers.tightEnds);
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeTeOutput.subscribe(teArray => {
      this.lastSeasonPlayers.tightEnds = MERGE_TE_STATS(teArray, this.lastSeasonPlayers.tightEnds);
      this.lastSeasonPlayers.tightEnds = REMOVE_TES(this.lastSeasonPlayers.tightEnds);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeDefOutput.subscribe(defArray => {
      this.lastSeasonPlayers.defenses = MERGE_DEF_STATS(defArray, this.lastSeasonPlayers.defenses);
      this.lastSeasonPlayers.defenses = REMOVE_DEF(this.lastSeasonPlayers.defenses);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    this.emitService.mergeKickerOutput.subscribe(kArray => {
      this.lastSeasonPlayers.kickers = MERGE_K_STATS(kArray, this.lastSeasonPlayers.kickers);
      this.lastSeasonPlayers.kickers = REMOVE_KICKERS(this.lastSeasonPlayers.kickers);
      this.emitService.refreshTable();
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
      });

    // Subscribed to Auction Values
    this.route.data.subscribe((data: { auctionValues: any }) => {
      this.lastSeasonPlayers = this.auctionSortService.sortAuctionPlayers(data.auctionValues);
      console.log(this.lastSeasonPlayers);
    },
      err => {
        console.log('error in resolve service: ', err);
      },
      () => {
        this.emitService.refreshTable();
        console.log(this.lastSeasonPlayers);
      });
  }

  public addQbPlayer(index: number): void {
    this.thisTeam.players.push(this.lastSeasonPlayers.quaterBacks[index]);
    this.lastSeasonPlayers.kickers = REMOVE_TES(this.lastSeasonPlayers.kickers);
    let setDoc = this.db.collection('Leagues').doc('chris').set(this.thisLeague)
    this.db.collection("Leagues").doc('Chris').set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    })
      // leagueDoc.doc('newLeague').collection('this.auth.userData.displayName');
      // leagueDoc.doc('newLeague').collection(this.auth.userData.displayName).add(this.thisTeam).then(docRef => {
      //   console.log('Document added to Team collection: ', docRef);
      .catch(error => {
        console.error('Error adding document to Team collection: ' + error.message);
      });
  }

  public addRbPlayer(index: number): void {
    console.log('add player index #: ', index);
  }

  public addWrPlayer(index: number): void {
    console.log('add player index #: ', index);
  }

  public addTePlayer(index: number): void {
    console.log('add player index #: ', index);
  }

  public addDefPlayer(index: number): void {
    console.log('add player index #: ', index);
  }

  public addKPlayer(index: number): void {
    console.log('add player index #: ', index);
  }
}
