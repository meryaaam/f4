import { Product, CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: Product[] = [];

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
     ) { }
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + (j.price * j.amount), 0);
  }
  close() {
    this.modalCtrl.dismiss();
  }

  
  async checkout() {
    // Perfom PayPal or Stripe checkout process
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
}


 // ngOnInit() {
  //   let items = this.cartService.getCart();
  //   let selected = {};
  //   for (let obj of items) {
  //     if (selected[obj.id]) {
  //       selected[obj.id].count++;
  //     } else {
  //       selected[obj.id] = {...obj, count: 1};
  //     }
  //   }
  //   this.selectedItems = Object.keys(selected).map(key => selected[key])
  //   this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  // }