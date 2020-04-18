import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit  {

  user: any;

   constructor(
    private auth: AuthService ,
    private token: TokenService ,
    private router : Router) {}

  // ionViewWillEnter() {
  //   this.user = this.auth.getUser();
  // }





  ngOnInit() {
    this.user = this.token.getUser();
  }

  logout() {
    this.token.signOut();

 
  }
}