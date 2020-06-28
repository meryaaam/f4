import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UdetailPage } from './udetail.page';

const routes: Routes = [
  {
    path: '',
    component: UdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UdetailPageRoutingModule {}
