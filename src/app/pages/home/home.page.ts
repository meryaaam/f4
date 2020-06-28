import { CartService } from '../../services/cart.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { CartPage } from '../cart/cart.page';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { category } from 'src/app/models/category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {
  cart = [];
  products: any ;

  Pdt  : any ;
  cartItemCount: BehaviorSubject<number>;
  roles = [] ;
  category ;

sliderConfig =
{
slidesPreview: 1.6 ,
spaceBetween: 4 ,
centredSlides: true
};

selectedFile: File;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;

isLoggedIn = false ;

name='' ;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(
    private httpClient: HttpClient ,
    private cartService: CartService,
    private modalCtrl: ModalController ,
    private token: TokenService ,
    private router: Router ,
    private db: ProductService ,
    private loadingController: LoadingController ,
    public toastController: ToastController
     ) {}

  ngOnInit() {
    this.getAll() ;
    this.isLoggedIn = !!this.token.getToken();
    this.products = this.getAll() ;
    // this.Pdt = this.getPP() ;
    // this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.category = category ;
    if (this.token.getToken() ) {
      this.isLoggedIn = true;
      this.roles = this.token.getUser().roles;  }





  }

async search(name) {
  const loading = await this.loadingController.create({
    message: 'Loading...'
  });
  await this.db.findByTitle(this.name).subscribe(
  data => {
    this.products = data;
    console.log(data);
    loading.dismiss();
  },
  error => {
    console.log(error);
    loading.dismiss();
  });
}



  async getP(id) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    await this.db.get(id)
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
          loading.dismiss();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }

  getImage(id) {
    // Make a call to Sprinf Boot to get the Image Bytes.

    this.httpClient.get('http://localhost:8034/image/' + id)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');
  }

  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass: 'cart'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceInLeft');
    });

    modal.present();
  }


  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName) ;
    // https://github.com/daneden/animate.css//

    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }



  login() { this.router.navigate(['login']); }

  getAll() {
    this.db.getAll()
       .subscribe(
         data => {
           this.products = data;
           console.log(data);
         },
         error => {
           console.log(error);
         });
   }

}
