import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { LoadingController, ToastController, NavController, ActionSheetController } from '@ionic/angular';
import { category } from 'src/app/models/category';
import { formatDate } from '@angular/common';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { TokenService } from 'src/app/services/token.service';
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
    category : '' ,
    // Img: null,
    createdAt: formatDate(new Date(), 'yyyy/MM/dd', 'en') ,
    createdBy : null
  } ;

  submitted = false ;

  imageURI: any ;
  imageFileName: any ;
  myPictures: string[] = [];
imgUploaded = false;
numImgUpload = 0;

id : number ;
  constructor(
    private db: ProductService ,
    public loadingController: LoadingController ,
    public toastController: ToastController ,
    public navCtrl: NavController,
    public tokenStorage : TokenService
   
  ) {  this.category = category; }

  ngOnInit() {
    this.id = this.tokenStorage.getUser().id ; 
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
      cat : this.product.category ,
      // Img : this.product.Img ,
      createdAt : null ,
      createdBy : null,
    };
    data.createdAt =  formatDate(new Date(), 'yyyy/MM/dd' , 'en') ;
    data.createdBy = this.id ;
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
      name : '',
      price : null,
      qt: null,
      category : null ,
      // Img: null,
      createdAt: null ,
      createdBy : null ,

    };

    this.product.createdAt = formatDate(new Date(), 'yyyy/MM/dd', 'en')  ;
    this.product.createdBy = this.id ;

  }







}
