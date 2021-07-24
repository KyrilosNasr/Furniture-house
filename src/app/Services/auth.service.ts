import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userState: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {}

  signUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(emal, password) {
    return this.afAuth.signInWithEmailAndPassword(emal, password);
  }

  logout() {
    return this.afAuth.signOut();
  }
}
