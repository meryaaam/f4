import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage  {

  user = null;
  constructor(private auth: AuthService) {}

  ionViewWillEnter() {
    this.user = this.auth.getUser();
  }

  flogout() {
    this.auth.logout();
  }
}