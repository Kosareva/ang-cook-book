import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {
    }

    signupUser(email: string, pass: string) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, pass: string) {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logOut() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
