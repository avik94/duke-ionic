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
      { path: 'dashboard', loadChildren: './home/home.module#HomePageModule' },
      { path: 'input-data', loadChildren: './input-data/input-data.module#InputDataPageModule' },
      { path: 'all-data/:name', loadChildren: './all-data/all-data.module#AllDataPageModule' },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
}
