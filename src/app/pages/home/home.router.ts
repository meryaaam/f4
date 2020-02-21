import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
{
path: 'home',
component: HomePage,
children: [
{
path: 'feed',
loadChildren: () =>
import('../feed/feed.module').then(m => m.FeedPageModule)
},

{
path: 'settings',
loadChildren: () =>
import('../settings/settings.module').then(
m => m.SettingsPageModule
)
}
]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRouter {}
