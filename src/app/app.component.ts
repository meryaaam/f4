import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { category } from 'src/app/models/category';
import { TokenService } from './services/token.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  private roles: string[];
  categories : any[];
  navigate: any ;
  isLoggedIn = false ;


  showAdmin = false;
  showModerator = false;

  username: string;


  constructor(
    private platform: Platform,
    private token: TokenService ,
    private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) {

    this.initializeApp();
    this.categories = category;

  }


  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showAdmin = this.roles.includes('ROLE_ADMIN');
      this.showModerator = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  showCategory(catTitle: string) : void {
    this.navCtrl.navigateForward('/category/' + catTitle);
    console.log('catTitle', catTitle);
  }

  goTo(route: string): void {
    console.log('route', route);
    this.navCtrl.navigateForward(`/${route}`);
  }
}


