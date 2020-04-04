import { Component, OnInit } from '@angular/core';
import { DBService } from '../../services/db.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { category } from 'src/models/category';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
category ;
  product = {

    name : '' ,
    price : null ,
    qt : null ,
    category : ''

  } ;

  submitted = false ;

  constructor(
    private db: DBService ,
    public loadingController: LoadingController ,
    public toastController: ToastController
  ) {  this.category = category;}

  ngOnInit() {
  }

  async saveProduct() {

    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    const toast = await this.toastController.create({
      message: 'Your products have been saved.',
      duration: 2000
    });
    await loading.present();

    const data = {
      name: this.product.name,
      price: this.product.price,
      qt : this.product.qt,
      cat : this.product.category
    };

    await this.db.create(data)
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

    this.submitted = true;
  }

  newProduct() {

    this.submitted = false;
    this.product = {
      name: '',
      price: null,
      qt: null ,
      category : ''
    };
  }
}
