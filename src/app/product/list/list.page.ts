import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DBService } from '../../services/db.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  products: any ;
  currentP = null ;
  i = -1 ;
  name = '' ;

  constructor(
    private db: DBService ,
    private router: Router ,
    private loadingController: LoadingController ,
    public toastController: ToastController
  ) { }


  ngOnInit() {
    this.retrieveP();
  }


 async retrieveP() {

  const loading = await this.loadingController.create({
    message: 'Loading...'
  });
  await loading.present();

  await this.db.getAll()
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

  refreshList() {
    this.retrieveP();
    this.currentP = null;
    this.i = -1;
  }

  setActiveTProduct(product, index) {
    this.currentP = product;
    this.i = index;
  }


  async removeAllProducts() {

    const toast = await this.toastController.create({
      message: 'All the products have been removed.',
      duration: 2000
    });
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.db.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          loading.dismiss();
          toast.present();
          this.retrieveP();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }


  navigateToAdd() {
    this.router.navigate(['add']);
  }
}
