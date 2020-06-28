import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PswordPage } from './psword.page';

const routes: Routes = [
  {
    path: '',
    component: PswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PswordPageRoutingModule {}
