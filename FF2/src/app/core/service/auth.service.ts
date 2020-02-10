import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
// import { ConfirmComponent } from '@shared/component/dialog/confirm/confirm.component';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/shared/interface/model.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfirmComponent } from 'src/app/shared/component/dialog/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // // tslint:disable-next-line: variable-name
  // private _authState: any = null;
  // // tslint:disable-next-line: variable-name
  // private _user: Observable<User>;

  // public get user(): Observable<User> {
  //   return this._user;
  // }
  // public set user(value: Observable<User>) {
  //   this._user = value;
  // }
  // public get authState(): any {
  //   return this._authState;
  // }
  // public set authState(value: any) {
  //   this._authState = value;
  // }



  // constructor(
  //   public router: Router,
  //   public ngZone: NgZone,
  //   public afAuth: AngularFireAuth,
  //   private snackBar: MatSnackBar,
  //   private afs: AngularFirestore,
  //   public dialog: MatDialog,
  // ) {
  //   // this.user = this.afAuth.authState.pipe(
  //   //   switchMap(user => {
  //   //     if (user) {
  //   //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
  //   //     } else {
  //   //       return of(null);
  //   //     }
  //   //   })
  //   // );
  //   // this.afAuth.authState.subscribe(authState => {
  //   //   this.authState = authState;
  //   // });
  // }

  // get isAuthenticated(): boolean {
  //   return this.authState !== null;
  // }

  // get currentUserId(): string {
  //   return this.isAuthenticated ? this.authState.uid : null;
  // }

  // /* Sign up */
  // public signupEmail(email: string, password: string) {
  //   this.afAuth
  //     .auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(res => {
  //       this.snackBar.open('Registration', 'SUCCESS', {
  //       });
  //       // this.router.navigateByUrl('my-team');
  //       // window.location.reload();
  //     })
  //     .catch(error => {
  //       this.signupErrorPopup(error.message);
  //     });
  // }

  // private OAuthProvider(provider) {
  //   return this.afAuth.auth.signInWithPopup(provider)
  //     .then((credential) => {
  //       this.updateUserData(credential.user);
  //     });
  // }

  // // Firebase Google Sign-in
  // public signinGoogle() {
  //   return this.OAuthProvider(new this.authState.GoogleAuthProvider())
  //     .then(res => { }).catch(error => { });
  // }

  // public signOut() {
  //   this.afAuth.auth.signOut().then(() => {
  //     // this.router.navigate(['/home']);
  //     // window.location.reload();
  //   });
  // }

  // /* Sign in */
  // public signinEmail(email: string, password: string) {
  //   this.afAuth
  //     .auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(credential => {
  //       // this.router.navigateByUrl('my-team');
  //       // window.location.reload();
  //     })
  //     .catch(err => { });
  // }

  // public signupErrorPopup(message: string): void {
  //   const dialogRef = this.dialog.open(ConfirmComponent, {
  //     width: '25vw',
  //     data: {
  //       title: 'Error',
  //       subTitle: 'Signup Failed',
  //       text: message
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe();
  // }

  // public updateUserData(user) {
  //   // Sets user data to firestore on login

  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

  //   const data: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL
  //   };
  //   return userRef.set(data, { merge: true });
  // }

  // get userData(): any {
  //   if (!this.isAuthenticated) {
  //     return [];
  //   }

  //   return [
  //     {
  //       uid: this.authState.uid,
  //       displayName: this.authState.displayName,
  //       email: this.authState.email,
  //       phoneNumber: this.authState.phoneNumber,
  //       photoURL: this.authState.photoURL,
  //       country: this.authState.country
  //     }
  //   ];
  // }

}

// https://stackoverflow.com/questions/42073340/angular2-firebase-get-current-user
