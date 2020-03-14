import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductHomePageRoutingModule } from './product-home-routing.module';

import { ProductHomePage } from './product-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductHomePageRoutingModule
  ],
  declarations: [ProductHomePage]
})
export class ProductHomePageModule {}
