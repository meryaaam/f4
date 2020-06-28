import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { FeedPage } from './feed.page';

const routes: Routes = [
{
path: '',
component: FeedPage,
children: [
{
path: 'profile',
loadChildren: () =>
import('../profile/profile.module').then(m => m.ProfilePageModule)
},

{
path: 'settings',
loadChildren: () =>
import('../settings/settings.module').then(
m => m.SettingsPageModule
)
}
,
  {
    path: 'edite',
    loadChildren: () => import('../editeprofile/editeprofile.module').then( m => m.EditeprofilePageModule)
  },
  {
    path: 'password',
    loadChildren: () =>
    import('../psword/psword.module').then(
    m => m.PswordPageModule
    )
    }
    ,
    {
      path: 'notification',
      loadChildren: () => import('../notification/notification.module').then( m => m.NotificationPageModule)
    }
    ,
  {
    path: 'panier',
    loadChildren: () => import('../panier/panier.module').then( m => m.PanierPageModule)
  }

]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class FeedRouter {}
