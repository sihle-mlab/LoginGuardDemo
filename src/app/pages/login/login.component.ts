import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { isLoggedin } from '../../app.variables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  isLoggedin : boolean;
  
  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
      isLoggedin.state = true;
      this.router.navigate(['']);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode)
      var errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
      var email = error.email;
      console.log(email)
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(credential);
      isLoggedin.state = false;
      // ...
    });
  }

}
