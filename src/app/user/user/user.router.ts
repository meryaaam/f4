
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserPage } from './user.page';

const routes: Routes = [
    {
    path: '',
    component: UserPage,
    children: [
        {
            path: 'add',
            loadChildren: () => import('../add/add.module').then( m => m.AddPageModule)
          },
        //   {
        //     path: 'detail/:id',
        //     loadChildren: () => import('../edit/edit.module').then( m => m.EditPageModule)
        //   },
          {
            path: 'list',
            loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
          },

          {
            path: 'detail/:id',
            loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)
          },
    ]
    }
    ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    export class UserRouter {}
