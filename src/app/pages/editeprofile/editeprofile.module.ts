import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditeprofilePageRoutingModule } from './editeprofile-routing.module';

import { EditeprofilePage } from './editeprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditeprofilePageRoutingModule
  ],
  declarations: [EditeprofilePage]
})
export class EditeprofilePageModule {}
