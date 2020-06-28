import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

Image: any ;


ListImage: any [] = [];


sliderConfig =
{
slidesPreview: 1.6 ,
spaceBetween: 4 ,
centredSlides: true
};

P: any ;
constructor(  private imageS: ImagesService ,
              private image : ImagesService ,
              private httpClient: HttpClient ,
              private db: ProductService,
              private route: ActivatedRoute,
              private router: Router ,
              private cartService: CartService,
              public loadingController: LoadingController ,
              public toastController: ToastController ,
              private nav: NavController ) { }

  ngOnInit() {
    this.getproduct(this.route.snapshot.paramMap.get('id'));

  }


  openCart() {
    this.nav.navigateForward('/cart');
  }

    // methode pour ajouter un article au panier
  async addToCart(product) {  this.cartService.addProduct(product); }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }


  onModelChange($event) {
    console.log('event', $event);
  }


getproduct(id) {

this.getP(id) ;
this.getPImages(id) ;

}

getPImages(id) {

  this.imageS.getPImages(id)
  .subscribe(
    (data: any[]) => {
        this.ListImage = data;
    },
    (error) => console.log(error)
);
}




  getImage(id) {


 this.imageS.getImage(id).subscribe(
   data=> {this.Image = data ; } ,
   error => {
    console.log(error); 
  });

  }


  change() {}

  async getP(id) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    await this.db.get(id)
      .subscribe(
        data => {
          this.P = data;
          console.log(data);
          loading.dismiss();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }

  async updateP() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    const toast = await this.toastController.create({
      message: 'The product was updated successfully!',
      duration: 2000
    });
    await loading.present();

    await this.db.update(this.P.id, this.P)
      .subscribe(
        response => {
          console.log(response);
          loading.dismiss();
          toast.present();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }


  buy(){  this.nav.navigateForward('/cart');}

}

