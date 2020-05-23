import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  product : Product;
rate: any;
slidesOpt = {
  speed: 1000,
  autoplay: {
    delay: 500
  }
}
  constructor(private navCtlr: NavController) { }

  ngOnInit() {
  }

  share(){

  }
  showImage(imgId: string, imgTitle: string) {}
  leaveNote() {}
  //  grace à cette methode, on se déplace sur la page 'cart' 
  openCart() {
    this.navCtlr.navigateForward('/cart');
  }

    // methode pour ajouter un article au panier
  async addToCart(item: Product) {}


  onModelChange($event) {
    console.log('event', $event);
  }
}

