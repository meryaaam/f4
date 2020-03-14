import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductHomePage } from './product-home.page';


const routes: Routes = [
  {
    path: '',
    component: ProductHomePage,
    children : [
      
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductHomePageRoutingModule {}
