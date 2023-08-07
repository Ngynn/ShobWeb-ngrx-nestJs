import { Injectable } from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: Auth) { }

  async loginWithGoogle() {
    let provider = new GoogleAuthProvider;
    try {
      await signInWithPopup(this.auth, provider);
      return Credential;
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}
