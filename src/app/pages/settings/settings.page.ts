import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { PswordPage } from '../psword/psword.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit  {
  @ViewChild('psword', {static: false, read: ElementRef})fab: ElementRef;

  user: any;

   constructor(
    private modalCtrl: ModalController ,
    private token: TokenService ,
    private router : Router) {}




  ngOnInit() {
    this.user = this.token.getUser();
  }


   openCart() {

    this.router.navigate(['../ps'] ) ;
  }


delete(){}


  logout() {
    this.token.signOut();

 
  }

  edite(){ this.router.navigate(['/feed/profile']) ;}
}