import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  action: string;
  id: string;
  uid: string;
  message: Message;
  msgContent = '';
  utilisateur: Utilisateur;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private storage: NativeStorage,
    private toastCtrl: ToastController) { }


  ngOnInit() {
  }

}
