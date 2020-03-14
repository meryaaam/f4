

import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { CrudService } from '../../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../../../product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  currentP = null;
  message = '';

  productForm: FormGroup;
  id: any = '';
  Pname: string = '';
  desc: string = '';
  price: number = null;
  ref: string = '';
  Qt: number = null ;

  constructor(
    public api: CrudService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      Pname:  ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      desc: [null, Validators.compose([Validators.maxLength(30), Validators.required  ])],
      price: [null, Validators.required],
      ref : ['' , Validators.required] ,
      Qt : [null , Validators.required]
    });
  }

  async getProduct(id) {
    if(this.route.snapshot.paramMap.get('id') == 'null') {
      this.presentAlertConfirm('You are not choosing an item from the list');
    } else {
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();

      await this.api.get(id)
        .subscribe
        (data => {
          this.currentP = data;
          console.log(data);
          loading.dismiss();
        },
        err => {
          console.log(err);
          loading.dismiss();
        });
    }
  }

  async onFormSubmit(form: NgForm) {
    await this.api.update(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate([ '/tabs', { outlets: { details: id }} ]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['']);
          }
        }
      ]
    });

    await alert.present();
  }

 updatePublished(status) {
    const data = {
      title: this.currentP.title,
      description: this.currentP.description,
      published: status
    };

    this.api.update(this.currentP.id, data)
      .subscribe(
        response => {
          this.currentP.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct() {
    this.api.update(this.currentP.id, this.currentP)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct() {
    this.api.delete(this.currentP.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
}
