import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Angular Cook Book';

    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyABBX1LVwAPRYCf1ejOVfGV122XfX_ants',
            authDomain: 'ng-recipe-book-2d0a6.firebaseapp.com'
        });
    }

}

