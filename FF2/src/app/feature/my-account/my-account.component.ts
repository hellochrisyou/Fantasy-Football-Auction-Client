import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interface/model.interface';
import { AuthService } from 'src/app/core/service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  thisUser: User;
  user: User;

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.thisUser = this.auth.authState;
    console.log('this user', this.auth.authState.photoURL);
    const docRef = this.afs.doc(`users/${this.auth.authState.email}`);
    docRef.get().subscribe(doc => {
      if (!doc.exists) {
        // console.log('No such document!');
      } else {
        // console.log('Document data:', doc.data());
        // this.thisUser = doc.data();
        // if (this.thisUser.country === '') {
        //   this.thisUser.country = 'N/A';
        // }
        // if (this.thisUser.photoURL === '') {
        //   this.thisUser.country = 'N/A';
        // }
      }
    }, (err => {
      // console.log('Error fetching document: ', err);
    }));
  }
}
