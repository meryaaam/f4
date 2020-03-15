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
  }
  ,

  {
    path: 'add',
    loadChildren: () => import('./product/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'Products/:id',
    loadChildren: () => import('./product/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'Products',
    loadChildren: () => import('./product/list/list.module').then( m => m.ListPageModule)
  }
];
@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule {}
