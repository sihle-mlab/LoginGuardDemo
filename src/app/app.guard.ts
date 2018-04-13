import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { isLoggedin } from './app.variables';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {

    constructor(public router: Router) {
        firebase.initializeApp(environment.firebase);
    }
    


    canActivate() {
        // if(isLoggedin.state == true) {
        //     return true;
        // } else {
        //     return false;
        // }
        var user = firebase.auth().currentUser;
        if (user) {
            return true;
        } else {
            // No user is signed in.
            console.log("User is not signed in")
            this.router.navigate(['login']);
            return false;
        }
    }

    canActivateChild() {
        console.log('checking child route access');
        return true;
    }

}