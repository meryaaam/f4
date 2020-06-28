
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductPage } from './product.page';

const routes: Routes = [
    {
    path: '',
    component: ProductPage,
    children: [
        {
            path: 'add',
            loadChildren: () => import('../add/add.module').then( m => m.AddPageModule)
          },
          {
            path: 'edit/:id',
            loadChildren: () => import('../edit/edit.module').then( m => m.EditPageModule)
          },
          {
            path: 'list',
            loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
          }

          ,
    ]
    }
    ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    export class ProductRouter {}
