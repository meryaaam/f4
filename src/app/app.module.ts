import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { CartPageModule } from './pages/cart/cart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Directive, HostBinding, ElementRef } from '@angular/core' ;





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot(),
    CartPageModule, BrowserAnimationsModule ,
    DragDropModule,
    ScrollingModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } , 
    Facebook,
    NativeStorage,
    PhotoViewer,
    ImagePicker,
    Camera,
    FileTransfer,
    SocialSharing,
    Deeplinks,
    WebView 
    //,Directive, HostBinding, ElementRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
