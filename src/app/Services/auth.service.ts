import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userId: string = '';
  userState: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.userState = afAuth.user;
  }

  signUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }
}
