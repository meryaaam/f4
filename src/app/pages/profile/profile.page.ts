import { HttpClient } from '@angular/common/http';
import { NavController, ActionSheetController, ToastController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Utilisateur } from 'src/models/utilisateur';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { environement } from 'src/models/environement';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileType: 'Profil';

  constructor(
 ) { }

   ngOnInit() {}

}
