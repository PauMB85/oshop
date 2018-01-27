import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(x => console.log(x));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
