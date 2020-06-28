import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditeprofilePage } from './editeprofile.page';

const routes: Routes = [
  {
    path: '',
    component: EditeprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditeprofilePageRoutingModule {}
