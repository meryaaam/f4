import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PswordPageRoutingModule } from './psword-routing.module';

import { PswordPage } from './psword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PswordPageRoutingModule ,
    ReactiveFormsModule
  ],
  declarations: [PswordPage]
})
export class PswordPageModule {}
