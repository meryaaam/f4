import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UdetailPageRoutingModule } from './udetail-routing.module';

import { UdetailPage } from './udetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    UdetailPageRoutingModule
  ],
  declarations: [UdetailPage]
})
export class UdetailPageModule {}
