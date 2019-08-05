import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuPage} from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      { path: 'dashboard/:name', loadChildren: './home/home.module#HomePageModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
}
