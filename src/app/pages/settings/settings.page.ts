import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage  {

  user = null;
   constructor(
    private auth: AuthService , 
    private tokenStorage: TokenService ,
    private router : Router) {}

  // ionViewWillEnter() {
  //   this.user = this.auth.getUser();
  // }

  logout() {
    this.tokenStorage.signOut();
 
  }
}