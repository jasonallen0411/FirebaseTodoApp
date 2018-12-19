import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  user: Observable<firebase.User>;
  message;
  isUser;

  constructor(private firebaseAuth: AngularFireAuth){
    this.user = firebaseAuth.authState;
  }

  signup(email:string, password:string){
    this.firebaseAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
    .then(msg => {
      this.message = 'Success! ' + msg;
    })
    .catch(err => {
      this.message = 'Sorry!' + err;
    })
  }
  login(email:string, password:string){
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    .then(msg => {
      this.message = 'Success! ' + msg;
    })
    .catch(err => {
      this.message = 'Sorry!' + err;
    })
  }
  logout() {
    this.firebaseAuth.auth.signOut();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if( user ){
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    });  
    return this.isUser;
  }
}
