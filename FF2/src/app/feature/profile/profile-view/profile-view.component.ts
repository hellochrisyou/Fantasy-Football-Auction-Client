import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/interface/model.interface';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  thisUser: User;
  user: User;

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.thisUser = this.auth.authState.email;
    const docRef = this.afs.doc(`users/${this.auth.authState.email}`);
    docRef.get().subscribe(doc => {
      if (!doc.exists) {
      }
    }, (err => {
      // console.log('Error fetching document: ', err);
    }));
  }
}
