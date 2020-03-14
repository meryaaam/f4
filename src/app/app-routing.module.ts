import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

{
path: '',
loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
},
{
path: 'home',
loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomePageModule)
},
  {
    path: 'panier',
    loadChildren: () => import('./pages/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/product/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/product/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/product/list/list.module').then( m => m.ListPageModule)
  }
  ,
  {
    path: 'Details',
    loadChildren: () => import('./pages/product/details/details.module').then( m => m.DetailsPageModule)
  },

  {
    path: 'product',
    loadChildren: () => import('./pages/product/product-home/product-home.module').then( m => m.ProductHomePageModule)
  }
];
@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule {}
