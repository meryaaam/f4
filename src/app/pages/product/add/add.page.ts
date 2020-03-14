import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { CrudService } from '../../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../../../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

 public productForm: FormGroup;
 submitted = false;
 products = {
 Pname: '',
 price: null,
 Qt: null ,
 cat: '',
} ;


  constructor(
    public api: CrudService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      Pname:  ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      price: [null, Validators.required],
      Qt : [null , Validators.required],
      cat : ['' , Validators.required] ,
    });
  }

  async onFormSubmit(form: NgForm ) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });

    await loading.present();

    const data = {
      Pname: this.products.Pname ,
      price: this.products.price ,
      Qt: this.products.Qt,
      cat: this.products.cat

    } ;
    await this.api.create(form)
      .subscribe(res => {
          console.log(res);
          loading.dismiss();
        }, (err) => {
          console.log(err);
          loading.dismiss();
        });

      }

  saveProduct() {
     this.submitted = false ;
     this.products = {
     Pname: '' ,
      price: '',
      Qt: '' ,
      cat: ''
    } ;
  }

}


