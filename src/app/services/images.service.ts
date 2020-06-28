import { Injectable } from '@angular/core';
import { HttpClient , HttpEventType, HttpResponse,  } from '@angular/common/http';
import { CameraOptions , Camera} from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ActionSheetController, LoadingController, ToastController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private httpClient: HttpClient ,
    private camera: Camera,
    private transfer: FileTransfer,
    private webview: WebView ,
    private actionSheet: ActionSheetController,
    private imagePicker: ImagePicker,
    private loadingCtrl: LoadingController ,
    private toastCtrl: ToastController ,
    ) { }

  myPictures: string[] = [];
  selectedFile: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  imageName: any;


 async onUpload(data) {
    this.httpClient.post('http://localhost:8034/image/upload', data) ;
  }

  getImage(id) {
  return  this.httpClient.get('http://localhost:8034/image/' + id) ;

  }

  getPImages(id) {
    return this.httpClient.get('http://localhost:8034/image/product/' + id )

 }



  async galerie(imageNum: number) {
    let options: ImagePickerOptions = {
      maximumImagesCount: imageNum,
      outputType: 0,
      quality: 100,
    }
    return this.imagePicker.getPictures(options);
  }
  // Grace à cette methode on peut prendre en photo
  async getCam() {
    let options: CameraOptions = {
      sourceType: 1,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    return this.camera.getPicture(options);
  }

  async action() {
    const actionSheet = await this.actionSheet.create({
      header: 'Sélectionner la source',
      buttons: [
        {
          text: 'Galerie',
          icon: 'images',
          handler: async () => {
            console.log('Galerie');
            let pictures: string[] = await this.galerie(4);
            for (let i = 0; i < pictures.length; i++) {
                const element = pictures[i];
                console.log('element de pictures', element);
                let src = this.webview.convertFileSrc(element);
                this.myPictures.push(src);
              }
          }
        },
        {
          text: 'Camera',
          icon: 'camera',
          handler: ()=> {
            console.log('Camera');
            this.getCam().then(image => {
              console.log('image', image);
              let src = this.webview.convertFileSrc(image);
              this.myPictures.push(src);
            })
          }
        },
        {
          text: 'Annuler',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
