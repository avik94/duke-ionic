import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import {MenuRoutingModule} from './menu-routing.module';
import {HeaderModule} from '../../components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        MenuRoutingModule,
        RouterModule.forChild(routes),
        HeaderModule
    ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
