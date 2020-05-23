import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { Directive, HostBinding, ElementRef } from '@angular/core' ;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})


export class LoginPage implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  passwordType = 'password';
  passwordIcon = 'eye-off';

  constructor(

    public loadingController: LoadingController ,
    private auth: AuthService,
    private tokenStorage: TokenService ,
    private router: Router ,
    private alertCtrl: AlertController ) { }

  ngOnInit() {
    if (this.tokenStorage.getToken() ) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;  }}






   async login() {

  const loading = await this.loadingController.create({
    message: 'Loading...'
  });

  const alert = await this.alertCtrl.create({
      header: 'Login Failed',
      message: 'Wrong username Or password',
      buttons: ['OK']
    });
  await loading.present();
  await this.auth.login(this.form).subscribe(
      data => {

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigateByUrl('/home') ;
        loading.dismiss();
    },
       err => {
        loading.dismiss();
        alert.present();
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  reloadPage() {
    window.location.reload();
  }

  navToR() {this.router.navigateByUrl('/register');
  
   }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }




 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }


}
